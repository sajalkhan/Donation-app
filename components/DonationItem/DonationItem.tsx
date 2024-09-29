import React from 'react';
import { Image, View } from 'react-native';

import Badge from '../Badge/Badge';
import Header from '../Header/Header';

import style from './style';

interface DonationItemProps {
  uri: string;
  price: number;
  badgeTitle: string;
  donationTitle: string;
}

const DonationItem: React.FC<DonationItemProps> = ({ badgeTitle, uri, donationTitle, price }) => {
  return (
    <View>
      <View>
        <View style={style.badge}>
          <Badge title={badgeTitle} />
        </View>
        <Image resizeMode="contain" source={{ uri }} style={style.image} />
      </View>
      <View style={style.donationInformation}>
        <Header title={donationTitle} type="h3" color="#0A043C" />
        <View style={style.price}>
          <Header title={`$${price.toFixed(2)}`} type="h3" color="#156CF7" />
        </View>
      </View>
    </View>
  );
};

export default DonationItem;
