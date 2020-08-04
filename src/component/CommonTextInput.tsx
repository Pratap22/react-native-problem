import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  KeyboardTypeOptions,
} from 'react-native';

interface CommonTextInputProps {
  icon?: any;
  fieldLabel: string;
  fieldValue: string;
  fieldPlaceHolder: string;
  fieldErrorMessage: string;
  isFieldError: boolean;
  keyboardType?: KeyboardTypeOptions;
  onChangeText: (value: string) => void;
}

const CommonTextInput = ({
  icon,
  fieldValue,
  fieldPlaceHolder,
  fieldErrorMessage,
  isFieldError,
  fieldLabel,
  onChangeText,
  keyboardType,
}: CommonTextInputProps) => {
  return (
    <View>
      <View style={styles.textInputView}>
        <Image source={icon} style={{width: 25, height: 25}}></Image>
        <Text style={styles.textInputLabel}>{fieldLabel}</Text>
      </View>

      <TextInput
        placeholder={fieldPlaceHolder}
        style={styles.textInput}
        onChangeText={onChangeText}
        value={fieldValue}
        keyboardType={keyboardType || 'default'}
      />
      {isFieldError && <Text style={styles.errorMsg}>{fieldErrorMessage}</Text>}
    </View>
  );
};

export default CommonTextInput;

const styles = StyleSheet.create({
  textInputView: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInputLabel: {
    marginLeft: 5,
    fontFamily: 'Arial',
    color: 'grey',
  },
  textInput: {
    fontFamily: 'Arial',
    marginLeft: 27,
    height: 35,

    borderColor: 'transparent',
    borderWidth: 1,
    borderBottomColor: 'orange',
    fontSize: 12,
  },

  errorMsg: {
    color: 'red',
    marginLeft: 27,
  },
});
