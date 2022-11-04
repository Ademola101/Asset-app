import { View, Text } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';

export default function CoinDetailsScreen() {
  const route = useRoute();
  const {  marketData } = route.params;
  const priceAndDate = marketData.prices.map((item) => {
    return {
      price: item[1],
      date: new Date(item[0]).toLocaleDateString(),
    };
  });

  console.log(priceAndDate);
  return (
    <View>
      <Text>CoinDetails</Text>
      <Text></Text>
    </View>
  );
}