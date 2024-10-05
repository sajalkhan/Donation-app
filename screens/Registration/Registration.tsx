import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import Toast from 'react-native-toast-message';

import Input from '../../components/Input/Input';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import BackButton from '../../components/BackButton/BackButton';

import { createUser, ErrorResponse } from '../../api/user';

import style from './style';
import globalStyle from '../../assets/styles/globalStyle';

interface RegistrationProps {
  navigation: {
    goBack: () => void;
  };
}

const Registration: React.FC<RegistrationProps> = ({ navigation }) => {
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleRegistration = async () => {
    const result = await createUser(fullName, email, password);
    if ((result as ErrorResponse).error) {
      const errorResponse = result as ErrorResponse;
      Toast.show({
        type: 'error',
        text1: errorResponse.error,
      });
    } else {
      Toast.show({
        type: 'success',
        text1: 'You have successfully registered',
        onHide: () => {
          navigation.goBack();
        },
      });
    }
  };

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View style={style.backButton}>
        <BackButton onPress={navigation.goBack} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={style.container}>
        <View style={globalStyle.marginBottom24}>
          <Header type="h1" title="Hello and Welcome!" />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Input label="First & Last Name" placeholder="Enter your full name..." onChangeText={setFullName} />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Input keyboardType="email-address" label="Email" placeholder="Enter your email..." onChangeText={setEmail} />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Input secureTextEntry label="Password" placeholder="******" onChangeText={setPassword} />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Button title="Registration" onPress={handleRegistration} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Registration;
