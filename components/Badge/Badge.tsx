import React, { useRef, useState } from 'react';
import { View, Text, ViewStyle } from 'react-native';
import style from './style';
import { horizontalScale } from '../../assets/styles/scaling';

interface BadgeProps {
  title: string;
  isInactive?: boolean;
}

const Badge: React.FC<BadgeProps> = ({ title, isInactive = false }) => {
  const [width, setWidth] = useState(0);
  const textRef = useRef<Text>(null);
  const paddingHorizontal = 10;

  const badgeWidth: ViewStyle = {
    width: horizontalScale(paddingHorizontal * 2 + width),
  };

  return (
    <View style={[style.badge, badgeWidth]} pointerEvents={isInactive ? 'none' : 'auto'}>
      <Text
        ref={textRef}
        onTextLayout={event => {
          setWidth(event.nativeEvent.lines[0].width);
        }}
        style={[style.title]}
      >
        {title}
      </Text>
    </View>
  );
};

export default Badge;
