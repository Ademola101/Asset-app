import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import { LineChart, Grid }  from  'react-native-svg-charts';
export default function CoinDetailsScreen() {
  const route = useRoute();
  const {  marketData, coin } = route.params;
  console.log(marketData);
  const priceAndDate = marketData.prices.map((item) => {
    return {
      price: item[1],
      date: new Date(item[0]).toLocaleDateString(),
    };
  });

  console.log(priceAndDate);
  return (
    <View>
      <Text style = {styles.header}>{
        coin.name
      } price </Text>

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

const styles = StyleSheet.create({

  header: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    color: 'white',
  },
});