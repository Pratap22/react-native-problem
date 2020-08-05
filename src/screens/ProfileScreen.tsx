import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Linking,
} from 'react-native';
import {RouteProp, useIsFocused} from '@react-navigation/native';
import {
  ContactNavigationProp,
  NavigationParamList,
} from '../navigation/navigationParamList';
import {editIcon, whatsAppIcon} from '../assets/icons';
import NoImagePlaceHolder from '../component/NoImagePlaceHolder';

interface ProfileScreenProps extends ContactNavigationProp<'Profile'> {
  route: RouteProp<NavigationParamList, 'Profile'>;
}

function ProfileScreen({navigation, route}: ProfileScreenProps) {
  //re-reder the screen is its focused
  useIsFocused();
  let {
    firstName,
    lastName,
    phoneNumber,
    imageUri,
    email,
  } = route.params.contact;
  return (
    <ScrollView style={styles.container}>
      <View>
        <View>
          <View style={styles.topContainer}>
            <View style={styles.viewImg}>
              {imageUri ? (
                <View style={styles.touchImg}>
                  <Image source={{uri: imageUri}} style={styles.img} />
                </View>
              ) : (
                <NoImagePlaceHolder
                  char={firstName.charAt(0)}
                  containerStyle={styles.placeholderContStyle}
                  textStyle={styles.placeholderTextStyle}
                />
              )}
            </View>
            <View style={styles.viewfullName}>
              <Text style={styles.fullnameTxt}>
                {firstName + ' ' + lastName}
              </Text>
              <Text style={styles.numTxt}>{phoneNumber}</Text>
              <Text style={styles.numTxt}>{email}</Text>
            </View>
          </View>

          <View style={styles.contactDetailContainer}>
            <View style={styles.commonViewWhatsapp}>
              <View style={styles.commonViewflexStart}>
                <Text style={styles.whatsappCommonTxt}>
                  Message {'   ' + phoneNumber}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.commonViewflexEnd}
                onPress={() =>
                  Linking.openURL(
                    `whatsapp://send?text=hello&phone=${phoneNumber}`,
                  )
                }>
                <Image source={whatsAppIcon} style={styles.whatsappImage} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.editView}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('EditProfile', {
                  contact: route.params.contact,
                  isEdit: true,
                })
              }>
              <Image source={editIcon} style={styles.imgEditIcon} />
              <Text style={styles.editTxt}>Edit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 20,
  },
  topContainer: {
    backgroundColor: 'white',
    padding: 5,
  },

  contactDetailContainer: {
    backgroundColor: 'white',
    marginTop: 30,
  },
  viewImg: {
    // justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  touchImg: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  img: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  placeholderContStyle: {
    position: 'relative',
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  placeholderTextStyle: {fontSize: 32},

  viewfullName: {
    alignItems: 'center',
    width: '100%',
  },
  fullnameTxt: {
    fontFamily: 'Arial',
    fontSize: 20,
  },
  numTxt: {
    fontFamily: 'Arial',
    fontSize: 12,
  },
  whatsappCommonTxt: {
    fontFamily: 'Arial',
    fontSize: 12,
  },

  imgCallMsgVedio: {
    width: 30,
    height: 30,
    marginHorizontal: 30,
  },
  viewIconImages: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  commonViewWhatsapp: {
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    flexDirection: 'row',
  },
  commonViewflexStart: {
    justifyContent: 'flex-start',
    width: '80%',
  },
  commonViewflexEnd: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: '20%',
  },
  whatsappImage: {
    width: 30,
    height: 30,
  },
  editView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    marginTop: 10,
  },
  imgEditIcon: {
    height: 25,
    width: 25,
  },
  editTxt: {
    fontFamily: 'Arial',
    fontSize: 16,
  },
});

export default ProfileScreen;
