import * as React from 'react';

import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from './src/pages/SignUp';
import SignIn from './src/pages/SignIn';

function HomeScreen({navigation}) {
  const signUpHandler = () => {
    navigation.navigate('SignUp');
  };
  const signInHandler = () => {
    navigation.navigate('SignIn');
  };

  return (
    <>
      <View style={{flex: 2}}>
        <Image
          style={{flex: 1}}
          source={{
            uri: 'https://images.unsplash.com/photo-1559454403-b8fb88521f11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80',
          }}
        />
      </View>
      <View style={styles.btnContainer}>
        <Pressable
          style={[styles.commonBtn, {backgroundColor: '#18f'}]}
          onPress={signUpHandler}>
          <Text style={{color: '#fff'}}>회원가입</Text>
        </Pressable>
        <Pressable
          style={[styles.commonBtn, styles.signInBtn]}
          onPress={signInHandler}>
          <Text style={{color: '#111'}}>로그인</Text>
        </Pressable>
      </View>
    </>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  commonBtn: {
    padding: 10,
    borderRadius: 25,
    width: 250,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInBtn: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'solid',
    marginTop: 15,
    backgroundColor: '#fff',
  },
});

export default App;
