import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { defaultProfileImage } from '../../constants';
import Header from '../Header/Header';
import style from './style';

interface HeaderSectionProps {
  title: string;
  logOut: () => void;
  profileImage: string;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({ title, logOut, profileImage }) => {
  return (
    <View style={style.header}>
      <View>
        <Text style={style.headerIntroText}>Hello, </Text>
        <View style={style.username}>
          <Header title={title} />
        </View>
      </View>

      <Pressable onPress={logOut}>
        <Image source={{ uri: profileImage || defaultProfileImage }} style={style.profileImage} resizeMode="contain" />
        <Header type="h3" title="Logout" color="#156CF7" />
      </Pressable>
    </View>
  );
};

export default HeaderSection;
