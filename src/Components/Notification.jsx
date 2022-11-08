import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Notification = ({ errormessage }) => {
  return (
    <View>
      <Text>{errormessage}</Text>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({});