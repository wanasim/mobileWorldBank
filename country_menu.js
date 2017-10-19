import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Image, Text, Button, Dimensions, Animated, AppRegistry } from 'react-native'
import Interactable from 'react-native-interactable'
import Menu from './Menu'
import CountryDetail from './country_detail'
import colors from './styles/colors'



const Screen = Dimensions.get('window')
const SideMenuWidth = 300
const RemainingWidth = Screen.width - SideMenuWidth


export default class CountryMenu extends Component {


static navigationOptions = {
    title: 'Country Detail',
    header: null
  };

    constructor(props) {
        super(props)
        this.state = {
            deltaX: new Animated.Value(-SideMenuWidth),
            menuOpened: false,
            countryData: [{}],
            countryDetail: [{}],
            currencies:[{}],
            languages:[{}]
        }
        this.deltaX = new Animated.Value(0)
    }




    componentDidMount() {
      this.fetchCountryData();
      this.fetchCountryDetail();
    }



    fetchCountryData() {

         const { params } = this.props.navigation.state;
         //console.log("Country Name isssss:",params.countryName); 

      fetch("https://restcountries.eu/rest/v2/alpha/" + params.countryCode)
        .then((response) =>
          response.json())
        .then((responseData) => {
          console.log(responseData)
          this.setState({
            countryData: responseData,
            currencies: responseData.currencies,
            languages: responseData.languages
          });
        })
        .done();
      }

      fetchCountryDetail() {

        const { params } = this.props.navigation.state;

      fetch("https://kgsearch.googleapis.com/v1/entities:search?&types=Country&types=AdministrativeArea&query="+ params.countryName +"&key=AIzaSyCc1M0yZWtVzPt2R_sbRWklEHDpqTDj0hc&limit=1&indent=True")
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

          
          

        return (
            <View style={styles.container}>
                <Menu  countryName={this.state.countryData.name} countryCode={this.state.countryData.alpha2Code} />
                <Interactable.View
                    style={{ flex: 1}}
                    ref='menuInstance'
                    horizontalOnly={true}
                    snapPoints={[{x: 0, damping: 0.6}, {x: SideMenuWidth, damping: 0.6}] }
                    boundaries={{right: SideMenuWidth}}
                    initialPosition={{x: 0}}
                    animatedValueX={this.deltaX}
                    onSnap={ this.onStopInteraction.bind(this) }
                >
                    <CountryDetail countryData = {this.state}/>
                </Interactable.View>
            </View>
        )
    }

    onStopInteraction(event, check) {
        let menuOpened = true
        if(event.nativeEvent.index == 0) {
            menuOpened = false
        }
        this.setState((preState, props) => {
            return { menuOpened }
        })
    }

    onMenuPress = () => {
        const menuOpened = !this.state.menuOpened
        if(menuOpened) {
            this.refs['menuInstance'].snapTo({index: 1})
        } else {
            this.refs['menuInstance'].snapTo({index: 0})
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: colors.bgMain,
    },
    demoScreen: {
        backgroundColor: colors.bgMainRed
    },

    header: {
        height: 60,
        paddingLeft: 20,
        flexDirection: 'row',
        backgroundColor: 'red',
        alignItems: 'center',
        zIndex: 1001
    },
    body: {
        flex: 1,
        zIndex: 1000,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000'
    },
    menuIcon: {
        width: 30,
        height: 30
    },
    headerTitle: {
        marginLeft: 30,
        color: 'white',
        fontSize: 20
    },
    content: {
        fontSize: 18
    }
})



