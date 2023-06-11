import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rectangle}>
        <View style={styles.rowContainer}>
          <Image source={require('../images/Avatar.png')} style={styles.Avatar} />
          <Text style={styles.text1}>
            Hallo, Welcome{'\n'}
            <Text style={styles.boldText1}>Muhammad Fauzan</Text>
          </Text>
          <Image source={require('../images/Notifications.png')} style={styles.notification} />
        </View>
      </View>
      <ScrollView>
      <View style={{ marginBottom: 200 }}>
        <View style={styles.row}>
          <Image source={require('../images/chatIcon/daffa.png')} style={styles.icon1} />
          <View>
            <Text style={styles.boldText}>dr. Daffa Asyqar Sp.JP</Text>
            <Text style={styles.text}>Photo</Text>
          </View>
          <View style={styles.timeContainer}>
            <Text style={styles.textRight}>09.28</Text>
            <View style={styles.circle}>
              <Text style={styles.text2}>2</Text>
            </View>
          </View>
        </View>
        <View style={styles.line}></View>
        <View style={styles.row}>
          <Image source={require('../images/chatIcon/Gio.png')} style={styles.icon1} />
          <View>
            <Text style={styles.boldText}>dr. Giovanni Nathaniel Sp.OG</Text>
            <Text style={styles.text}>Semoga lancar atas kelahirannya</Text>
          </View>
          <View style={styles.timeContainer}>
            <Text style={styles.textRight}>7 April</Text>
            <View style={styles.circle}>
              <Text style={styles.text2}>2</Text>
            </View>
          </View>
        </View>
        <View style={styles.line}></View>
        <View style={styles.row}>
          <Image source={require('../images/chatIcon/Ojan.png')} style={styles.icon1} />
          <View>
            <Text style={styles.boldText}>dr. Fauzan Nur'ilham Sp.DV</Text>
            <Text style={styles.text}>Halo dok, kulit saya rasanya gatel banget</Text>
          </View>
          <View style={styles.timeContainer}>
            <Text style={styles.textRight}>31 Agu 2022</Text>
            <View style={styles.circle}>
              <Text style={styles.text2}>2</Text>
            </View>
          </View>
        </View>
        <View style={styles.line}></View>
        <View style={styles.row}>
          <Image source={require('../images/chatIcon/Aldi.png')} style={styles.icon1} />
          <View>
            <Text style={styles.boldText}>dr. Aldi Fauzan Sp.PD</Text>
            <Text style={styles.text}>Terimakasih sudah berkonsultasi</Text>
          </View>
          <View style={styles.timeContainer}>
            <Text style={styles.textRight}>31 Mar 2022</Text>
            <View style={styles.circle}>
              <Text style={styles.text2}>2</Text>
            </View>
          </View>
        </View>
        <View style={styles.line}></View>
        <View style={styles.row}>
          <Image source={require('../images/chatIcon/Raken.png')} style={styles.icon1} />
          <View>
            <Text style={styles.boldText}>dr. Raken Putra Sp.THT-KL</Text>
            <Text style={styles.text}>Baik dok, Terimakasih</Text>
          </View>
          <View style={styles.timeContainer}>
            <Text style={styles.textRight}>1 Jan 2022</Text>
            <View style={styles.circle}>
              <Text style={styles.text2}>2</Text>
            </View>
          </View>
        </View>
        <View style={styles.line}></View>
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 16,
    marginTop: 16,
    alignItems: 'center',
  },
  timeContainer: {
    marginLeft: 'auto',
    alignItems:'flex-end'
  },
  icon1: {
    width: 52,
    height: 52,
    marginRight: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  Avatar: {
    width: 48,
    height: 48,
    marginRight: 12,
  },
  logo: {
    width: 30,
    height: 30,
    tintColor: '#333333',
  },
  notification: {
    width: 32,
    height: 32,
    marginLeft: 48,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  back: {
    width: 14,
    height: 14,
    marginLeft: 140,
  },
  line: {
    borderBottomColor: '#EDEDED',
    borderBottomWidth: 2,
    width: '100%',
  },
  columnData: {
    flex: 1.5,
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: '#22313F',
    marginRight: 48,
  },
  boldText: {
    fontFamily: 'Poppins-Medium',
    color: '#000000',
    textAlign: 'left',
  },
  boldText1: {
    fontFamily: 'Poppins-Bold',
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 20,
  },
  rectangle: {
    width: '100%',
    alignSelf: 'stretch',
    height: 160,
    backgroundColor: '#5F84A1',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  text: {
    color: '#000000',
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    textAlign: 'left',
  },
  textRight: {
    color: '#000000',
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    textAlign: 'right',
  },
  text1: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    textAlign: 'left',
  },
  text2: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-Regular',
    fontSize: 8,
    textAlign: 'center',
  },
  circle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#1D2730',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default ChatScreen;
