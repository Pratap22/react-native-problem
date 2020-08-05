import React, {useEffect} from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {ContactNavigationProp} from '../navigation/navigationParamList';
import ContactCard from '../../src/component/ContactCard';
import {ContactModel} from '../../src/model/ContactModel';
import ContactService from '../db/contactService';
import {addIcon} from '../assets/icons';

export interface HomeScreenProps extends ContactNavigationProp<'Home'> {}

let contactsRealm = ContactService.findAll();

const HomeScreen = ({navigation}: HomeScreenProps) => {
  //re-render on focus
  let isFocused = useIsFocused();
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('EditProfile', {
              contact: new ContactModel(`ID-${Date.now()}`),
              isEdit: false,
            })
          }
          style={styles.iconCont}>
          <Image source={addIcon} style={styles.addIcon} />
        </TouchableOpacity>
      ),
    });
  }, []);
  return (
    <View style={styles.container}>
      <FlatList<ContactModel>
        data={contactsRealm}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return (
            <ContactCard
              contact={item}
              onCardPress={() =>
                navigation.navigate('Profile', {
                  contact: item,
                })
              }
            />
          );
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addIcon: {width: 24, height: 24},
  iconCont: {paddingEnd: 10},
});
