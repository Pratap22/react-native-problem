import React from 'react';
import ImagePicker from 'react-native-image-picker';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {userIcon, editIcon} from '../assets/icons';

const options = {
  title: 'Select Avatar',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export interface Props {
  uri: string;
  onUriChange: (uri: any) => void;
}

const ImagePickerComponent = ({uri, onUriChange}: Props) => {
  const handleImageSelectClick = () => {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        onUriChange(response.uri);
      }
    });
  };

  return (
    <View style={styles.viewImg}>
      <TouchableOpacity
        style={styles.touchImg}
        onPress={handleImageSelectClick}>
        <Image source={uri ? {uri: uri} : userIcon} style={styles.image} />
        <Image source={editIcon} style={styles.editIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  viewImg: {
    alignItems: 'center',
    width: '100%',
  },
  touchImg: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: 'black',
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  image: {width: 100, height: 100, borderRadius: 50},
  editIcon: {
    width: 20,
    height: 20,
    position: 'absolute',
    right: 5,
    bottom: 5,
  },
});

export default ImagePickerComponent;
