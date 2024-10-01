import React from 'react';
import { NavigationProp } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Image, SafeAreaView, ScrollView, View, Text } from 'react-native';
import BackButton from '../../components/BackButton/BackButton';
import Badge from '../../components/Badge/Badge';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';

interface SingleDonationItemProps {
  navigation: NavigationProp<any>;
  route: any;
}

const SingleDonationItem: React.FC<SingleDonationItemProps> = ({ navigation, route }) => {
  const donationItemInformation = useSelector((state: RootState) => state.donations.selectedDonationInformation);
  const { categoryInfo } = route.params;

  if (!donationItemInformation) {
    return null; // Handle the case where donation item information is not available
  }

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
        <BackButton onPress={() => navigation.goBack()} />
        <Image source={{ uri: donationItemInformation.image }} style={style.image} />
        <View style={style.badge}>
          <Badge title={categoryInfo.name} />
        </View>
        <Header type="h1" title={donationItemInformation.name} />
        <Text style={style.description}>{donationItemInformation.description}</Text>
      </ScrollView>
      <View style={style.button}>
        <Button
          title="Donate"
          onPress={() => {
            /* Handle donate action */
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default SingleDonationItem;
