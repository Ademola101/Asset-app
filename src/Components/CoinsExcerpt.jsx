import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const CoinsExcerpt = ({ coin }) => {
  return (
    <View>
      <View>
        <Image source =  {{
          uri: coin.image
        }}/>
      </View>
      <Text>
        {coin.name}
      </Text>
    </View>
  );
};

export default CoinsExcerpt;

const styles = StyleSheet.create({});