 
import React, { Component } from 'react';
import { View, ScrollView, Text, StatusBar, Platform, Dimensions,AppRegistry, Image, StyleSheet, WebView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import SliderEntry from './src/components/SliderEntry';
import { ENTRIES1 } from './src/static/entries';
import styles from './src/styles/index.style';
import LineChart from './src/linechart';
import DoghnutChart from './src/doughnut';
import BarChart from './src/barchart';
import PolarArea from './src/polararea';
import Icon from 'react-native-vector-icons/Ionicons';
//import GridView from 'react-native-super-g


const themeColor = '#FB5260';
const subThemeColor = '#214559';
 
export default class CountryDetail extends Component {
 
  
    intToString (value) {
        var suffixes = ["", "K", "M", "B","T"];
        var suffixNum = Math.floor((""+value).length/3);
        var shortValue = parseFloat((suffixNum != 0 ? (value / Math.pow(1000,suffixNum)) : value).toPrecision(2));
        if (shortValue % 1 != 0) {
            var shortNum = shortValue.toFixed(1);
        }
        return shortValue+suffixes[suffixNum];
    }
 

  
    render() {


      const {countryData, countryDetail,currencies, languages} = this.props.countryData;
      //console.log(countryDetail);

        return (
          
             <ScrollView style={sty.container}>
              <Image
                style={{ height: 250}}
                source={{uri: 'https://images.unsplash.com/photo-1506506746413-0ed25d5fad2b?dpr=1&auto=compress,format&fit=crop&w=3417&h=&q=80&cs=tinysrgb&crop='}}
              >
               <Image
                style={{ height: 450, width: 450, marginTop:-20}}
                resizeMode='stretch'
                source={require('./assets/country_background.png')}
              />

              <View style={sty.contentContainer}>
                <Text style={sty.countryName}>{countryData.name}</Text>
                <Text style={sty.subTextCountry}>{countryData.capital}</Text>


                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginBottom:70, marginRight: 20}}>
                  <View>
                    <Text style={sty.statText}><Icon name="ios-people-outline" size={40} color={themeColor} /></Text>
                    <Text style={sty.statText}>{this.intToString(countryData.population)}</Text>
                  </View>
                  <View>
                    <Text style={sty.statText}><Icon name="ios-cash-outline" size={40} color={themeColor} /></Text>
                    <Text style={sty.statText}>{currencies[0].code}</Text>
                  </View>
                  <View style={{width:90}}>
                    <Text style={sty.statText}><Icon name="ios-globe-outline" size={40} color={themeColor} /></Text>
                    <Text  numberOfLines={1} style={sty.statText}>{languages[0].name}</Text>
                  </View>
                  <View>
                    <Text style={sty.statText}><Icon name="ios-map-outline" size={40} color={themeColor} /></Text>
                    <Text style={sty.statText}>{this.intToString(countryData.area)}</Text>
                  </View>
                </View>
              </View>

              <View
                style={{
                  borderBottomColor: '#dbdbdb',
                  borderBottomWidth: 0.6,
                  width:380,
                  margin:15,
                }}
              />
              </Image>


              <View style={sty.aboutContent}>
                <Text style={sty.titles}>
                  ABOUT
                </Text>
                <Text style={sty.countryDetail}>
                 {countryDetail.articleBody}
                </Text>
           

              <View
                style={{
                  borderBottomColor: '#dbdbdb',
                  borderBottomWidth: 0.6,
                  width:380,
                  marginTop:30,
                  marginBottom: 10
                }}
              />

 
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding:10, marginRight: 20}}>
                  <View>
                    <Text style={sty.statText}>Country Code</Text>
                  </View>
                  <View>
                    <Text style={[sty.statText,{color:'#333333'}]}>{countryData.alpha2Code}</Text>
                  </View>
                </View>

                <View
                style={{
                  borderBottomColor: '#dbdbdb',
                  borderBottomWidth: 0.6,
                  width:380,
                  marginBottom: 10,
                  marginTop: 10
                }}
              />

                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding:10, marginRight: 20}}>
                  <View>
                    <Text style={sty.statText}>Region</Text>
                  </View>
                  <View>
                    <Text style={[sty.statText,{color:'#333333'}]}>{countryData.region}</Text>
                  </View>
                </View>


                <View
                style={{
                  borderBottomColor: '#dbdbdb',
                  borderBottomWidth: 0.6,
                  width:380,
                  marginBottom: 10,
                  marginTop: 10
                }}
              />

              <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding:10, marginRight: 20}}>
                  <View>
                    <Text style={sty.statText}>Subregion</Text>
                  </View>
                  <View>
                    <Text style={[sty.statText,{color:'#333333'}]}>{countryData.subregion}</Text>
                  </View>
                </View>


                <View
                style={{
                  borderBottomColor: '#dbdbdb',
                  borderBottomWidth: 0.6,
                  width:380,
                  marginBottom: 10,
                  marginTop: 10
                }}
              />

                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding:10, marginRight: 20}}>
                  <View>
                    <Text style={sty.statText}>Demonym</Text>
                  </View>
                  <View>
                    <Text style={[sty.statText,{color:'#333333'}]}>{countryData.demonym}</Text>
                  </View>
                </View>

                <View
                style={{
                  borderBottomColor: '#dbdbdb',
                  borderBottomWidth: 0.6,
                  width:380,
                  marginBottom: 10,
                  marginTop: 10
                }}
              />

                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding:10, marginRight: 20}}>
                  <View>
                    <Text style={sty.statText}>Native Name</Text>
                  </View>
                  <View>
                    <Text style={[sty.statText,{color:'#333333'}]}>{countryData.nativeName}</Text>
                  </View>
                </View>

                <View
                style={{
                  borderBottomColor: '#dbdbdb',
                  borderBottomWidth: 0.6,
                  width:380,
                  marginBottom: 10,
                  marginTop: 10
                }}
              />

                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding:10, marginRight: 20}}>
                  <View>
                    <Text style={sty.statText}>Country Flag</Text>
                  </View>
                  <View>
                    <Image
                      style={{ height: 30,width:30,borderRadius: 50 }}
                      source={{uri: 'http://www.geognos.com/api/en/countries/flag/' + countryData.alpha2Code + '.png'}}
                    />
                  </View>
                </View>
              </View>
          </ScrollView>
        )
    }
 
}
 


var sty = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#ffffff'
  },
  contentContainer:{
    paddingLeft:15,
    marginTop:-260,
  },

  countryName:{
    fontFamily:'Montserrat-SemiBold',
    fontSize:50,
    color:subThemeColor
  },
  subTextCountry:{
    fontFamily:'Montserrat-Medium',
    marginTop:-8,
    fontSize:18,
    marginBottom: 20
  },
  statText:{
    fontFamily:'Montserrat-Medium',
    textAlign:'center',
    fontSize: 18,
    color:themeColor
  },
  countryDetail:{
    fontFamily:'Montserrat-Light',
    fontSize: 15,
    lineHeight:30
  },
  aboutContent:{
    marginTop:150,
    padding:15
  },
  titles:{
    marginBottom:15,
    fontFamily:'Montserrat-Bold',
    fontSize:20,
    color:subThemeColor
  },
 
});
 
 
