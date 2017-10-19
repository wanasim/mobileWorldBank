
import React, { Component } from 'react'; 
import { WebView,AppRegistry, View, Text,StyleSheet, StatusBar, Image, TouchableHighlight } from 'react-native'; 
import Modal from 'react-native-modalbox';
import { StackNavigator } from 'react-navigation';
import CountryMenu from './country_menu';

export default class RenderMap extends Component { 

  static navigationOptions = {
    title: 'Map',
    header: null
  };



  constructor(props) {
        super(props)
        this.state = {
           selectedCountry: null,
           selectedCountryCode: null,
          countryDetail: [{}],
        }
       
    }
    onMessage(data) {

      data = data.split(',');
      this.setState({
        selectedCountry:data[0],
        selectedCountryCode:data[1]
      },
      function () {
          this.fetchCountryDetail(data[0])
          this.refs.modal6.open()
          console.log(this.state.selectedCountry);
      })

    }



     fetchCountryDetail(countryName) {

        const { params } = this.props.navigation.state;

      fetch("https://kgsearch.googleapis.com/v1/entities:search?&types=Country&types=AdministrativeArea&query="+ countryName +"&key=AIzaSyCc1M0yZWtVzPt2R_sbRWklEHDpqTDj0hc&limit=1&indent=True")
        .then((response) =>
          response.json())
        .then((responseData) => {
          console.log(responseData)
          this.setState({
            countryDetail: responseData.itemListElement[0].result.detailedDescription,
          });
        })
        .done();
      }



  render() { 


     const { navigate } = this.props.navigation;

   let htmlTest = `
             

<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.2.0/dist/leaflet.css"
  integrity="sha512-M2wvCLH6DSRazYeZRIm1JnYyh22purTM+FDB5CsyxtQJYeKq83arPe5wgbNmcFXGqiSH2XR8dT/fJISVA1r/zQ=="
  crossorigin=""/>
  <script src="https://unpkg.com/leaflet@1.2.0/dist/leaflet.js"
  integrity="sha512-lInM/apFSqyy1o6s89K4iQUKg6ppXEgsVxT35HbzUupEVRh2Eu9Wdl4tHj7dZO0s1uvplcYGmt3498TtHq+log=="
  crossorigin=""></script>
  <script src="http://d3js.org/d3.v3.min.js"></script>

  </head>
  <body>

<style type="text/css">
#mapid {
  width: 100%;
  height: 100%;
  
}
</style>
    <div id="mapid"></div>
  </body>

</html>

  `
 let jsCode = `
       

  var selectedCountry;
  var map = new L.Map('mapid',
    {
     
      center: [18.9465,-90.0232],
       zoomControl:false,
      maxZoom : 10,
      minZoom: 0,
      zoom: 2,
      attributionControl: false,
      noWrap : true
    }).addLayer(
      new L.TileLayer("https://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=8f24cebb48b04166bbecd9ce32d8acb9")
    );

    d3.json("https://raw.githubusercontent.com/nardosm/DataBankApp/master/convertedCoords.json", function (json){
        function style(feature) {
          return {
            fillColor: "transparent",
            fill : true,
            weight: 0.0,
            opacity: 0.0,
          };
        }
        var geo = L.geoJson(json, {
          onEachFeature : onEachFeature,
          style : style
        }).addTo(map);


         geo.eachLayer(function (layer){
         
        });

        function onEachFeature(feature, layer){
          function onCountryClick(e){
            selectedCountry = e.target.feature.properties.NAME;
            selectedCountryCode = e.target.feature.properties.ISO2;
            

            var countryInfo = selectedCountry + ',' + selectedCountryCode;
            window.postMessage(countryInfo);
           
            
            
          };
          layer.on({
            click : onCountryClick
          });
        };
      

      });
    `;

    //console.log(this.state.selectedCountry);
    return ( 


     <View style={{flex:1, padding:-10, margin:-10}}>

      <StatusBar  barStyle="light-content" translucent={true}/>
      <WebView 
        source={{html: htmlTest}} 
        injectedJavaScript={jsCode}
        style={{ padding:0, margin:0}} 
        onMessage={(event)=> this.onMessage(event.nativeEvent.data)}
      /> 
        <Modal style={[styles.modal, styles.modal4]} position={"bottom"} ref={"modal6"} swipeArea={20} backdropOpacity={0}>
          <Image
              style={{ height: 30,width:30,borderRadius: 50 }}
              source={{uri: 'http://www.geognos.com/api/en/countries/flag/' + this.state.selectedCountryCode + '.png'}}
          />
          <Text style={styles.countryText}>{this.state.selectedCountry}</Text>
          <Text numberOfLines={4} style={styles.aboutText}>{this.state.countryDetail.articleBody}</Text>
          <TouchableHighlight
            style={styles.submit}
            onPress={() => navigate('CountryDetail', { countryName: this.state.selectedCountry, countryCode:this.state.selectedCountryCode })}
            underlayColor='#fff'>
              <Text style={styles.submitText}>Explore</Text>
          </TouchableHighlight>
        </Modal>
      </View>

    ); 
  } 
}




const styles = StyleSheet.create({

  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  modal4: {
    height: 300
  },

  countryText:{
    fontSize:25,
    fontFamily:'Montserrat-Medium',
    color:'#214559',

  },
  aboutText:{
    fontSize: 15,
    fontFamily:'Montserrat-Light',
    paddingLeft:20,
    paddingRight:20,
    paddingTop: 10
  },
  submit:{
    backgroundColor:'#FB5260',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
    marginTop:30,

  },
  submitText:{
      color:'#fff',
      textAlign:'center',
      paddingLeft:50,
      paddingRight:50,
      paddingTop:10,
      paddingBottom:10,
      fontSize:20,
      fontFamily:'Montserrat-Medium',
  }


});



export const SimpleApp = StackNavigator({
  Home: { screen: RenderMap },
  CountryDetail: { screen: CountryMenu },
});



AppRegistry.registerComponent('DataBankApp', () => SimpleApp);


