import { View, FlatList } from 'react-native';
import React from 'react';
import CoinsExcerpt from '../Components/CoinsExcerpt';
import { useFetchCoins } from '../hooks/useFetchCoins';

const HomeScreen = () => {
  const { data:coins } = useFetchCoins();
  console.log(coins);
  const renderItem = ({ item }) => {
    return (
      <CoinsExcerpt coin={item}/>
    );

  };

  return (
    <View>
      <FlatList
        data = {coins}
        renderItem  = {renderItem}
        keyExtractor = {item => item.id}

      />

    </View>
  );
};

export default HomeScreen;