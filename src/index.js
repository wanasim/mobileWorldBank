import React, { Component } from 'react';
import { View, ScrollView, Text, StatusBar, Platform, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import SliderEntry from 'example/src/components/SliderEntry';
import styles from 'example/src/styles/index.style';
import { ENTRIES1 } from 'example/src/static/entries';





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
const itemWidth = slideWidth + itemHorizontalMargin * 2;

export default class example extends Component {

    constructor (props) {
        super(props);
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
            slider1Ref: null
        };
    }

    _renderItem ({item, index}) {
        return (
            <SliderEntry
              data={item}
              even={(index + 1) % 2 === 0}
            />
        );
    }

    _renderItemWithParallax ({item, index}, parallaxProps) {
        return (
            <SliderEntry
              data={item}
              even={(index + 1) % 2 === 0}
              parallax={true}
              parallaxProps={parallaxProps}
            />
        );
    }

    get example1 () {
        const { slider1ActiveSlide, slider1Ref } = this.state;

        return (
            <View>
                <Carousel
                  ref={(c) => { if (!this.state.slider1Ref) { this.setState({ slider1Ref: c }); } }}
                  data={ENTRIES1}
                  renderItem={this._renderItemWithParallax}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                  hasParallaxImages={true}
                  firstItem={SLIDER_1_FIRST_ITEM}
                  inactiveSlideScale={0.94}
                  inactiveSlideOpacity={0.6}
                  enableMomentum={false}
                  containerCustomStyle={styles.slider}
                  contentContainerCustomStyle={styles.sliderContentContainer}
                  scrollEndDragDebounceValue={Platform.OS === 'ios' ? 0 : 100}
                  onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
                />
                <Pagination
                  dotsLength={ENTRIES1.length}
                  activeDotIndex={slider1ActiveSlide}
                  containerStyle={styles.paginationContainer}
                  dotColor={'rgba(255, 255, 255, 0.92)'}
                  dotStyle={styles.paginationDot}
                  inactiveDotColor={'#1a1917'}
                  inactiveDotOpacity={0.4}
                  inactiveDotScale={0.6}
                  carouselRef={slider1Ref}
                  tappableDots={!!slider1Ref}
                />
            </View>
        );
    }




    render () {
        return (
            <View style={styles.container}>
         
                <ScrollView
                  style={styles.scrollview}
                  indicatorStyle={'white'}
                  scrollEventThrottle={200}
                  directionalLockEnabled={true}
                >
                    { this.example1 }
       
                </ScrollView>
            </View>
        );
    }
}
