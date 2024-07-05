import { Redirect } from 'expo-router';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const HomeScreen = () => {
  return <Redirect href={'/allocations'} />;
}

export default HomeScreen;
