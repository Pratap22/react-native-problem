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
import {RouteProp} from '@react-navigation/native';
import {
  ContactNavigationProp,
  NavigationParamList,
} from '../navigation/navigationParamList';
import {userIcon, editIcon, whatsAppIcon} from '../assets/icons';

interface ProfileScreenProps extends ContactNavigationProp<'Profile'> {
  route: RouteProp<NavigationParamList, 'Profile'>;
}

function ProfileScreen({navigation, route}: ProfileScreenProps) {
  let {firstName, lastName, phoneNumber, imageUri} = route.params.contact;
  console.log('Image uri ', imageUri);
  return (
    <ScrollView style={styles.container}>
      <View>
        <View>
          <View style={styles.topContainer}>
            <View style={styles.viewImg}>
              <TouchableOpacity style={styles.touchImg}>
                <Image
                  source={imageUri ? {uri: imageUri} : userIcon}
                  style={styles.img}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.viewfullName}>
              <Text style={styles.fullnameTxt}>
                {firstName + ' ' + lastName}
              </Text>
              <Text style={styles.numTxt}>{phoneNumber}</Text>
            </View>
          </View>

          <View style={styles.contactDetailContainer}>
            <View style={styles.commonViewWhatsapp}>
              <View style={styles.commonViewflexStart}>
                <Text style={styles.whatsappCommonTxt}>
                  {' '}
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
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  img: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },

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
