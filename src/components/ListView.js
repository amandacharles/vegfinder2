import React, { Component, PropTypes } from 'react';
import { Text, NavigatorIOS, View, TouchableHighlight } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import Main from './Main'
import Restaurant from './Restaurant'
// import Yelp from 'yelp' 
//
// var yelp = new Yelp({
//   consumer_key: 'JGbKo0g05LIp2LxVI-kbZA',
//   consumer_secret: 'LZPMXYAmnUJmqxf9JyfkS_O5JE4',
//   token: 'F8rgwQR1sfY1mJPE-2UVbj_A1eqjpyOD',
//   token_secret: 'DMHjE41jWRH4i6Im-W1tGZ7Ry58',
// });
//  
// yelp.search({ term: 'food', location: 'Seattle' })
// .then(function (data) {
//   console.log(data);
// })
// .catch(function (err) {
//   console.error(err);
// });


class ListView extends Component {
  _handleBackPress() {
    this.props.navigator.pop();
  }

  _handleNextPress(nextRoute) {
    this.props.navigator.push(nextRoute);
  }

  render() {
    const RestaurantRoute = {
      component: Restaurant,
      title: 'Restaurant',
      // passProps: { myProp: 'bar' }
    };
    return(
      <View>
      <TouchableHighlight onPress={() => this._handleNextPress(RestaurantRoute)}>
        <Text style={{marginTop: 300, alignSelf: 'center'}}>
          {/* See you on the other nav {this.props.myProp}! */}
          click me to go to page for an individual Restaurant
        </Text>
      </TouchableHighlight>
    </View>
    );
  }
}





export default ListView;
