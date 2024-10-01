import React from 'react';
import { View, Text, TextStyle } from 'react-native';
import style from './style';

interface HeaderProps {
  title: string;
  color?: string;
  numberOfLines?: number;
  type?: 'h1' | 'h2' | 'h3';
}

const Header: React.FC<HeaderProps> = ({ title, type = 'h1', color, numberOfLines }) => {
  const getStyle = (): TextStyle => {
    switch (type) {
      case 'h1':
        return style.title1;
      case 'h2':
        return style.title2;
      case 'h3':
        return style.title3;
      default:
        return style.title1;
    }
  };

  return (
    <View>
      <Text style={[getStyle(), color ? { color } : undefined]} numberOfLines={numberOfLines}>
        {title}
      </Text>
    </View>
  );
};

export default Header;
