import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Dimensions,
  TextInput,
  ToastAndroid,
  TouchableOpacity
} from 'react-native';

import Swiper from 'react-native-swiper';

const ScreenWidth = Dimensions.get('window').width;  
const ScreenHeight = Dimensions.get('window').height;  


class SX_banner extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
         <View style={styles.swiperWrapper} removeClippedSubviews={false}>
          <Swiper style={styles.wrapper} showsButtons={false} height={94} autoplay={true} loop={true} 
          paginationStyle={{bottom:10}}
          dot={
            <View style={{backgroundColor:'#FFF', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginBottom: 3}} />} 
            activeDot={
            <View style={{backgroundColor:'#000', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginBottom: 3}} />}
            >
            <View style={styles.slide}>
              <TouchableOpacity  onPress={()=>{ToastAndroid.show('First Picture',ToastAndroid.SHORT);}}>
                <Image source={require("../images/592fab31N1e5deedc.jpg!q50.jpg.webp")} style={styles.bannerImg}/>
              </TouchableOpacity >
            </View>
            
            <View style={styles.slide}>
              <TouchableOpacity  onPress={()=>{ToastAndroid.show('Second Picture',ToastAndroid.SHORT);}}>
                <Image source={require("../images/592fab12N4cf41ef9.jpg!q50.jpg.webp")} style={styles.bannerImg}/>
              </TouchableOpacity >
            </View>
  
            <View style={styles.slide}>
              <TouchableOpacity  onPress={()=>{ToastAndroid.show('Third Picture',ToastAndroid.SHORT);}}>
                <Image source={require("../images/5932d7eeN946276fd.jpg!q50.jpg.webp")} style={styles.bannerImg}/>
              </TouchableOpacity >
            </View>

 
            <View style={styles.slide}>
              <TouchableOpacity  onPress={()=>{ToastAndroid.show('fouth Picture',ToastAndroid.SHORT);}}>
                <Image source={require("../images/592faacdN7e567c9f.jpg!q50.jpg.webp")} style={styles.bannerImg}/>
              </TouchableOpacity >
            </View>


            <View style={styles.slide}>
              <TouchableOpacity  onPress={()=>{ToastAndroid.show('fifth Picture',ToastAndroid.SHORT);}}>
                <Image source={require("../images/5934feefNf7579c23.jpg!q50.jpg.webp")} style={styles.bannerImg}/>
              </TouchableOpacity >
            </View>

          </Swiper>
        </View>
      )
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
/*    justifyContent: 'center',*/
/*    alignItems: 'center',*/
    backgroundColor: '#FFF',
  },
  icon: {
      height: 46,
      width: 46,
      resizeMode: 'cover'
  },

  wrapper: {
      backgroundColor:'red'
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  bannerImg:{
    flex:1,resizeMode:'cover',height:94,width:ScreenWidth
  },

});
module.exports = SX_banner;