import React, { useCallback } from 'react';
import { SafeAreaView, View } from 'react-native';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Search from '../../components/Search/Search';
import Badge from '../../components/Badge/Badge';
import Tab from '../../components/Tab/Tab';
import style from './style';
import DonationItem from '../../components/DonationItem/DonationItem';

const Home = () => {
  const handlePress = useCallback(() => {
    // console.log('click click ===');
  }, []);

  return (
    <SafeAreaView style={style.homePage}>
      <View style={style.homePageWrapper}>
        <Header title="Sohrab Hi, " type="h1" color="red" />
        <Button onPress={handlePress} title="Submit" animationType="scale" />
        <Tab title={'Highlight'} />
        <Tab title={'Highlight'} isInactive={true} />

        <Badge title="Environment" />

        <Search
          onSearch={value => {
            console.log(value);
          }}
        />

        <DonationItem
          uri={
            'https://img.pixers.pics/pho_wat(s3:700/FO/44/24/64/31/700_FO44246431_ab024cd8251bff09ce9ae6ecd05ec4a8.jpg,525,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,305,650,jpg)/stickers-cactus-cartoon-illustration.jpg.jpg'
          }
          badgeTitle={'Environment'}
          donationTitle={'Tree Cactus'}
          price={44}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
