import React from 'react'
import {
  View,
  // ViewPagerAndroid,
} from 'react-native'

import createReactClass from 'create-react-class'

var CarouselPager = createReactClass({

  scrollToPage(page, animated) {
    if (typeof animated === 'undefined') {
      animated = true;
    }
    if (animated) {
      this.refs.viewPager.setPage(page);
    } else {
      this.refs.viewPager.setPageWithoutAnimation(page);
    }
    this._onPageSelected(page);
  },

  _onPageSelected(page) {
    this.props.onEnd(page);
  },

  render() {
    const Component = this.props.component
    return <Component
      ref="viewPager"
      style={{flex: 1}}
      contentContainerStyle={this.props.contentContainerStyle}
      automaticallyAdjustContentInsets={false}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      bounces={false}
      onPageScroll={this.props.onBegin}
      onPageSelected={(e) => this._onPageSelected(e.nativeEvent.position)}
      scrollsToTop={false}
      >
        {this.props.children.map((c, idx) => <View key={idx} style={{flex: 1}}>{c}</View>)}
      </Component>;
  },
});

export default CarouselPager;
