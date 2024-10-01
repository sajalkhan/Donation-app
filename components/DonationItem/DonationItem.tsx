import React from 'react';
import { Image, View, Pressable } from 'react-native';

import Badge from '../Badge/Badge';
import Header from '../Header/Header';

import style from './style';

interface DonationItemProps {
  uri: string;
  price: number;
  badgeTitle: string;
  donationTitle: string;
  donationItemId: number;
  onPress: (id: number) => void;
}

const DonationItem: React.FC<DonationItemProps> = ({
  uri,
  price,
  onPress,
  badgeTitle,
  donationTitle,
  donationItemId,
}) => {
  return (
    <Pressable onPress={() => onPress(donationItemId)}>
      <View>
        <View style={style.badge}>
          <Badge title={badgeTitle} />
        </View>
        <Image resizeMode="cover" source={{ uri }} style={style.image} />
      </View>
      <View style={style.donationInformation}>
        <Header title={donationTitle} numberOfLines={1} type="h3" color="#0A043C" />
        <View style={style.price}>
          <Header title={`$${price.toFixed(2)}`} type="h3" color="#156CF7" />
        </View>
      </View>
    </Pressable>
  );
};

export default DonationItem;
