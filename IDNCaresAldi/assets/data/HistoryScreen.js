import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

const HistoryScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rectangle}>
        <View style={styles.rowContainer}>
          <Image source={require('../images/chevron-left.png')} style={styles.left} />
          <Text style={styles.title}>Riwayat Pembelian</Text>
        </View>
      </View>
      <View style={styles.filterRow}>
        <View style={styles.filter}>
          <Text style={styles.textFilter}>Semua Status</Text>
          <Image source={require('../images/chevron-down.png')} style={styles.filter2} />
        </View>
        <View style={styles.filter}>
          <Text style={styles.textFilter}>Semua Tanggal</Text>
          <Image source={require('../images/chevron-down.png')} style={styles.filter2} />
        </View>
      </View>
      <View style={styles.rectangle2}>
        <View style={styles.rowContainer}>
          <View style={styles.belanjaContainer}>
            <Text style={styles.boldText1}>Belanja</Text>
            <Text style={styles.text}>1 Jan 2023</Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Selesai</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.line, { marginBottom: 0 }]}></View>
        <View style={styles.rowContainer2}>
          <Image source={require('../images/OBAT.png')} style={styles.obat} />
          <Text style={styles.boldText}>
            Ibuprofen{'\n'}
            <Text style={styles.text}>1 Barang</Text>
          </Text>
        </View>
        <View style={styles.bottomRowContainer}>
          <Text style={styles.text}>
            Total Belanja{'\n'}
            <Text style={styles.boldText}>Rp44.600</Text>
          </Text>
          <TouchableOpacity style={styles.button2}>
            <Text style={styles.buttonText}>Beli Lagi</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.rectangle2}>
        <View style={styles.rowContainer}>
          <View style={styles.belanjaContainer}>
            <Text style={styles.boldText1}>Konsultasi Dokter</Text>
            <Text style={styles.text}>1 Sep 2022</Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Selesai</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.line, { marginBottom: 0 }]}></View>
        <View style={styles.rowContainer2}>
          <Image source={require('../images/chatIcon/aaa.png')} style={styles.obat} />
          <Text style={styles.boldText}>
            dr. Aldi Fauzan Sp.PD{'\n'}
            <Text style={styles.text}>Sp. Penyakit Dalam</Text>
          </Text>
        </View>
        <View style={styles.bottomRowContainer}>
          <Text style={styles.text}>
            Total Belanja{'\n'}
            <Text style={styles.boldText}>Rp74.600</Text>
          </Text>
          <TouchableOpacity style={[styles.button2, { marginLeft: 70 }]}>
            <Text style={styles.buttonText}>Ulasan</Text>
          </TouchableOpacity>
                    <TouchableOpacity style={styles.button2}>
            <Text style={styles.buttonText}>Chat Ulang</Text>
          </TouchableOpacity>
        </View>
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
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  rowContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  bottomRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 16,
    paddingLeft: 16,
    // marginTop: 16,
  },
  rectangle: {
    width: '100%',
    alignSelf: 'stretch',
    height: 60,
    backgroundColor: '#5F84A1',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  rectangle2: {
    width: 360,
    height: 200,
    borderRadius: 20,
    borderColor: '#000000',
    borderWidth: 0.5,
    marginBottom: 30,
  },
  filterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  filter: {
    flexDirection: 'row',
    height: 30,
    width: 120,
    borderRadius: 20,
    borderColor: '#000000',
    borderWidth: 0.5,
    marginHorizontal: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textFilter: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    textAlign: 'center',
    color: '#000000',
    marginRight: 10,
  },
  filter2: {
    width: 10,
    height: 10,
    color: '#000000',
  },
  foto: {
    width: 40,
    height: 40,
  },
  left: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  title: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#FFFFFF',
    alignSelf: 'flex-start',
  },
  belanjaContainer: {
    flex: 1,
    paddingHorizontal:16,
  },
  boldText: {
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
    color: '#000000',
    paddingTop: 16,
    marginLeft:16
  },
  boldText1: {
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
    color: '#000000',
    paddingTop: 16,
    // marginLeft:16
  },
  text: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#000000',
    paddingBottom: 8,
  },
  obat: {
    width: 60,
    height: 60,
  },
  avatar: {
    width: 40,
    height: 40,
  },
  button: {
    backgroundColor: '#5F84A1',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginLeft: 10,
    width: 60,
    height: 30,
    justifyContent: 'center',
    marginRight: 16,
  },
  button2: {
    backgroundColor: '#22313F',
    borderRadius: 6,
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 16,
    
  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    textAlign: 'center',
  },
  line: {
    borderBottomColor: '#EDEDED',
    borderBottomWidth: 1,
    width: '100%',
  },
});

export default HistoryScreen;
