import React, { useRef } from 'react';
import { Animated, Pressable, Text, PressableProps } from 'react-native';
import { animations, getAnimatedStyle } from '../../utils/animation';

import style from './style';

interface ButtonProps extends PressableProps {
  title: string;
  isDisabled?: boolean;
  animationType?:
    | 'fade'
    | 'wiggle'
    | 'rotate'
    | 'pulse'
    | 'scale'
    | 'swing'
    | 'flash'
    | 'expand'
    | 'bounce'
    | 'collapse';
  color?: string;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({
  color,
  title,
  onPress,
  isDisabled = false,
  animationType = 'bounce',
  ...rest
}) => {
  const animatedValue = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    animations[animationType]?.(animatedValue);
  };

  const handlePressOut = () => {
    animations.handlePressOut(animationType, animatedValue);
  };

  const animatedStyle = getAnimatedStyle(animationType, animatedValue);

  return (
    <Pressable disabled={isDisabled} onPressIn={handlePressIn} onPressOut={handlePressOut} onPress={onPress} {...rest}>
      <Animated.View
        style={[style.button, color && { backgroundColor: color }, animatedStyle, isDisabled && style.disabled]}
      >
        <Text style={style.title}>{title}</Text>
      </Animated.View>
    </Pressable>
  );
};

export default Button;
