import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rectangle}>
        <View style={styles.rectangle2}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Align container content from the top
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  rectangle: {
    width: 360,
    alignSelf: 'center', // Align the rectangle to the top
    height: 180,
    backgroundColor: '#5F84A1',
    justifyContent: 'flex-end', // Align the content at the bottom
    alignItems: 'center',
    paddingTop: 20,
    borderRadius: 16,
    marginTop: 20,
  },
  rectangle2: {
    width: '100%', // Set the width to 100% to match the parent rectangle
    height: 50,
    backgroundColor: '#EBEBEB', // Example color for rectangle2
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  logo: {
    width: 30,
    height: 30,
    tintColor: '#333333',
  },
});

export default ProfileScreen;
