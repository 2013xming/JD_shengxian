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


class SX_rushItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
         <View style={styles.container} removeClippedSubviews={false}>
          <Image source={require('../images/583416d1N8d5b7a35.jpg!q50.jpg.webp')} style={styles.contentImg}/>
          <Image source={require('../images/58631b92N533a9b92.png')} style={styles.tips_1}/>
          <Text numberOfLines={2} style={{marginTop:6}}>{this.props.itemData.title}</Text>
          <Text style={styles.nowPrice}>{this.props.itemData.nowPrice}</Text>
          <Text style={styles.oldPrice}>{this.props.itemData.oldPrice}</Text>
          <View style={styles.favorableRate}>
            <Text style={styles.favorableRateText}>{this.props.itemData.favorableRate}</Text>
          </View>
          <View style={styles.rushImgWrapper}>
            <Image source={require('../images/59243d7fN778be3a0.png')} style={styles.tips_2}/>
          </View>
        </View>
      )
  }

}
const styles = StyleSheet.create({
  container: {
    marginLeft:10,
    backgroundColor: '#FFF',
    width:110
  },
  contentImg:{
    width:110,height:110,resizeMode:'cover'
  },
  tips_1:{
    position:'absolute',top:3,left:6,width:38,height:38,
    resizeMode:"cover"
  },
  rushImgWrapper:{
    position:'absolute',bottom:10,right:15,width:25,height:25,
    backgroundColor:'red',borderRadius:4,
    justifyContent:'center',
    alignItems:'center'
  },
  tips_2:{
    width:15,height:12,
    resizeMode:'cover'
  },
  nowPrice:{
    marginTop:10,
    color: '#f7610a',
    fontSize: 15
  },
  oldPrice:{
    color: '#adadad',
    fontSize: 12,
    textDecorationLine :"line-through"
  },
  favorableRate:{
    position:'absolute',bottom:100,right:15,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    paddingLeft:10,
    paddingRight:10,
    backgroundColor:'#f7610a',
  },
  favorableRateText:{
    color:'#FFF'
  }
});
module.exports = SX_rushItem;