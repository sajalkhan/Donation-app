import React from 'react';
import { Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import style from './style';

interface BackButtonProps {
  onPress: () => void; // Type the onPress prop
}

const BackButton: React.FC<BackButtonProps> = ({ onPress }) => {
  return (
    <Pressable onPress={onPress} style={style.container}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </Pressable>
  );
};

export default BackButton;
