import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../images/comment.png')} style={styles.logo} />
      <Text style={styles.title}>Chatnya belum</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  logo: {
    width: 30,
    height: 30,
    tintColor: '#333333',
  },
});

export default ChatScreen;