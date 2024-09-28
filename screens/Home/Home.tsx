import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import style from './style';

const Home = () => {
  return (
    <SafeAreaView style={style.homePage}>
      <View style={style.homePageWrapper}>
        <Text style={style.title}>Welcome to the home page</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
