import { View, TextInput, StyleSheet } from 'react-native';
import React from 'react';

export default function Search({ onChange, value }) {
  return (
    <View>
      <TextInput style = {styles.input}
        onChangeText={onChange}
        value={value}
        placeholderTextColor = '#9e9ea7'
        placeholder = 'Search for coins'

      />


    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 10,
    paddingLeft: 10,
    margin: 10,
    backgroundColor: '#212121',
    width: '80%',
    justifyContent:'center',
    alignSelf: 'center',
    color:'white'
  },

});