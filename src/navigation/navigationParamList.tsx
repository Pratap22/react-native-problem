import {StackNavigationProp} from '@react-navigation/stack';
import {ContactModel} from 'src/model/ContactModel';
import {RouteProp} from '@react-navigation/native';

export type NavigationParamList = {
  Home: undefined;
  Profile: {contact: ContactModel};
  EditProfile: {contact: ContactModel};
};

export type ContactNavigationProp<T extends keyof NavigationParamList> = {
  navigation: StackNavigationProp<NavigationParamList, T>;
};
