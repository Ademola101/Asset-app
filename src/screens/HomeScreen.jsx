import { View, FlatList, ActivityIndicator, Text } from 'react-native';
import React, { useContext } from 'react';
import CoinsExcerpt from '../Components/CoinsExcerpt';
import { UserContext } from '../Context/userContext';
import { useFetchCoins } from '../hooks/useFetchCoins';

const HomeScreen = () => {
  const { User } = useContext(UserContext);
  console.log(User.email);
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
      <Text>
        Welcome {User.email}
      </Text>

      <FlatList
        data = {coins}
        renderItem  = {renderItem}
        keyExtractor = {item => item.id}

      />

    </View>
  );
};

export default HomeScreen;