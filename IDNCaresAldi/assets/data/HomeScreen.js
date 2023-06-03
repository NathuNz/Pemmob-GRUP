import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet, Image, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import ChatScreen from './ChatScreen';
import HistoryScreen from './HistoryScreen';
import ProfileScreen from './ProfileScreen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const HomeScreen = () => {
  const [searchText, setSearchText] = useState('');

  const handleButtonPress = (feature) => {
    // Perform action based on the selected feature
    console.log('Selected feature:', feature);
  };

  return (
    <React.Fragment>
      <StatusBar backgroundColor={'#5F84A1'} barStyle={'dark-content'} />
      <View style={styles.container}>
        <View style={styles.rectangle}>
          <View style={styles.rowContainer}>
            <Image source={require('../images/Avatar.png')} style={styles.Avatar} />
            <Text style={styles.text}>
              Hallo, Welcome{'\n'}
              <Text style={styles.boldText}>Muhammad Fauzan</Text>
            </Text>
            <Image source={require('../images/Notifications.png')} style={styles.Notification} />
          </View>
          <View style={styles.inputContainer}>
            <FontAwesomeIcon icon={faSearch} style={styles.searchIcon} />
            <TextInput
              style={[styles.input, { paddingLeft: '12.5%', color: '#FFFFFF' }]}
              placeholder="Search..."
              placeholderTextColor="#FFFFFF"
              value={searchText}
              onChangeText={(text) => setSearchText(text)}
            />
          </View>
        </View>
        <Text style={styles.subtitle}>Fitur</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('Feature 1')}>
            <Image source={require('../images/tokoKesehatan.png')} style={styles.featureIcon} />
            <Text style={styles.featureName}>Toko Kesehatan</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('Feature 2')}>
            <Image source={require('../images/konsultasiDokter.png')} style={styles.featureIcon} />
            <Text style={styles.featureName}>Konsultasi Dokter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('Feature 3')}>
            <Image source={require('../images/diagnosaLaboratorium.png')} style={styles.featureIcon} />
            <Text style={styles.featureName}>Diagnosa Laboratorium</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('Feature 4')}>
            <Image source={require('../images/donorDarah.png')} style={styles.featureIcon} />
            <Text style={styles.featureName}>Donor Darah</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('Feature 1')}>
            <Image source={require('../images/ambulance.png')} style={styles.featureIcon} />
            <Text style={styles.featureName}>Ambulance</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('Feature 2')}>
            <Image source={require('../images/vaksinasiImunisasi.png')} style={styles.featureIcon} />
            <Text style={styles.featureName}>Vaksinasi dan Imunisasi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('Feature 3')}>
            <Image source={require('../images/artikelKesehatan.png')} style={styles.featureIcon} />
            <Text style={styles.featureName}>Artikel Kesehatan</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('Feature 4')}>
            <Image source={require('../images/fiturLainnya.png')} style={styles.featureIcon} />
            <Text style={styles.featureName}>Fitur Lainnya</Text>
          </TouchableOpacity>
        </View>
        <Text style={[styles.subtitle, { marginTop: 0 }]}>Berita</Text>
        <View style={styles.newsRectangle}>
           <Image source={require('../images/fotoArtikel.png')} style={styles.artikel} />
        </View>
      </View>
    </React.Fragment>
  );
  }; 

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconSource;

          if (route.name === 'Home') {
            iconSource = require('../images/home.png');
          } else if (route.name === 'Chat') {
            iconSource = require('../images/comment.png');
          } else if (route.name === 'History') {
            iconSource = require('../images/history.png');
          } else if (route.name === 'Profile') {
            iconSource = require('../images/profile.png');
          }

          return <Image source={iconSource} style={[styles.icon, { tintColor: color }]} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#22313F',
        inactiveTintColor: '#FFFFFF',
        activeBackgroundColor: '#22313F',
        inactiveBackgroundColor: '#22313F',
        style: {
          backgroundColor: '#22313F',
        },
        tabStyle: {
          backgroundColor: '#5F84A1',
          height: 65,
          alignSelf: 'flex-end',
        },
        labelStyle: {
          bottom: '10%',
          fontFamily: 'Poppins-Medium',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Align container content from the top
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  subtitle: {
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    color: '#22313F',
    alignSelf: 'flex-start',
    marginLeft: 16,
    marginTop: 20,
    marginBottom: 10,
  },
  rectangle: {
    width: '100%',
    alignSelf: 'stretch', // Adjust the width to stretch across the screen
    height: 165,
    backgroundColor: '#5F84A1',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 20, // Add paddingTop to create space between container and rectangle
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  boldText: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
  },
  Avatar: {
    width: 48,
    height: 48,
    marginRight: 12,
  },
  Notification: {
    width: 32,
    height: 32,
    marginLeft: 48,
  },
  inputContainer: {
    width: '90%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#FFFFFF',
    padding: 8,
    borderRadius: 30,
    backgroundColor: '#5F84A1',
    fontFamily: 'Poppins-Regular',
  },
  searchIcon: {
    position: 'absolute',
    left: 16,
    top: 12.5,
    zIndex: 1,
    color: '#FFFFFF',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 0,
    marginBottom: 24,
  },
  button: {
    marginHorizontal:8,
    width: '20%',
    height: '20%',
    aspectRatio: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  icon: {
    width: 25,
    height: 25,
  },
  featureIcon: {
    width: '70%',
    height: '70%',
  },
  featureName:{
    fontSize:9.5,
    fontFamily:'Poppins-Medium',
    marginTop:6,
    textAlign: 'center',
    color:'#000000',
  },
  newsRectangle: {
    width: '91%',
    alignSelf: 'center', // Center the rectangle horizontally
    height: 165,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20, // Add paddingTop to create space between container and rectangle
    backgroundColor: '#4F1717',
    borderRadius:24,
  },
  artikel: {
    alignSelf: 'center', // Center the rectangle horizontally
    justifyContent: 'center',
    alignItems: 'center',
    width:100,
    height:100,
  }
});

export default HomeTabNavigator;