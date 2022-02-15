import axios from 'axios';
const baseUrl =
  'http://182.76.237.238/~teammaxtra/help_application/public/api/login';
import React, { useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
} from 'react-native';
const Login = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setErrrData] = useState('');
  const handleLogin = async () => {
    setErrrData('');
    console.log('datatat of form>>', userName, password);

    let data = {
      email: userName,
      password: password,
      user_type: 1,
    };
    const res = await axios.post(`${baseUrl}`, data);
    console.log('res>>>', res.data);
    if (res.data.status) {
      setErrrData('');

      navigation.navigate('DashboardData');
    } else {
      setErrrData(res.data.message);
    }

  };

  return (
    <View style={{marginTop: 100}}>
      <Text style={{marginLeft: 20, color: 'black'}}>usernname</Text>
      <TextInput
        style={styles.input}
        placeholder="enter your email"
        underlineColorAndroid="transparent"
        placeholderTextColor="black"
        autoCapitalize="none"
        onChangeText={data => setUserName(data)}
      />
      <Text style={{marginLeft: 20, color: 'black'}}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="enter your password"
        underlineColorAndroid="transparent"
        secureTextEntry={true}
        placeholderTextColor="black"
        autoCapitalize="none"
        onChangeText={data => setPassword(data)}
      />
      <View style={{marginTop: '5%'}}>
        <Text>{error}</Text>
        <Button title="Login" onPress={handleLogin}>
          login
        </Button>
      </View>
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: 'white',
  },
});
