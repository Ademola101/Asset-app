import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import { LineChart, Grid, YAxis, XAxis }  from  'react-native-svg-charts';
import { format } from 'date-fns';
export default function CoinDetailsScreen() {
  const route = useRoute();
  const {  marketData, coin } = route.params;
  const priceAndDate = marketData.prices.map((item) => {
    return {
      price: item[1],
      date: new Date(item[0])
    };
  });

  console.log(priceAndDate.map((item) => item.date));

  return (
    <View>

      <Text style = {styles.header}>{
        coin.name
      } price </Text>
      <Text>
        <YAxis
          data={priceAndDate.map((item) => item.price)}
          contentInset={{ top: 10, bottom: 10 }}
          svg={{
            fill: 'grey',
            fontSize: 10,
          }}
          numberOfTicks={10}
          formatLabel={(value) => `$${value}`}
          transform={{ translateX: 10 }}
          style= {{
            height: 200,
            width: 50,

          }}
        />
        <LineChart
          style={{ height: 200, flex: 1, marginLeft: 16,
            color: 'red',
            width : 300,
            alignSelf: 'center',

          }}


          data={priceAndDate.map((item) => item.price)}
          svg={{ stroke: 'rgb(113, 65, 244)' }}
          contentInset={{ top: 20, bottom: 20 }}


        >
          <Grid />



        </LineChart>
        <XAxis
          style={{ marginHorizontal: -50,

            width: 300,
            height: 50,
            alignSelf: 'center',




          }}
          data={priceAndDate.map((item) => item.date)}
          formatLabel={(value) => format(value, 'dd/MM')}
          contentInset={{ left: 40, right: 40 }}
          svg={{ fontSize: 10, fill: 'grey',
            width: 300,
            height: 50,


          }}

          numberOfTicks={10}

          transform={{ translateY: 200,


          }}


        />
      </Text>



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