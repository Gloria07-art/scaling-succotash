import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
import React from 'react';

const ImageOffice = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/attractive-cheerful-dark-skinned-engineer-with-afro-hairstyle-his-cute-redhead-female-colleague.jpg')}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.iconBox}>
          <Image style={styles.icon1} source={require('../assets/menu.png')} />
          <Image style={styles.icon2} source={require('../assets/oval.png')} />
        </View>
        <Text style={styles.text}>
          Easy and <br></br> quick <br></br>Learn <br></br>English<br></br>{' '}
          Online
        </Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // position: 'absolute',
    // top: 0,
    right: 0,
    // bottom: 0,
    left: 0,
    opacity: 0.4,
    color: 'red',
    justifyContent: 'space-between',
  },

  // overlay: {
  //   ...StyleSheet.absoluteFillObject,
  //   backgroundColor: 'rgba(255, 0, 0, 0.5)',
  // },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    height: 630,
    width: 340,
    marginBottom: 50,
  },

  iconBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  icon1: {
    height: 50,
    width: 50,
  },
  icon2: {
    height: 50,
    width: 50,
  },

  //  textBox: {
  //  marginTop: -280 },

  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    // backgroundColor: '#EC1818',
    marginTop: 300,
  },

  // text2:{
  //   color: 'black',
  // }
});

export default ImageOffice;
