import { View, Text } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';

export default function CoinDetails() {
  const route = useRoute();
  const {  marketData } = route.params;
  return (
    <View>
      <Text>CoinDetails</Text>
      <Text>{JSON.stringify(marketData)}</Text>
    </View>
  );
}