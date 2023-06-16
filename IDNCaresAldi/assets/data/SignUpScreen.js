import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { app, db, getFirestore, collection, addDoc } from './index';

const SignUpScreen = ({ navigation }) => {
  const [regisNama, setRegisNama] = useState("");
  const [regisUsername, setRegisUsername] = useState("");
  const [regisPass, setRegisPass] = useState("");
  const [regisNIK, setRegisNIK] = useState("");

  const AddSesuatu = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        Nama: regisNama,
        Username: regisUsername,
        Password: regisPass,
        NIK: regisNIK
      });
      console.log("Document written with ID: ", docRef.id);
      navigation.navigate('SignIn');
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.rectangle}>
        <Text style={styles.title}>Sign Up</Text>
        <ScrollView contentContainerStyle={styles.container2}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Username</Text>
            <TextInput
              style={styles.input}
              placeholder="Masukkan Username"
              value={regisUsername}
              onChangeText={(Text) => setRegisUsername(Text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Masukkan Password"
              secureTextEntry
              value={regisPass}
              onChangeText={(Text) => setRegisPass(Text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Nama Lengkap</Text>
            <TextInput
              style={styles.input}
              placeholder="Masukkan Nama Lengkap"
              value={regisNama}
              onChangeText={(Text) => setRegisNama(Text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>NIK</Text>
            <TextInput
              style={styles.input}
              placeholder="Masukkan NIK"
              value={regisNIK}
              onChangeText={(Text) => setRegisNIK(Text)}
            />
          </View>
          <TouchableOpacity style={styles.buttonContainer} onPress={AddSesuatu}>
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
    flex: 1,
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
