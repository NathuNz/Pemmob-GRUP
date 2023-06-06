import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rectangle}>
        <View style={styles.rowContainer}>
          <Image source={require('../images/Avatar.png')} style={styles.avatar} />
          <Text style={styles.boldText}>
            Muhammad Fauzan{'\n'}
            <View style={styles.rowContainer}>
            <Image source={require('../images/profileButton/Vector.png')} style={styles.icon} />
            <Text style={styles.text}>+62 857-3261-3129</Text>
            </View>
            <View style={styles.rowContainer}>
            <Image source={require('../images/profileButton/Union.png')} style={styles.icon2} />
            <Text style={styles.text}>3203011805900011</Text>
            </View>
          </Text>
        </View>
        <View style={styles.rectangle2}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  rectangle: {
    width: 360,
    alignSelf: 'center',
    height: 180,
    backgroundColor: '#5F84A1',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // paddingBottom: 20,
    borderRadius: 16,
    marginTop: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:40,
  },
  rectangle2: {
    width: '100%',
    height: 50,
    backgroundColor: '#EBEBEB',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  avatar: {
    width: 48,
    height: 48,
    marginRight: 12,
  },
  icon: {
    width: 10,
    height: 10,
    marginRight: 4,
  },
  icon2: {
    width: 12.73,
    height: 10,
    marginRight: 4,
  },
  text: {
    color: '#ffffff',
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    textAlign: 'left',
  },
  boldText: {
    fontFamily: 'Poppins-Bold',
    textAlign: 'left',
    color: '#ffffff',
  },
});

export default ProfileScreen;
