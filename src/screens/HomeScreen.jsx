import { View, FlatList, ActivityIndicator, Text, Pressable, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import CoinsExcerpt from '../Components/CoinsExcerpt';
import { UserContext } from '../Context/userContext';
import { useFetchCoins } from '../hooks/useFetchCoins';
import { auth } from '../../config/firebase';
import { useFetchMarketData } from '../hooks/useFetchCoins';



const ItemSeparator = () => <View style={styles.separator} />;
const HomeScreen = ({ navigate }) => {
  const { User } = useContext(UserContext);
  const { data:coins, isLoading } = useFetchCoins();


  const renderItem = ({ item }) => {
    const id = item.id;
    const { data:marketData } = useFetchMarketData(id);
    return (
      <Pressable onPress={
        () => navigate('CoinDetails', { coin: item, marketData: marketData })
      }>
        <CoinsExcerpt coin={item}/>
      </Pressable>
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
      <View>
        <Text>
        Welcome {User.email}
        </Text>
        <Pressable onPress={() => auth.signOut()}>
          <Text>Sign out</Text>
        </Pressable>
      </View>

      <FlatList
        data = {coins}
        renderItem  = {renderItem}
        keyExtractor = {item => item.id}
        ItemSeparatorComponent = {ItemSeparator}

      />

    </View>
  );
};

const styles = StyleSheet.create({


  separator: {
    height: 10,
  },
});

export default HomeScreen;