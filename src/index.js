/* @flow */

import React from 'react';
import { ScrollView, View, StatusBar, Text } from 'react-native';
import { material, iOSUIKit } from 'react-native-typography';

import Banner from './Banner';

class MainScreen extends React.Component<{}> {
  render() {
    return (
      <ScrollView>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Banner />
        <Text style={material.display4}>Test display4!</Text>
        <Text style={material.display3}>Test display3!</Text>
        <Text style={material.display2}>Test display2!</Text>
        <Text style={material.display1}>Test display1!</Text>
        <Text style={material.headline}>Test headline!</Text>
        <Text style={material.title}>Test title!</Text>
        <Text style={material.subheading}>Test subheading!</Text>
        <Text style={material.body2}>Test body2!</Text>
        <Text style={material.body1}>Test body1!</Text>
        <Text style={material.caption}>Test caption!</Text>
        <Text style={material.button}>Test button!</Text>

        <Text style={iOSUIKit.largeTitleEmphasized}>
          Test largeTitleEmphasized!
        </Text>
        <Text style={iOSUIKit.title3Emphasized}>Test title3Emphasized!</Text>
        <Text style={iOSUIKit.title3}>Test title3!</Text>
        <Text style={iOSUIKit.bodyEmphasized}>Test bodyEmphasized!</Text>
        <Text style={iOSUIKit.body}>Test body!</Text>
        <Text style={iOSUIKit.subheadEmphasized}>Test subheadEmphasized!</Text>
        <Text style={iOSUIKit.subhead}>Test subhead!</Text>
        <Text style={iOSUIKit.subheadShort}>Test subheadShort!</Text>
        <Text style={iOSUIKit.callout}>Test callout!</Text>
        <Text style={iOSUIKit.footnoteEmphasized}>
          Test footnoteEmphasized!
        </Text>
        <Text style={iOSUIKit.footnote}>Test footnote!</Text>
        <Text style={iOSUIKit.caption2Emphasized}>
          Test caption2Emphasized!
        </Text>
        <Text style={iOSUIKit.caption2}>Test caption2!</Text>
      </ScrollView>
    );
  }
}

export default MainScreen;
