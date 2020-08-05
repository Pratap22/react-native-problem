import React from 'react';
import ImagePicker from 'react-native-image-picker';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {editIcon} from '../assets/icons';
import NoImagePlaceHolder from './NoImagePlaceHolder';

const options = {
  title: 'Select Avatar',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export interface Props {
  uri: string;
  firstChar?: string;
  onUriChange: (uri: any) => void;
}

const ImagePickerComponent = ({uri, onUriChange, firstChar}: Props) => {
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
      {uri ? (
        <TouchableOpacity
          style={styles.touchImg}
          onPress={handleImageSelectClick}>
          <Image source={{uri: uri}} style={styles.image} />
          <Image source={editIcon} style={styles.editIcon} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={handleImageSelectClick}>
          <NoImagePlaceHolder
            char={firstChar || 'A'}
            containerStyle={styles.placeholderContStyle}
            textStyle={styles.placeholderTextStyle}
          />
          <Image source={editIcon} style={styles.editIcon} />
        </TouchableOpacity>
      )}
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
  placeholderContStyle: {
    position: 'relative',
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  placeholderTextStyle: {fontSize: 32},
});

export default ImagePickerComponent;
