'use strict'
import React, { Component } from 'react'
import {
    StyleSheet, TouchableOpacity, View, Image, Button, Slider
} from 'react-native'

import Text from './styles/Text'
import Icon from 'react-native-vector-icons/Ionicons'
import colors from './styles/colors'
import Modal from 'react-native-modalbox';
import RenderAgricultureChart from './renderAgricultureChart';
import RenderEconomyChart from './renderEconomyChart';
import RenderEducationChart from './renderEducationChart';
import RenderEnvironmentChart from './renderEnvironmentChart';
import RenderHealthChart from './renderHealthChart';
import RenderInfrastructureChart from './renderInfrastructureChart';



let SideMenuWidth = 300
class Menu extends Component {


    constructor() {
      super();
      this.state = {
        isOpen: false,
        isDisabled: false,
        swipeToClose: true,
        sliderValue: 0.3,
        coverScreen:true
      };
    }

    render() {
        return (
            <View style={[styles.sideMenu, this.props.style || {}]}>

                  <View style={{ paddingHorizontal: 30 }}>
                        { this._renderHeader() }
                      <TouchableOpacity style={styles.menu} onPress={() => this.refs.agriculture.open()}>
                            <Icon name='ios-nutrition-outline' size={40} color="#FB5260" /> 
                            <Text style={styles.menuText} type='h4White'>Agriculture</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={ styles.menu} onPress={() => this.refs.economy.open()}>
                            <Icon name='ios-cash-outline' size={40} color="#FB5260" /> 
                            <Text style={styles.menuText} type='h4White'>Economy</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={ styles.menu} onPress={() => this.refs.education.open()}>
                            <Icon name='ios-school-outline' size={40} color="#FB5260" /> 
                            <Text style={styles.menuText} type='h4White'>Education</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={ styles.menu} onPress={() => this.refs.environment.open()}>
                            <Icon name='ios-leaf-outline' size={40} color="#FB5260" /> 
                            <Text style={styles.menuText} type='h4White'>Environment</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={ styles.menu} onPress={() => this.refs.health.open()}>
                            <Icon name='ios-pulse-outline' size={40} color="#FB5260" /> 
                            <Text style={styles.menuText} type='h4White'>Health</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={ styles.menu} onPress={() => this.refs.infrastructure.open()}>
                            <Icon name='ios-plane-outline' size={40} color="#FB5260" /> 
                            <Text style={styles.menuText} type='h4White'>Infrastructure</Text>
                      </TouchableOpacity>
                  </View>


                   <Modal
                    style={[styles.modal, styles.modal1]}
                    ref={"agriculture"}
                    swipeToClose={false}
                    onClosed={this.onClose}
                    onOpened={this.onOpen}
                    coverScreen={this.state.coverScreen}
                    onClosingState={this.onClosingState}>
                     <RenderAgricultureChart countryName = {this.props.countryName} countryCode={this.props.countryCode} dataCategory="Agriculture"/>
                  </Modal>


                  <Modal
                    style={[styles.modal, styles.modal1]}
                    ref={"economy"}
                    swipeToClose={false}
                    onClosed={this.onClose}
                    onOpened={this.onOpen}
                    coverScreen={this.state.coverScreen}
                    onClosingState={this.onClosingState}>
                     <RenderEconomyChart countryName = {this.props.countryName} countryCode={this.props.countryCode} dataCategory="Economy"/>
                  </Modal>


                  <Modal
                    style={[styles.modal, styles.modal1]}
                    ref={"education"}
                    swipeToClose={false}
                    onClosed={this.onClose}
                    onOpened={this.onOpen}
                    coverScreen={this.state.coverScreen}
                    onClosingState={this.onClosingState}>
                     <RenderEducationChart countryName = {this.props.countryName} countryCode={this.props.countryCode} dataCategory="Education"/>
                  </Modal>


                  <Modal
                    style={[styles.modal, styles.modal1]}
                    ref={"environment"}
                    swipeToClose={false}
                    onClosed={this.onClose}
                    onOpened={this.onOpen}
                    coverScreen={this.state.coverScreen}
                    onClosingState={this.onClosingState}>
                     <RenderEnvironmentChart countryName = {this.props.countryName} countryCode={this.props.countryCode} dataCategory="Environment"/>
                  </Modal>


                  <Modal
                    style={[styles.modal, styles.modal1]}
                    ref={"health"}
                    swipeToClose={false}
                    onClosed={this.onClose}
                    onOpened={this.onOpen}
                    coverScreen={this.state.coverScreen}
                    onClosingState={this.onClosingState}>
                     <RenderHealthChart countryName = {this.props.countryName} countryCode={this.props.countryCode} dataCategory="Health"/>
                  </Modal>


                  <Modal
                    style={[styles.modal, styles.modal1]}
                    ref={"infrastructure"}
                    swipeToClose={false}
                    onClosed={this.onClose}
                    onOpened={this.onOpen}
                    coverScreen={this.state.coverScreen}
                    onClosingState={this.onClosingState}>
                     <RenderInfrastructureChart countryName = {this.props.countryName} countryCode={this.props.countryCode} dataCategory="Infrastructure"/>
                  </Modal>




            </View>
        )
    }

    _renderHeader() {
        return (
            <View style={ styles.header }>
                <View style={ styles.userInfosHolder }>
                    <Icon name='ios-stats' size={60} color="#FB5260" /> 
                    <View style={ styles.userInfos }>
                        <Text type='h1White' style={ styles.username }>DataBank</Text>
                        <Text style={{ fontFamily:'Montserrat-Light',}} type='h5White'>Explore.Create.Share</Text>
                    </View>
                    

                </View>
                <View
                      style={{
                        borderBottomColor: '#dbdbdb',
                        borderBottomWidth: 0.6,
                        marginBottom: 10,
                        marginTop: 30
                      }}
                    />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    sideMenu: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: SideMenuWidth,
        backgroundColor: 'transparent',
         
    },
    sideMenuTitle: {

        marginBottom: 30
    },
    menu: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    menuText: {
        marginLeft: 20,
        fontFamily:'Montserrat-Medium',
    },
    header: {
        marginTop: 80,
        marginBottom: 20
    },
    userInfosHolder: {
        flexDirection: 'row',

    },
    userInfos: {
        height: 50,
        justifyContent: 'flex-start',
        marginLeft:20

    },
    username: {
        fontFamily:'Montserrat-SemiBold',
    }
})

module.exports = Menu
