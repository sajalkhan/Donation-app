import React from 'react';
import { View, Text } from 'react-native';
import style from './style';

interface HeaderProps {
  title: string;
  type: 'h1' | 'h2' | 'h3';
  color?: string;
}

const Header: React.FC<HeaderProps> = ({ title, type, color = '#000000' }) => {
  const getStyle = (): object => {
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
      <Text style={[getStyle(), color && { color: color }]}>{title}</Text>
    </View>
  );
};

export default Header;
