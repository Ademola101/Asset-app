import { View, FlatList, ActivityIndicator } from 'react-native';
import React from 'react';
import CoinsExcerpt from '../Components/CoinsExcerpt';
import { useFetchCoins } from '../hooks/useFetchCoins';

const HomeScreen = () => {
  const { data:coins, isLoading } = useFetchCoins();

  const renderItem = ({ item }) => {
    return (
      <CoinsExcerpt coin={item}/>
    );

  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

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