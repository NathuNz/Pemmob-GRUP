import React from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  const handleLogOut = () => {
    // Add authentication logic or actions after successful sign in
    
    // Navigate to the Home screen
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      <View style={styles.rectangle}>
        <View style={styles.biodata}>
          <View style={styles.rowContainer}>
            <Image source={require('../images/Avatar.png')} style={styles.avatar} />
            <View style={styles.column}>
              <Text style={styles.boldText}>Muhammad Fauzan</Text>
              <View style={styles.rowContainer}>
                <Image source={require('../images/profileButton/Vector.png')} style={styles.icon1} />
                <Text style={styles.text}>+62 857-3261-3129</Text>
              </View>
              <View style={styles.rowContainer}>
                <Image source={require('../images/profileButton/Union.png')} style={styles.icon2} />
                <Text style={styles.text}>3203011805900011</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.rectangle2}>
          <View style={styles.rowContainer2}>
            <Image source={require('../images/logoApp.png')} style={styles.icon3} />
            <Text style={styles.harga}>Rp100.000</Text>
          </View>
        </View>
      </View>

      <View style={styles.row}>
        <Image source={require('../images/profileButton/Frame.png')} style={styles.icon4} />
        <Text style={styles.columnData}>Metode Pembayaran</Text>
        <Image source={require('../images/back.png')} style={styles.back} />
      </View>
      <View style={styles.line}></View>

      <View style={styles.row}>
        <Image source={require('../images/profileButton/telepon.png')} style={styles.icon4} />
        <Text style={styles.columnData}>Telepon Darurat</Text>
        <Image source={require('../images/back.png')} style={styles.back} />
      </View>
      <View style={styles.line}></View> 

      <View style={styles.row}>
        <Image source={require('../images/profileButton/FAQ.png')} style={styles.icon4} />
        <Text style={styles.columnData}>FAQ</Text>
        <Image source={require('../images/back.png')} style={styles.back} />
      </View>
      <View style={styles.line}></View> 

      <View style={styles.row}>
        <Image source={require('../images/profileButton/lokasi.png')} style={styles.icon4} />
        <Text style={styles.columnData}>Lokasi</Text>
        <Image source={require('../images/back.png')} style={styles.back} />
      </View>
      <View style={styles.line}></View> 

      <View style={styles.row}>
        <Image source={require('../images/profileButton/bahasa.png')} style={styles.icon4} />
        <Text style={styles.columnData}>Bahasa</Text>
        <Image source={require('../images/back.png')} style={styles.back} />
      </View>
      <View style={styles.line}></View> 

      <View style={styles.row}>
        <Image source={require('../images/profileButton/shape.png')} style={styles.icon4} />
        <Text style={styles.columnData}>Keamanan Akun</Text>
        <Image source={require('../images/back.png')} style={styles.back} />
      </View>
      <View style={styles.line}></View> 

      <TouchableOpacity style={styles.row} onPress={handleLogOut}>
        <Image source={require('../images/profileButton/keluar.png')} style={styles.icon4} />
        <Text style={styles.columnData2}>Keluar</Text>
        <Image source={require('../images/back.png')} style={styles.back} />
      </TouchableOpacity>
      <View style={styles.line}></View> 
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
    borderRadius: 16,
    marginTop: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 16,
    marginTop: 16,
    alignItems:'center'
  },
  columnLabel: {
    flex: 1,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color:'#000000'
  },
  columnData: {
    flex: 1.5,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#22313F',
    marginRight: 48,
  },
  columnData2: {
    flex: 1.5,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#810000',
    marginRight: 48,
  },
  rowContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  column: {
    flex: 1,
    marginLeft: 12,
  },
  line: {
    borderBottomColor: '#EDEDED',
    borderBottomWidth: 1,
    width: '90%',
  },
  biodata:{
    width:'90%',
    alignContent:'center',
    marginBottom:35
  },
  rectangle2: {
    width: '100%',
    height: 50,
    backgroundColor: '#EBEBEB',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    justifyContent:'center',
  },
  avatar: {
    width: 48,
    height: 48,
  },
  icon1: {
    width: 10,
    height: 10,
    marginRight: 4,
    color:'#000000'
  },
  icon2: {
    width: 12.73,
    height: 10,
    marginRight: 4,
  },
  icon3:{
    width:35,
    height:35,
  },
  icon4: {
    width: 18,
    height: 18,
    marginRight: 8,
  },
  harga:{
    color:'#000000',
    fontFamily:"Poppins-SemiBold",
    marginLeft:12,
  },
  text: {
    color: '#ffffff',
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    textAlign: 'center',
  },
  boldText: {
    fontFamily: 'Poppins-Bold',
    color: '#ffffff',
  },
  textDetail: {
    color: '#000000',
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    textAlign: 'left',
    marginHorizontal:10,
  },
  back:{
    width:14,
    height:14,
  }
});

export default ProfileScreen;
