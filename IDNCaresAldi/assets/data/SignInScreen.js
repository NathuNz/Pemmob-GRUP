import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, StatusBar } from 'react-native';

const SignInScreen = ({ navigation }) => {
  const handleSignIn = () => {
    // Add authentication logic or actions after successful sign in
    
    // Navigate to the Home screen
    navigation.navigate('HomeScreen');
  };


  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#97BAE0" barStyle="dark-content" />
      <Image source={require('../images/logoApp.png')} style={styles.logo} />
      <View style={styles.rectangle}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#97BAE0',
  },
  rectangle: {
    position: 'absolute',
    width: '100%',
    alignSelf: 'stretch',
    height: '100%',
    borderRadius: 50,
    marginTop: 150,
    backgroundColor: '#FFFFFF',
  },
  title: {
    color: '#000000',
    fontSize: 26,
    marginTop:16,
    fontFamily: 'Poppins-Medium',
    marginBottom: 20,
    textAlign:'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 10,
    paddingHorizontal: 40,
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
    textAlign:'center',
  },
  daftarText: {
    color: '#000000',
    fontFamily: 'Poppins-Medium',
  },
  logo: {
    width: 100,
    height: 100,
    marginTop:24,
  },
  buttonContainer: {
    width: '80%',
    marginBottom: 10,
    borderRadius: 12,
    backgroundColor: '#22313F',
    justifyContent: 'center',
    alignSelf: 'center',
    height: 60,
    elevation: 3,
    paddingHorizontal: 40,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontFamily: 'Poppins-Regular',
    textAlign:'center',
  },
});

export default SignInScreen;
