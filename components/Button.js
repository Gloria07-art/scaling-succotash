import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import React from 'react';

export default function Button() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity style={styles.btn1}>
          <Text style={styles.text1}>START</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn2}>
          <Text  style={styles.text2}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    paddingBottom:40,
    marginTop:20
  },

  text1:{
    fontWeight:'bold',
    color:'white'

  },

   text2:{
    fontWeight:'bold',
    color:'white'

  },

  btn1: {
    width: 230,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    backgroundColor: '#FBA1B7',
    borderRadius: 10,
    marginTop: 40,
  },

  btn2: {
    width: 230,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    backgroundColor: '#F31559',
    borderRadius: 10,
    marginTop: 20,
  },
});
