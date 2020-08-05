import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
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
import ImagePickerComponent from '../component/ImagePicker';
import ContactService from '../db/contactService';
import CommonUtils from '../utils/commonUtils';

export interface EditScreenProps extends ContactNavigationProp<'EditProfile'> {
  route: RouteProp<NavigationParamList, 'EditProfile'>;
}

const EditScreen = ({navigation, route}: EditScreenProps) => {
  const profileData = route.params.contact;
  const isEdit = route.params.isEdit;
  useEffect(() => {
    navigation.setOptions({
      headerTitle: isEdit ? 'Edit Contact' : 'Add Contact',
    });
  }, [isEdit]);
  const [firstName, setFirstName] = useState<string>(
    profileData.firstName || '',
  );
  const [lastName, setLastName] = useState<string>(profileData.lastName || '');
  const [phoneNumber, setPhoneNumber] = useState<string>(
    profileData.phoneNumber || '',
  );
  const [email, setEmail] = useState<string>(profileData.email || '');
  const [imageUri, setImageUri] = useState<string>(profileData.imageUri || '');
  const [fieldErrors, setFieldErrors] = useState<Map<string, string>>();

  const handleSaveUpdate = () => {
    //validate and save/update
    let fieldValidate = CommonUtils.validateInputs(
      firstName,
      phoneNumber,
      email,
    );
    console.log(fieldValidate, email);
    if (!fieldValidate.isValid) {
      setFieldErrors(fieldValidate.fieldErrors);
      return;
    }

    if (isEdit) {
      ContactService.update(() => {
        // realm object cannot be updated out of write class
        profileData.firstName = firstName;
        profileData.lastName = lastName;
        profileData.phoneNumber = phoneNumber;
        profileData.email = email;
        profileData.imageUri = imageUri;
        navigation.goBack();
      });
    } else {
      profileData.firstName = firstName;
      profileData.lastName = lastName;
      profileData.phoneNumber = phoneNumber;
      profileData.email = email;
      profileData.imageUri = imageUri;
      ContactService.save(profileData);
      navigation.goBack();
    }
  };

  const firstChar = firstName.charAt(0);

  const isFieldError = (fieldName: string): boolean => {
    let isError = fieldErrors?.get(fieldName);

    return isError?.length !== 0;
  };

  return (
    <ScrollView style={styles.container}>
      <ImagePickerComponent
        uri={imageUri}
        onUriChange={(uri) => setImageUri(uri)}
        firstChar={firstChar}
      />
      <CommonTextInput
        icon={userIcon}
        fieldLabel="First Name"
        fieldValue={firstName}
        fieldPlaceHolder="Enter first name"
        isFieldError={isFieldError('firstName')}
        fieldErrorMessage={fieldErrors?.get('firstName') || ''}
        onChangeText={(text) => setFirstName(text)}
      />
      <CommonTextInput
        icon={userIcon}
        fieldLabel="Last Name"
        fieldValue={lastName}
        fieldPlaceHolder="Enter last name"
        onChangeText={(text) => setLastName(text)}
      />
      <CommonTextInput
        icon={callIcon}
        fieldLabel="Mobile number"
        fieldValue={phoneNumber}
        fieldPlaceHolder="+91- 9772282828"
        isFieldError={isFieldError('phoneNumber')}
        fieldErrorMessage={fieldErrors?.get('phoneNumber') || ''}
        onChangeText={(text) => setPhoneNumber(text)}
        keyboardType="phone-pad"
      />
      <CommonTextInput
        icon={emailIcon}
        fieldLabel="Email"
        fieldValue={email}
        fieldPlaceHolder="abc@xyz.com"
        isFieldError={isFieldError('email')}
        fieldErrorMessage={fieldErrors?.get('email') || ''}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />

      <View style={styles.viewSavebtn}>
        <TouchableOpacity onPress={handleSaveUpdate} style={styles.btn}>
          <Text style={styles.saveTxt}>{!isEdit ? 'Save' : 'Update'}</Text>
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
