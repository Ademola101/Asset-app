import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import { LineChart, Grid, YAxis }  from  'react-native-svg-charts';
export default function CoinDetailsScreen() {
  const route = useRoute();
  const {  marketData, coin } = route.params;
  console.log(marketData);
  const priceAndDate = marketData?.prices.map((item) => {
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
      <YAxis
        data = {priceAndDate.map((item) => item.price)}
        contentInset = {{ top: 10, bottom: 10 }}
        svg = {{

          fill: 'grey',
          fontSize: 10,
          styles : {
            transform: [{ rotate: '90deg' }],
            color: 'white',
          },
        }
        }
        numberOfTicks = {10}
        formatLabel = {(value) => `$${value}`}
      />
      <LineChart
        style={{ height: 200, flex: 1, marginLeft: 16 }}
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