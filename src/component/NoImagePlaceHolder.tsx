import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import CommonUtils from '../utils/commonUtils';

export interface Props {
  char?: string;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const NoImagePlaceHolder = ({char, containerStyle, textStyle}: Props) => {
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: CommonUtils.getRandomColor()},
        containerStyle,
      ]}>
      <Text style={[styles.charText, textStyle]}>{char}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  charText: {
    color: 'white',
  },
});

export default NoImagePlaceHolder;
