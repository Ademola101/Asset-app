import { View, TextInput as NativeTextInput } from 'react-native';
import React from 'react';

const TextInput = ({ style, ...props }) => {
  const NativeInputTextStyle = [style];
  return (
    <View>
      <NativeTextInput  style={NativeInputTextStyle} {...props}/>
    </View>
  );
};

export default TextInput;
