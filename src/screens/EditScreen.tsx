import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {
  ContactNavigationProp,
  NavigationParamList,
} from '../navigation/navigationParamList';
import {userIcon, callIcon, emailIcon} from '../assets/icons';
import CommonTextInput from '../component/CommonTextInput';

export interface EditScreenProps extends ContactNavigationProp<'EditProfile'> {
  route: RouteProp<NavigationParamList, 'EditProfile'>;
}

const EditScreen = ({navigation, route}: EditScreenProps) => {
  const profileData = route.params.contact;
  const [firstName, setFirstName] = useState<string>(
    profileData.firstName || '',
  );
  const [lastName, setLastName] = useState<string>(profileData.lastName || '');
  const [phoneNumber, setPhoneNumber] = useState<string>(
    profileData.phoneNumber || '',
  );
  const [email, setEmail] = useState<string>(profileData.firstName || '');

  return (
    <ScrollView style={styles.container}>
      <CommonTextInput
        icon={userIcon}
        fieldLabel="First Name"
        fieldValue={firstName}
        fieldPlaceHolder="Enter first name"
        isFieldError={false}
        fieldErrorMessage="Please enter first name"
        onChangeText={(text) => setFirstName(text)}
      />
      <CommonTextInput
        icon={userIcon}
        fieldLabel="Last Name"
        fieldValue={lastName}
        fieldPlaceHolder="Enter last name"
        isFieldError={false}
        fieldErrorMessage="Please enter last name"
        onChangeText={(text) => setLastName(text)}
      />
      <CommonTextInput
        icon={callIcon}
        fieldLabel="Mobile number"
        fieldValue={phoneNumber}
        fieldPlaceHolder="+91- 9772282828"
        isFieldError={false}
        fieldErrorMessage="Please enter mobile number"
        onChangeText={(text) => setPhoneNumber(text)}
        keyboardType="phone-pad"
      />
      <CommonTextInput
        icon={emailIcon}
        fieldLabel="Email"
        fieldValue={email}
        fieldPlaceHolder="abc@xyz.com"
        isFieldError={false}
        fieldErrorMessage="Please enter email Id"
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />

      <View style={styles.viewSavebtn}>
        <TouchableOpacity onPress={() => {}} style={styles.btn}>
          <Text style={styles.saveTxt}>
            {route.params === undefined ? 'Save' : 'Update'}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default EditScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 20,
  },
  viewSavebtn: {
    justifyContent: 'center',
    marginTop: 20,
    alignItems: 'center',
  },
  btn: {
    justifyContent: 'center',
    alignContent: 'center',

    height: 40,
    backgroundColor: '#00bfff',
    width: 150,
  },
  saveTxt: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Arial',
    fontSize: 16,
    color: 'white',
  },
});
