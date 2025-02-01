import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from '../screens/Login';
import {Colors} from '../constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native';
import AddressButton from '../components/section/AddressButton';
import InputSearch from '../components/section/InputSearch';
import CarouselHomeRestaurants from '../components/section/CarouselHomeRestaurants';
import Card from '../components/ui/Card';
const Tab = createBottomTabNavigator();
const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.addrescontainer}>
        <AddressButton />
        <InputSearch />
      </View>

      <View style={styles.paddingsection}>
        <CarouselHomeRestaurants />
      </View>

      <View style={styles.paddingsection}>
        <CarouselHomeRestaurants />
      </View>

      <View style={[styles.paddingsection, styles.allrestaurant]}>
        <Text style={styles.allrestauranttext}>All Restaurants and Stores</Text>
        <Card restaurant="" />
        <Card restaurant="" />
        <Card restaurant="" />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingTop: 65,
    flex: 1,
  },
  addrescontainer: {
    display: 'flex',
    gap: 18,
    alignSelf: 'center',
    width: '90%',
  },
  paddingsection: {
    paddingTop: 24,
  },

  allrestaurant: {
    gap: 14,
    alignSelf: 'center',
    width: '90%',
  },
  allrestauranttext: {
    fontSize: 16,
    fontWeight: 600,
    letterSpacing: 0.25,
  },
});
