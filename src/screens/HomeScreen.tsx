import React, {useContext} from 'react';
import {Button, Text, View} from 'react-native';
import {ContactNavigationProp} from '../navigation/navigationParamList';

function HomeScreen({navigation}: ContactNavigationProp<'Home'>) {
  return (
    <View>
      <Text>I am a login screen</Text>
      <Button
        title="go to register"
        onPress={() => {
          navigation.navigate('Profile');
        }}
      />
    </View>
  );
}

export default HomeScreen;
