import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { useFetchMarketData } from '../hooks/useFetchCoins';


const DeltaIcon = () => <Icon name="delta" size={20} color= 'green' backgroundColor = 'green' />;
const DownArorw = () => <AntIcon name="caretdown" size={20} color= 'red' />;

const CoinsExcerpt = ({ coin, navigation }) => {

  const { data:marketData } = useFetchMarketData(coin.id);
  const currency_format = (num) => {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  };
  return (

    <Pressable  onPress = {() => navigation.navigate('CoinDetails', { marketData })}>

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
        <View style = {styles.changecontainer}>
          {coin.price_change_percentage_24h > 0 ? <DeltaIcon /> : <DownArorw />}
          <Text
            style = {styles.chnagetext}

          >
            {coin.price_change_percentage_24h.toFixed(2)}%
          </Text>

        </View>
      </View>
    </Pressable>

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
    flexShrink: 1,
    flex: 1,
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

  changecontainer: {
    flexDirection: 'row',
    color: 'white',

  },

  chnagetext: {
    color: 'white',
    marginLeft: 5,
  },


});