import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, StatusBar } from 'react-native';

const SignInScreen = ({ navigation }) => {
  const handleSignIn = () => {
    // Add authentication logic or actions after successful sign in
    
    // Navigate to the Home screen
    navigation.navigate('Home');
  };


  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#97BAE0" barStyle="dark-content" />
      <View style={styles.rectangle} />
      <Image source={require('../images/logoApp.png')} style={styles.logo} />
      <Text style={styles.title}>Sign In</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="Masukkan Email" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} placeholder="Masukkan Password" secureTextEntry />
      </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.textLink} onPress={() => navigation.navigate('SignUp')}>
        Tidak punya akun? <Text style={styles.daftarText}>Daftar</Text>
      </Text>
      <TouchableOpacity style={[styles.buttonContainer, { marginTop: 50, backgroundColor: '#3E5C9A' }]}>
        <Text style={styles.buttonText}>Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.buttonContainer, { backgroundColor: '#FFFFFF' }]} onPress={handleSignIn}>
        <Text style={[styles.buttonText, { color: '#22313F' }]}>Google</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#97BAE0',
  },
  rectangle: {
    position: 'absolute',
    top: '23%',
    width: 400,
    height: 700,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
  },
  title: {
    color: '#000000',
    fontSize: 26,
    top: '2.5%',
    fontFamily: 'Poppins-Medium',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 10,
  },
  label: {
    color: '#000000',
    marginBottom: 5,
    fontFamily: 'Poppins-Regular',
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  textLink: {
    marginTop: 0,
    color: '#787878',
    fontFamily: 'Poppins-Regular',
  },
  daftarText: {
    color: '#000000',
    fontFamily: 'Poppins-Medium',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 10,
    borderRadius: 12,
    backgroundColor: '#22313F',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    elevation: 3,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontFamily: 'Poppins-Regular',
  },
});

export default SignInScreen;
