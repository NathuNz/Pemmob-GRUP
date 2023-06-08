import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const SignUpScreen = ({ navigation }) => {
  const handleSignUp = () => {
    // Add sign up logic or actions
    console.log("Sign Up pressed");
  };

  return (
    <View style={styles.container}>
      <View style={styles.rectangle}>
        <Text style={styles.title}>Sign Up</Text>
        <ScrollView contentContainerStyle={styles.container2}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username</Text>
          <TextInput style={styles.input} placeholder="Masukkan Username" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.input} placeholder="Masukkan Password" secureTextEntry />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nama Lengkap</Text>
          <TextInput style={styles.input} placeholder="Masukkan Nama Lengkap" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Tanggal Lahir</Text>
          <TextInput style={styles.input} placeholder="Masukkan Tanggal Lahir" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>NIK</Text>
          <TextInput style={styles.input} placeholder="Masukkan NIK" />
        </View>
        <TouchableOpacity style={styles.buttonContainer} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Saya Setuju</Text>
        </TouchableOpacity>
        <Text style={styles.textLink} onPress={() => navigation.navigate('SignIn')}>
          Sudah punya akun? <Text style={styles.daftarText}>Sign In</Text>
        </Text>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#97BAE0',
    paddingVertical: 150,
  },
  container2: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    // paddingVertical: 150,
  },
  rectangle: {
    width: '100%',
    alignSelf: 'stretch',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 40,
    paddingBottom: 40,
  },
  title: {
    color: '#000000',
    fontSize: 26,
    marginTop: 16,
    fontFamily: 'Poppins-Medium',
    marginBottom: 20,
    textAlign: 'center',
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
    color: '#787878',
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
  daftarText: {
    color: '#000000',
    fontFamily: 'Poppins-Medium',
  },
  buttonContainer: {
    width: '100%',
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
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
});

export default SignUpScreen;
