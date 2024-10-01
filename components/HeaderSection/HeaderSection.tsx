import React from 'react';
import { View, Text, Image } from 'react-native';
import { defaultProfileImage } from '../../constants';
import Header from '../Header/Header';
import style from './style';

interface HeaderSectionProps {
  firstName: string;
  lastName: string;
  profileImage: string;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({ firstName, lastName, profileImage }) => (
  <View style={style.header}>
    <View>
      <Text style={style.headerIntroText}>Hello, </Text>
      <View style={style.username}>
        <Header title={`${firstName} ${lastName[0]}. 👋`} />
      </View>
    </View>
    <Image source={{ uri: profileImage || defaultProfileImage }} style={style.profileImage} resizeMode="contain" />
  </View>
);

export default HeaderSection;
