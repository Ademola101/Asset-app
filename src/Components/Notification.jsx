import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Notification = ({ errormessage }) => {
  return (
    <View>
      <Text style  = {styles.notification}>{errormessage}</Text>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({

  notification: {
    color: 'red',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});