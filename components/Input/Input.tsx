import React, { useState } from 'react';
import { View, Text, TextInput, TextInputProps } from 'react-native';
import style from './style';

interface InputProps extends TextInputProps {
  label: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  onChangeText?: (text: string) => void;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  onChangeText = () => {},
  secureTextEntry = false,
  keyboardType = 'default',
  ...textInputProps
}) => {
  const [value, setValue] = useState<string>('');

  const handleChangeText = (val: string) => {
    setValue(val);
    onChangeText(val);
  };

  return (
    <View>
      <Text style={style.label}>{label}</Text>
      <TextInput
        value={value}
        style={style.input}
        keyboardType={keyboardType}
        onChangeText={handleChangeText}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder || undefined}
        {...textInputProps}
      />
    </View>
  );
};

export default Input;
