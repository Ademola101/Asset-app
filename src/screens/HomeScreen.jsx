import { View, FlatList, ActivityIndicator, Text, Pressable, StyleSheet, RefreshControl } from 'react-native';
import React, { useContext } from 'react';
import CoinsExcerpt from '../Components/CoinsExcerpt';
import { UserContext } from '../Context/userContext';
import { useFetchCoins } from '../hooks/useFetchCoins';
import { auth } from '../../config/firebase';



const ItemSeparator = () => <View style={styles.separator} />;
const HomeScreen = ({ navigation }) => {
  const { User } = useContext(UserContext);
  const { data:coins, isLoading, isFetching, refetch } = useFetchCoins();
  const onRefresh = () => {
    refetch();
  };

  const renderItem = ({ item }) => {

    return (

      <CoinsExcerpt coin={item} navigation = {navigation}/>

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
        refreshControl = {
          <RefreshControl refreshing = {isFetching} onRefresh = {onRefresh}/>
        }

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