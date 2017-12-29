/* @flow */

import React from 'react';
import { ScrollView, StyleSheet, View, StatusBar, Text } from 'react-native';
import {
  material,
  iOSUIKit,
  materialDense,
  materialTall,
  webWeights,
  systemWeights,
} from 'react-native-typography';

import Banner from './Banner';

class MainScreen extends React.Component<{}> {
  render() {
    return (
      <ScrollView>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Banner />
        <View style={styles.section}>
          <Text style={styles.thin}>Web Thin</Text>
          <Text style={styles.ultraLight}>Web UltraLight</Text>
          <Text style={styles.light}>Web Light</Text>
          <Text style={styles.regular}>Web Regular</Text>
          <Text style={styles.medium}>Web Medium</Text>
          <Text style={styles.semibold}>Web Semibold</Text>
          <Text style={styles.bold}>Web Bold</Text>
          <Text style={styles.heavy}>Web Heavy</Text>
          <Text style={styles.black}>Web Black</Text>
        </View>

        <View style={styles.darkSection}>
          <Text style={styles.thinWhite}>Web Thin</Text>
          <Text style={styles.ultraLightWhite}>Web UltraLight</Text>
          <Text style={styles.lightWhite}>Web Light</Text>
          <Text style={styles.regularWhite}>Web Regular</Text>
          <Text style={styles.mediumWhite}>Web Medium</Text>
          <Text style={styles.semiboldWhite}>Web Semibold</Text>
          <Text style={styles.boldWhite}>Web Bold</Text>
          <Text style={styles.heavyWhite}>Web Heavy</Text>
          <Text style={styles.blackWhite}>Web Black</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.systemThin}>System Thin</Text>
          <Text style={styles.systemLight}>System Light</Text>
          <Text style={styles.systemRegular}>System Regular</Text>
          <Text style={styles.systemSemibold}>System Semibold</Text>
          <Text style={styles.systemBold}>System Bold</Text>
        </View>

        <View style={styles.darkSection}>
          <Text style={styles.systemThinWhite}>System Thin</Text>
          <Text style={styles.systemLightWhite}>System Light</Text>
          <Text style={styles.systemRegularWhite}>System Regular</Text>
          <Text style={styles.systemSemiboldWhite}>System Semibold</Text>
          <Text style={styles.systemBoldWhite}>System Bold</Text>
        </View>

        <View style={styles.section}>
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
        </View>

        <View style={styles.section}>
          <Text style={iOSUIKit.largeTitleEmphasized}>
            Test largeTitleEmphasized!
          </Text>
          <Text style={iOSUIKit.title3Emphasized}>Test title3Emphasized!</Text>
          <Text style={iOSUIKit.title3}>Test title3!</Text>
          <Text style={iOSUIKit.bodyEmphasized}>Test bodyEmphasized!</Text>
          <Text style={iOSUIKit.body}>Test body!</Text>
          <Text style={iOSUIKit.subheadEmphasized}>
            Test subheadEmphasized!
          </Text>
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
        </View>

        <View style={styles.section}>
          <Text style={materialDense.display4}>你送了一封電子郵件。</Text>
          <Text style={materialDense.display3}>你送了一封電子郵件。</Text>
          <Text style={materialDense.display2}>你送了一封電子郵件。</Text>
          <Text style={materialDense.display1}>你送了一封電子郵件。</Text>
          <Text style={materialDense.headline}>你送了一封電子郵件。</Text>
          <Text style={materialDense.title}>你送了一封電子郵件。</Text>
          <Text style={materialDense.subheading}>你送了一封電子郵件。</Text>
          <Text style={materialDense.body2}>你送了一封電子郵件。</Text>
          <Text style={materialDense.body1}>你送了一封電子郵件。</Text>
          <Text style={materialDense.caption}>你送了一封電子郵件。</Text>
          <Text style={materialDense.button}>你送了一封電子郵件。</Text>
        </View>

        <View style={styles.section}>
          <Text style={materialTall.display4}>คุณส่งอีเมลแล้ว</Text>
          <Text style={materialTall.display3}>คุณส่งอีเมลแล้ว</Text>
          <Text style={materialTall.display2}>คุณส่งอีเมลแล้ว</Text>
          <Text style={materialTall.display1}>คุณส่งอีเมลแล้ว</Text>
          <Text style={materialTall.headline}>คุณส่งอีเมลแล้ว</Text>
          <Text style={materialTall.title}>คุณส่งอีเมลแล้ว</Text>
          <Text style={materialTall.subheading}>คุณส่งอีเมลแล้ว</Text>
          <Text style={materialTall.body2}>คุณส่งอีเมลแล้ว</Text>
          <Text style={materialTall.body1}>คุณส่งอีเมลแล้ว</Text>
          <Text style={materialTall.caption}>คุณส่งอีเมลแล้ว</Text>
          <Text style={materialTall.button}>คุณส่งอีเมลแล้ว</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  darkSection: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#1D1D1D',
  },
  thin: {
    ...material.headlineObject,
    ...webWeights.thin,
  },
  ultraLight: {
    ...material.headlineObject,
    ...webWeights.ultraLight,
  },
  light: {
    ...material.headlineObject,
    ...webWeights.light,
  },
  regular: {
    ...material.headlineObject,
    ...webWeights.regular,
  },
  medium: {
    ...material.headlineObject,
    ...webWeights.medium,
  },
  semibold: {
    ...material.headlineObject,
    ...webWeights.semibold,
  },
  bold: {
    ...material.headlineObject,
    ...webWeights.bold,
  },
  heavy: {
    ...material.headlineObject,
    ...webWeights.heavy,
  },
  black: {
    ...material.headlineObject,
    ...webWeights.black,
  },
  thinWhite: {
    ...material.headlineWhiteObject,
    ...webWeights.thin,
  },
  ultraLightWhite: {
    ...material.headlineWhiteObject,
    ...webWeights.ultraLight,
  },
  lightWhite: {
    ...material.headlineWhiteObject,
    ...webWeights.light,
  },
  regularWhite: {
    ...material.headlineWhiteObject,
    ...webWeights.regular,
  },
  mediumWhite: {
    ...material.headlineWhiteObject,
    ...webWeights.medium,
  },
  semiboldWhite: {
    ...material.headlineWhiteObject,
    ...webWeights.semibold,
  },
  boldWhite: {
    ...material.headlineWhiteObject,
    ...webWeights.bold,
  },
  heavyWhite: {
    ...material.headlineWhiteObject,
    ...webWeights.heavy,
  },
  blackWhite: {
    ...material.headlineWhiteObject,
    ...webWeights.black,
  },

  systemThin: {
    ...material.headlineObject,
    ...systemWeights.thin,
  },
  systemLight: {
    ...material.headlineObject,
    ...systemWeights.light,
  },
  systemRegular: {
    ...material.headlineObject,
    ...systemWeights.regular,
  },
  systemSemibold: {
    ...material.headlineObject,
    ...systemWeights.semibold,
  },
  systemBold: {
    ...material.headlineObject,
    ...systemWeights.bold,
  },
  systemThinWhite: {
    ...material.headlineWhiteObject,
    ...systemWeights.thin,
  },
  systemLightWhite: {
    ...material.headlineWhiteObject,
    ...systemWeights.light,
  },
  systemRegularWhite: {
    ...material.headlineWhiteObject,
    ...systemWeights.regular,
  },
  systemSemiboldWhite: {
    ...material.headlineWhiteObject,
    ...systemWeights.semibold,
  },
  systemBoldWhite: {
    ...material.headlineWhiteObject,
    ...systemWeights.bold,
  },
});

export default MainScreen;
