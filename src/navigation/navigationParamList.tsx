import {StackNavigationProp} from '@react-navigation/stack';

export type NavigationParamList = {
  Home: undefined;
  Profile: undefined;
  EditProfile: undefined;
};

export type ContactNavigationProp<T extends keyof NavigationParamList> = {
  navigation: StackNavigationProp<NavigationParamList, T>;
};
