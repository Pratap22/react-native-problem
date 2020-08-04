import * as React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {ContactModel} from '../../src/model/ContactModel';
import CommonUtils from '../utils/commonUtils';

export interface Props {
  contact: ContactModel;
  onCardPress: () => void;
}

const ContactCard = ({contact, onCardPress}: Props) => {
  const firstNameFirstCharacter = contact.firstName.charAt(0).toUpperCase();
  return (
    <TouchableOpacity onPress={onCardPress} style={styles.renderItemMainView}>
      <View
        style={[
          styles.firstNameCharacterView,
          {backgroundColor: CommonUtils.getRandomColor()},
        ]}>
        <Text style={styles.firstCharTxt}>{firstNameFirstCharacter}</Text>
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
});

export default ContactCard;
