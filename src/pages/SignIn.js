import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  StyleSheet,
} from 'react-native';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = text => {
    setEmail(text);
  };
  const onChangePassword = text => {
    setPassword(text);
  };

  const onSubmit = () => {
    Alert.alert('알림', '안녕~');
  };

  const canGoNext = email && password;

  return (
    <View style={styles.logInContainer}>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>이메일과 비밀번호를 입력해주세요</Text>
        <TextInput
          style={styles.textInput}
          placeholder="이메일"
          onChangeText={onChangeEmail}
        />
      </View>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.textInput}
          placeholder="비밀번호"
          onChangeText={onChangePassword}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonZone}>
        <Pressable
          onPress={onSubmit}
          style={
            !canGoNext
              ? styles.loginButton
              : StyleSheet.compose(styles.loginButton, styles.loginButtonActive)
          }
          disabled={!canGoNext}>
          <Text style={styles.loginButtonText}>로그인하기</Text>
        </Pressable>
        <View>
          <Text>처음이신가요?</Text>
          <Pressable>
            <Text style={{textDecorationLine: 'underline', fontWeight: 'bold'}}>
              가입하기
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logInContainer: {
    padding: 12,
  },
  loginButton: {
    backgroundColor: '#767676',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginBottom: 10,
    width: 180,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonActive: {
    backgroundColor: '#18f',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  buttonZone: {
    alignItems: 'center',
    marginTop: 10,
  },
  label: {
    fontSize: 19,
    marginBottom: 20,
  },
  inputWrapper: {
    padding: 10,
  },
  textInput: {
    height: 48,
    padding: 8,
    fontSize: 19,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    borderStyle: 'solid',
    borderColor: '#616060',
    backgroundColor: '#fff',
  },
});

export default SignIn;
