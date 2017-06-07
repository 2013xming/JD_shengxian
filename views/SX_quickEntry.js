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


const ScreenWidth = Dimensions.get('window').width;  
const ScreenHeight = Dimensions.get('window').height;  


class SX_quickEntry extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
         <View style={styles.quickentry}>
          <View style={styles.quickentryItem}>
            <TouchableOpacity  onPress={()=>{ToastAndroid.show('新鲜水果',ToastAndroid.SHORT);}} style={styles.quickentryItemWrapper}>
              <Image source={require("../images/5893db99N7a0c2fc9.jpg")} style={styles.quickentryImg}/>
              <Text>新鲜水果</Text>
            </TouchableOpacity >
          </View>
          <View style={styles.quickentryItem}>
            <TouchableOpacity  onPress={()=>{ToastAndroid.show('蔬菜蛋类',ToastAndroid.SHORT);}} style={styles.quickentryItemWrapper}>
              <Image source={require("../images/5893dba3Nc37e1621.jpg")} style={styles.quickentryImg}/>
              <Text>蔬菜蛋类</Text>
            </TouchableOpacity >
          </View>
          <View style={styles.quickentryItem}>
            <TouchableOpacity  onPress={()=>{ToastAndroid.show('精品肉类',ToastAndroid.SHORT);}} style={styles.quickentryItemWrapper}>
              <Image source={require("../images/5893dbabNdca25010.jpg")} style={styles.quickentryImg}/>
              <Text>精品肉类</Text>
            </TouchableOpacity >
          </View>
          <View style={styles.quickentryItem}>
            <TouchableOpacity  onPress={()=>{ToastAndroid.show('海鲜水产',ToastAndroid.SHORT);}} style={styles.quickentryItemWrapper}>
              <Image source={require("../images/5893dbb1Nc2359bf5.jpg")} style={styles.quickentryImg}/>
              <Text>海鲜水产</Text>
            </TouchableOpacity >
          </View>
          <View style={styles.quickentryItem}>
            <TouchableOpacity  onPress={()=>{ToastAndroid.show('冷饮冻食',ToastAndroid.SHORT);}} style={styles.quickentryItemWrapper}>
              <Image source={require("../images/58f062f4N750b97f7.jpg")} style={styles.quickentryImg}/>
              <Text>冷饮冻食</Text>
            </TouchableOpacity >
          </View>
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
  quickentry:{
    alignItems:"center",
    flexDirection:"row",
    justifyContent:'space-around'
  },
  quickentryItem:{
    flex:1,
    width:60,
    height:80,
    alignItems:"center",
    marginTop:10
  },
  quickentryItemWrapper:{
    alignItems:"center",
    justifyContent:'center'
  },
  quickentryImg:{
    width:34,
    height:34,
    alignItems:"center",
    marginTop:10,
    marginBottom:10
  }

});
module.exports = SX_quickEntry;