import { View, FlatList, ActivityIndicator, Text, Pressable, StyleSheet, RefreshControl } from 'react-native';
import React, { useContext, useState } from 'react';
import IoLogOutOutline from 'react-native-vector-icons/Ionicons';
import CoinsExcerpt from '../Components/CoinsExcerpt';
import { UserContext } from '../Context/userContext';
import { useFetchCoins } from '../hooks/useFetchCoins';
import { auth } from '../../config/firebase';


const SignOutIcon = () => <IoLogOutOutline name="log-out-outline" size={20} color="white" />;
const ItemSeparator = () => <View style={styles.separator} />;
const HomeScreen = ({ navigation }) => {

  const [iconState, setIconState] = useState(true);
  const { User } = useContext(UserContext);

  const emailName = User.email?.split('@')[0].toUpperCase();
  const { data:coins, isLoading, isFetching, refetch } = useFetchCoins();
  const onRefresh = () =>  refetch();
  const renderItem = ({ item }) =>  <CoinsExcerpt coin={item} navigation = {navigation}/>;
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
        <Text style = {styles.welcome}>
        Welcome {emailName}
        </Text>
        <View style = {styles.signOutView}>
          { iconState ? (<Pressable onPress = {() => setIconState(false)}>
            <SignOutIcon />
          </Pressable>) : (<Pressable onPress={() => auth.signOut()}>
            <Text style = {styles.signoutText} >Sign out</Text>
          </Pressable>
          ) }

        </View>
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

  signOutView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'black',
  },

  signoutText: {
    color: 'white',
    fontSize: 20,


  },

  welcome:{
    color: 'white',
    fontSize: 20,
    padding: 10
  }
});

export default HomeScreen;