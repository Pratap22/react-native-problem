import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {ContactNavigationProp} from '../navigation/navigationParamList';
import {contacts} from '../db/db';
import ContactCard from '../../src/component/ContactCard';
import {ContactModel} from '../../src/model/ContactModel';

export interface HomeScreenProps extends ContactNavigationProp<'Home'> {}

const HomeScreen = ({navigation}: HomeScreenProps) => {
  const [contac, setContacts] = useState<Array<ContactModel>>(contacts);
  return (
    <View style={styles.container}>
      <View>
        <FlatList<ContactModel>
          data={contac}
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
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
