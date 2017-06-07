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
  TouchableOpacity,
  ScrollView
} from 'react-native';


import SX_rushItem from './SX_rushItem';

const ScreenWidth = Dimensions.get('window').width;  
const ScreenHeight = Dimensions.get('window').height;  


class SX_miaosha extends React.Component {
  constructor(props){
    super(props);
    var rushData = [
    {contentImg:'/images/583416d1N8d5b7a35.jpg!q50.jpg.webp',tips_1:'../images/58631b92N533a9b92.png',title:'美仑达 精选脐橙 6粒铂金果 单果约220克-270克',nowPrice:'¥23.8',oldPrice:'¥39.9',favorableRate:'好评率93%'},
    {contentImg:'/images/583416d1N8d5b7a35.jpg!q50.jpg.webp',tips_1:'../images/58631b92N533a9b92.png',title:'美仑达 精选脐橙 6粒铂金果 单果约220克-270克',nowPrice:'¥23.8',oldPrice:'¥39.9',favorableRate:'好评率93%'},
    {contentImg:'/images/583416d1N8d5b7a35.jpg!q50.jpg.webp',tips_1:'../images/58631b92N533a9b92.png',title:'美仑达 精选脐橙 6粒铂金果 单果约220克-270克',nowPrice:'¥23.8',oldPrice:'¥39.9',favorableRate:'好评率93%'},
    {contentImg:'/images/583416d1N8d5b7a35.jpg!q50.jpg.webp',tips_1:'../images/58631b92N533a9b92.png',title:'美仑达 精选脐橙 6粒铂金果 单果约220克-270克',nowPrice:'¥23.8',oldPrice:'¥39.9',favorableRate:'好评率93%'},
    {contentImg:'/images/583416d1N8d5b7a35.jpg!q50.jpg.webp',tips_1:'../images/58631b92N533a9b92.png',title:'美仑达 精选脐橙 6粒铂金果 单果约220克-270克',nowPrice:'¥23.8',oldPrice:'¥39.9',favorableRate:'好评率93%'},
    {contentImg:'/images/583416d1N8d5b7a35.jpg!q50.jpg.webp',tips_1:'../images/58631b92N533a9b92.png',title:'美仑达 精选脐橙 6粒铂金果 单果约220克-270克',nowPrice:'¥23.8',oldPrice:'¥39.9',favorableRate:'好评率93%'},
    {contentImg:'/images/583416d1N8d5b7a35.jpg!q50.jpg.webp',tips_1:'../images/58631b92N533a9b92.png',title:'美仑达 精选脐橙 6粒铂金果 单果约220克-270克',nowPrice:'¥23.8',oldPrice:'¥39.9',favorableRate:'好评率93%'},
    {contentImg:'/images/583416d1N8d5b7a35.jpg!q50.jpg.webp',tips_1:'../images/58631b92N533a9b92.png',title:'美仑达 精选脐橙 6粒铂金果 单果约220克-270克',nowPrice:'¥23.8',oldPrice:'¥39.9',favorableRate:'好评率93%'},
    {contentImg:'/images/583416d1N8d5b7a35.jpg!q50.jpg.webp',tips_1:'../images/58631b92N533a9b92.png',title:'美仑达 精选脐橙 6粒铂金果 单果约220克-270克',nowPrice:'¥23.8',oldPrice:'¥39.9',favorableRate:'好评率93%'},
    ];
    this.state = {
      diffTime : '',
      flag10 : null,
      flag17 : null,
      rushData : rushData
    }
  }
  componentWillmount () {

  }
  componentWillUnmount () {
    this.startMiaoshaTimer && clearTimeout(this.startMiaoshaTimer)
  }
  componentDidMount () {
    var currentHour = new Date().getHours();
    var flag10 = Number(currentHour)>9 && Number(currentHour)<17;
    this.setState({ flag10: flag10, flag17:!flag10});
    this.startMiaoshaTimer();
  }
  startMiaoshaTimer(){
    this.autoplayTimer && clearTimeout(this.autoplayTimer)
    this.autoplayTimer = setInterval(() => {
      
      var currentDate = new Date();
      var currentHour = currentDate.getHours();
      var flag10 = Number(currentHour)>9 && Number(currentHour)<17;
      var today = currentDate.getFullYear() + '/' + Number(currentDate.getMonth() + 1)+ '/' + currentDate.getDate() ;
      var diffTime = flag10 ? Number(new Date(today+' 17:00:00') - currentDate): Number(new Date(today+' 17:00:00') - currentDate) + 17*60*60*1000;
      var diffTimeStr = Math.floor(diffTime/3600000) + '时' + Math.floor(diffTime%3600000/60000) +'分' + Math.floor(diffTime%3600000%60000/1000) +'秒';
      this.setState({ flag10: flag10, flag17:!flag10 ,diffTime:diffTimeStr});
    },1000);
  }

  onRowSelect(val){
    ToastAndroid.show(val,ToastAndroid.SHORT);
  }
  createRushItem(val,i){
    return (<SX_rushItem key={i} onRowSelect={()=>this.onRowSelect(val.title)} itemData={val}/>
      )
  }

  render(){
    return(
         <View style={styles.container} removeClippedSubviews={false}>
          <View>
            <TouchableOpacity  onPress={()=>{ToastAndroid.show('秒杀活动',ToastAndroid.SHORT);}}>
              <Image source={require("../images/59357362N506e2a55.gif")} style={{width:ScreenWidth,height:93,resizeMode:"cover"}}/>
            </TouchableOpacity >
          </View>
          <View>
            <TouchableOpacity  onPress={()=>{ToastAndroid.show('秒杀,手慢无',ToastAndroid.SHORT);}}>
              <Image source={require("../images/5875ebb7N90423864.jpg!q50.jpg.webp")} style={{width:ScreenWidth,height:35,resizeMode:"cover"}}/>
            </TouchableOpacity >
          </View>
          <View style={{flexDirection:'row',paddingTop:10,paddingBottom:10}}>
            <View style={{flex:1,alignItems:'center',justifyContent:"center"}}>
              <TouchableOpacity  onPress={()=>{ToastAndroid.show('10:00抢购',ToastAndroid.SHORT);}}>
                <Text style={this.state.flag10 ? styles.activeDay : styles.inactiveDay}>6月6日</Text>
                <Text style={this.state.flag10 ? styles.activeHour : styles.inactiveHour}>10:00</Text>
              </TouchableOpacity >
            </View>
            <View style={{flex:1,alignItems:'center',justifyContent:"center"}}>
              <TouchableOpacity  onPress={()=>{ToastAndroid.show('17:00抢购',ToastAndroid.SHORT);}}>
                <Text style={this.state.flag17 ? styles.activeDay : styles.inactiveDay}>6月6日</Text>
                <Text style={this.state.flag17 ? styles.activeHour : styles.inactiveHour}>17:00</Text>
              </TouchableOpacity >
            </View>
          </View>
          <View style={{flexDirection:'row',paddingLeft:10,paddingRight:10}}>
            <View style={{flex:1}}>
              <Text style={{alignSelf:"flex-start"}}>正在抢购，先下单先得哦</Text>
            </View>
            <View style={{flex:1}}>
              <Text style={{alignSelf:"flex-end"}}>距结束<Text>{this.state.diffTime}</Text></Text>
            </View>
          </View>
          <ScrollView horizontal={true}>
            {this.state.rushData.map(this.createRushItem.bind(this))}
          </ScrollView>
        </View>
      )
  }

}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
  },
  activeDay:{
    color:'red',
    fontSize:12
  },
  inactiveDay:{
    color:'#000',
    fontSize:12
  },
  activeHour:{
    color:'red',
    fontSize:16,
    fontWeight:'500'
  },
  inactiveHour:{
    color:'#000',
    fontSize:16,
    fontWeight:'500'
  }
});
module.exports = SX_miaosha;