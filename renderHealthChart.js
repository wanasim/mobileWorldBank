
import React, { Component } from 'react';

import { View, ScrollView, Text, StatusBar, Platform, Dimensions,AppRegistry, Image, StyleSheet, WebView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import SliderEntry from './src/components/SliderEntry';
import { ENTRIES5 } from './src/static/entries';
import styles from './src/styles/index.style';
import LineChart from './src/linechart';
import LineChart2 from './src/linechart';
import DoghnutChart from './src/doughnut';
import BarChart from './src/barchart';
import PolarArea from './src/polararea';
import Icon from 'react-native-vector-icons/Ionicons';


const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.4;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

const SLIDER_1_FIRST_ITEM = 0;
const sliderWidth = viewportWidth;
const itemWidth = slideWidth + itemHorizontalMargin * 1;

const indicatorValues = 
  [ 
    "ER.FSH.AQUA.MT", 
    "AG.PRD.CROP.XD", 
    "AG.CON.FERT.PT.ZS",
    "AG.PRD.FOOD.XD", 
    "AG.PRD.LVSK.XD", 
    "ER.FSH.PROD.MT",
  ];

export default class RenderChart extends Component {


    constructor (props) {
        super(props);
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
            slider1Ref: null, 
            chartData0:[{}],
            chartData1:[{}],
            chartData2:[{}],
            chartData3:[{}],
        };
    }



     componentDidMount() {
      this.fetchChartData0();
      this.fetchChartData1();
      this.fetchChartData2();
      this.fetchChartData3();

    }

     fetchChartData0(indicatorValue,index) {

        
         //console.log("Country Name isssss:",params.countryName); 

      fetch("http://api.worldbank.org/countries/"+this.props.countryCode+"/indicators/"+"SP.ADO.TFRT"+"?format=json&date=2000:2016")
        .then((response) =>
          response.json())
        .then((responseData) => {
          //console.log(responseData)
          let result = responseData[1].map(item => item.value);

          result = result.map(function(val, i) {
                  return val === null ? 0 : parseInt(val);
              });

          console.log("Result Is: ",result)
          this.setState({
            chartData0: result
          });
        })
        .done();
      
      }

        fetchChartData1(indicatorValue,index) {

        
         //console.log("Country Name isssss:",params.countryName); 

      fetch("http://api.worldbank.org/countries/"+this.props.countryCode+"/indicators/"+"SH.HIV.0014"+"?format=json&date=2000:2016")
        .then((response) =>
          response.json())
        .then((responseData) => {
          //console.log(responseData)
          let result = responseData[1].map(item => item.value);

          result = result.map(function(val, i) {
                  return val === null ? 0 : parseInt(val);
              });

          console.log("Result Is: ",result)
          this.setState({
            chartData1: result
          });
        })
        .done();
      
      }



      fetchChartData2(indicatorValue,index) {

        
         //console.log("Country Name isssss:",params.countryName); 

      fetch("http://api.worldbank.org/countries/"+this.props.countryCode+"/indicators/"+ "SH.STA.DIAB.ZS"+"?format=json&date=2000:2016")
        .then((response) =>
          response.json())
        .then((responseData) => {
          //console.log(responseData)
          let result = responseData[1].map(item => item.value);

          result = result.map(function(val, i) {
                  return val === null ? 0 : parseInt(val);
              });

          console.log("Result Is: ",result)
          this.setState({
            chartData2: result
          });
        })
        .done();
      
      }



      fetchChartData3(indicatorValue,index) {

        
         //console.log("Country Name isssss:",params.countryName); 

      fetch("http://api.worldbank.org/countries/"+this.props.countryCode+"/indicators/"+"SH.XPD.PUBL.ZS"+"?format=json&date=2000:2016")
        .then((response) =>
          response.json())
        .then((responseData) => {
          //console.log(responseData)
          let result = responseData[1].map(item => item.value);

          result = result.map(function(val, i) {
                  return val === null ? 0 : parseInt(val);
              });

          console.log("Result Is: ",result)
          this.setState({
            chartData3: result
          });
        })
        .done();
      
      }





    _renderLineChart(){


      switch(this.state.slider1ActiveSlide){

        case 0:
          return(
            <View style={{flex:3}}>
            <Text style={sty.chartTitle}><Icon name="ios-stats" size={20} color="#FB5260" /> {ENTRIES5[this.state.slider1ActiveSlide].title}</Text>
              <LineChart  data= {this.state.chartData0}/>
            </View>
          ) 
        break;

        case 1:
          return(
            <View style={{flex:3}}>
            <Text style={sty.chartTitle}><Icon name="ios-stats" size={20} color="#FB5260" />  {ENTRIES5[this.state.slider1ActiveSlide].title} </Text>
              <DoghnutChart data= {this.state.chartData1}/>
            </View>
          ) 
        break;

        case 2:
          return(
            <View style={{flex:3}}>
            <Text style={sty.chartTitle}><Icon name="ios-stats" size={20} color="#FB5260" /> {ENTRIES5[this.state.slider1ActiveSlide].title} </Text>
              <BarChart  data= {this.state.chartData2}/>
            </View>
          ) 
        break;

        case 3:
          return(
            <View style={{flex:3}}>
            <Text style={sty.chartTitle}><Icon name="ios-stats" size={20} color="#FB5260" />  {ENTRIES5[this.state.slider1ActiveSlide].title} </Text>
              <PolarArea data= {this.state.chartData3}/>
            </View>
          ) 
        break;

      }

    }



    _renderItem ({item, index}) {
        return (
            <View
              style={{flex: 1,
              borderRadius:5,
              backgroundColor:'#ffffff',
              justifyContent: 'center',
              alignItems: 'center',
              width: 270,
              height: 120}}
            >
          
            <Text style={sty.overlayText}>{item.title}</Text>
            </View>
        );
}

     
    get example1 () {
        const { slider1ActiveSlide, slider1Ref } = this.state;

        return (
            <View>
                <Carousel
                  ref={(c) => { if (!this.state.slider1Ref) { this.setState({ slider1Ref: c }); } }}
                  data={ENTRIES5}
                  renderItem={this._renderItem}
                  sliderWidth={sliderWidth}
                  itemWidth={270}
                  hasParallaxImages={true}
                  firstItem={SLIDER_1_FIRST_ITEM}
                  inactiveSlideScale={0.9}
                  inactiveSlideOpacity={1}
                  enableMomentum={false}
                  scrollEndDragDebounceValue={Platform.OS === 'ios' ? 0 : 100}
                  onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
                />
                
            </View>
        );
    }

    
 render() {


  
  console.log("Chart0 data is :", this.state.chartData0);
  console.log("Chart1 data is :", this.state.chartData1);
  console.log("Chart2 data is :", this.state.chartData2);
  console.log("Chart3 data is :", this.state.chartData3);


    return (

              <LinearGradient colors={['#17303e', '#17303e']} style={styles.container}>
            
                  <View style={sty.toolbar}>
                    <Text style={sty.toolbarButton}></Text>
                    <Text style={sty.country}>{this.props.countryName}</Text>
                    <Text style={sty.toolbarButton}></Text>
                  </View>
                  <Text style={sty.subtext}>Health at a Glance</Text>
                 <View style={{height:400}}>
         
                              {this._renderLineChart()}
                             
                </View>

                  <ScrollView
                      style={styles.scrollview}
                      indicatorStyle={'white'}
                      scrollEventThrottle={200}
                      directionalLockEnabled={true}
                    >

                        {this.example1}
                      
                    </ScrollView>
               
              </LinearGradient>


    );
  }
}

const sty = StyleSheet.create({


  toolbar:{

        marginTop:20,
        flexDirection:'row'    //Step 1
    },
    toolbarButton:{
      marginTop:5,
        width: 50,            //Step 2
        color:'#fff',
        textAlign:'center'
    },
    toolbarTitle:{
        color:'#fff',
        textAlign:'center',
        fontWeight:'bold',
        flex:1                //Step 3
    },






  linearGradient: {

    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    flex:1

  },
  columnedItems:{
     flexDirection:'row',
     justifyContent: 'space-between',

  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',

  },
  country: {
    fontSize: 30,
    textAlign: 'center',
    color:'#FB5260',
    fontFamily:'Montserrat-SemiBold',
    flex:1,


  },

  chartTitle: {
    marginTop:60,
    marginBottom:0,
    marginLeft:10,
    fontSize: 15,
    color:'#FFFFFF',
    fontFamily:'Montserrat-SemiBold',
    letterSpacing: 2,
    textAlign: 'center',


  },

  overlayText: {
    fontSize: 20,
    textAlign: 'center',
    color:'#FB5260',
    fontFamily:'Montserrat-Bold',
    letterSpacing: 2,


  },
  subtext: {
    marginTop:10,
    fontSize: 18,
    textAlign: 'center',
    color:'#ffffff',
    fontFamily:'Montserrat-Medium',
    letterSpacing: 2,
  },
  subtextNumber: {
    marginTop:10,
    fontSize: 25,
    textAlign: 'center',
    color:'#214559',
    fontFamily:'Montserrat-Bold',
    letterSpacing: 2,
  },
  subtextSmallText: {
    marginTop:25,
    marginBottom:10,
    fontSize: 12,
    textAlign: 'center',
    color:'#ffffff',
    fontFamily:'Montserrat-Light',
    letterSpacing: 2,

  },
});
 

AppRegistry.registerComponent('DataBankApp', () => RenderChart);
