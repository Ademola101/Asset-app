import { View, Text } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import { LineChart, Grid }  from  'react-native-svg-charts';
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

      <LineChart
        style={{ height: 200 }}
        data={priceAndDate.map((item) => item.price)}
        svg={{ stroke: 'rgb(134, 65, 244)' }}
        contentInset={{ top: 20, bottom: 20 }}
      >
        <Grid />
      </LineChart>
    </View>
  );
}