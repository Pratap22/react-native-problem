import React, {useContext} from 'react';
import {Button, Text, View} from 'react-native';
import {ContactNavigationProp} from 'src/navigation/navigationParamList';

function ProfileScreen({navigation}: ContactNavigationProp<'Profile'>) {
  return (
    <View>
      <Text>I am a login screen</Text>
      <Button
        title="go to register"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
}

export default ProfileScreen;
