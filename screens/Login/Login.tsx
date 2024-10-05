import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Pressable } from 'react-native';
import Input from '../../components/Input/Input';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

import style from './style';
import globalStyle from '../../assets/styles/globalStyle';
import { Routes } from '../../navigation/Routes';

interface LoginProps {
  navigation: {
    navigate: (route: string) => void;
  };
}

const Login: React.FC<LoginProps> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    // Implement login functionality here
  };

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={style.container}>
        <View style={globalStyle.marginBottom24}>
          <Header type="h1" title="Welcome Back" />
        </View>

        <View style={globalStyle.marginBottom24}>
          <Input keyboardType="email-address" label="Email" placeholder="Enter your email..." onChangeText={setEmail} />
        </View>

        <View style={globalStyle.marginBottom24}>
          <Input secureTextEntry label="Password" placeholder="******" onChangeText={setPassword} />
        </View>

        <View style={globalStyle.marginBottom24}>
          <Button title="Login" onPress={handleLogin} />
        </View>

        <Pressable style={style.registrationButton} onPress={() => navigation.navigate(Routes.Registration)}>
          <Header color="#156CF7" type="h3" title="Don't have an account?" />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
