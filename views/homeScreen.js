import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  Text,
  View,
  Button,
  Image,
  Dimensions,
  TextInput,
  ToastAndroid,
  TouchableOpacity
} from 'react-native';

import{StackNavigator} from 'react-navigation';
import Swiper from 'react-native-swiper';
import SX_banner from './SX_banner';
import SX_quickEntry from './SX_quickEntry';
import SX_headlines from './SX_headlines';
import SX_miaosha from './SX_miaosha';
import SX_character from './SX_character';
import SplashScreen from 'react-native-splash-screen';

const ScreenWidth = Dimensions.get('window').width;  
const ScreenHeight = Dimensions.get('window').height;  


class HomeScreen extends React.Component {
  constructor(props){
    super(props);
  }

 /* static navigationOptions = {
    tabBarLabel: '首页',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({focused}) => (
      focused ? <Image
        source={require('../images/587606b8Neeb295ff.png')}
        style={styles.icon}/> :
      <Image
        source={require('../images/587606a2N4ef766cf.png')}
        style={styles.icon}/>
    ),
  };*/
    componentDidMount(){
      SplashScreen.hide();
    }
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{alignSelf:'center'}}>
         <Image source={require("../images/58dba570N9b2808b3.jpg!q50.jpg.webp")} style={{height:20,width:ScreenWidth-20}}/>
        </View>
        <View style={styles.searchWrapper}>
         <Image source={require("../images/2017060122303848676.png")} style={{height:20,width:20,alignSelf:'center'}}/>
         <View style={styles.searchBox}>
           <Image source={require("../images/search.png")} style={styles.searchIcon}/>
            <TextInput style={{width:ScreenWidth-70,fontSize: 16,padding: 4,}}
              multiline={false}
              underlineColorAndroid='transparent'
              placeholder="新鲜水果"/>
         </View>
        </View>
        <SX_banner />
        <SX_quickEntry />
        <SX_headlines />
        <SX_miaosha />
        <SX_character />
      </ScrollView>
    );
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
  searchWrapper:{flexDirection:'row',paddingTop:5,paddingLeft:10,paddingRight:10,paddingBottom:5,backgroundColor:'#FFF'},
  searchBox:{//搜索框  
      height:30,  
      flexDirection: 'row',   // 水平排布    
      flex:1,  
      borderRadius: 15,  // 设置圆角边    
      backgroundColor: '#EFEFEF',  
      alignItems: 'center',  
      marginLeft: 8,    
      marginRight: 8,    
    }, 
  searchIcon: {//搜索图标    
      height: 20,    
      width: 20,   
      marginLeft: 5,    
      resizeMode: 'stretch'    
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

});

module.exports = HomeScreen;