import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DeltaIcon = ({ color }) => <Icon name="delta" size={20} color= {color} />;
const CoinsExcerpt = ({ coin }) => {

  const currency_format = (num) => {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  };
  return (
    <View style = {styles.container}>
      <View style = {styles.namecontainer}>

        <Image style = {styles.image} source = {{ uri: coin.image }}/>

        <View style = {styles.coinsymbol}>
          <Text style = {styles.name}>
            {coin.name}
          </Text>

          <Text style = {styles.symbol}>
            {coin.symbol}
          </Text>
        </View>


      </View>
      <View style = {styles.pricecontainer} >

        <Text style = {styles.price}>

          {currency_format(coin.current_price)}
        </Text>
      </View>
      <View >
        <DeltaIcon color={coin.price_change_percentage_24h < 0 ? 'red' : 'green'}/>
      </View>
    </View>
  );
};

export default CoinsExcerpt;

const styles = StyleSheet.create({

  image: {
    width:30,
    height:30
  },
  namecontainer: {
    flexDirection: 'row',
    flex: 1,



  },

  coinsymbol: {
    flexDirection: 'column',
    marginLeft: 10,

  },

  name:{
    color: 'white',
  },

  symbol:{
    color: 'white',
  },

  price:{
    color: 'white',
  },

  container: {
    backgroundColor: '#3b3b3b',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    flexDirection: 'row',

  },

  pricecontainer: {
    flex: 1,
  },


});