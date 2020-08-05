import * as React from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {ContactModel} from '../../src/model/ContactModel';
import NoImagePlaceHolder from './NoImagePlaceHolder';

export interface Props {
  contact: ContactModel;
  onCardPress: () => void;
}

const ContactCard = ({contact, onCardPress}: Props) => {
  const firstCharacter = contact.firstName.charAt(0).toUpperCase();
  return (
    <TouchableOpacity onPress={onCardPress} style={styles.renderItemMainView}>
      <View style={styles.emptyNamePlaceholder}>
        {contact.imageUri ? (
          <Image
            source={{uri: contact.imageUri}}
            style={styles.emptyNamePlaceholder}
          />
        ) : (
          <NoImagePlaceHolder
            char={firstCharacter}
            containerStyle={styles.emptyNamePlaceholder}
          />
        )}
      </View>

      <View style={styles.fullnameView}>
        <Text style={styles.fullNameTxt}>
          {contact.firstName + ' ' + contact.lastName}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  renderItemMainView: {
    padding: 10,
    paddingTop: 5,
    margin: 10,
    marginTop: 3,
    flexDirection: 'row',
  },
  firstNameCharacterView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: 30,
    borderRadius: 30,
  },

  fullnameView: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 10,
    height: 30,
    width: '80%',
    borderWidth: 0.5,
    borderColor: 'transparent',
    borderBottomColor: 'grey',
  },
  fullNameTxt: {
    color: '#000',
  },
  firstCharTxt: {
    color: 'white',
  },
  emptyNamePlaceholder: {
    height: 30,
    width: 30,
    borderRadius: 30,
  },
});

export default ContactCard;
