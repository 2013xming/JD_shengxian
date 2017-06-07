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


class SX_headlines extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
         <View style={styles.container} removeClippedSubviews={false}>
          <View style={styles.headImgWrapper}>
            <Image source={require('../images/588f582aN631d6d78.jpg!q50.jpg.webp')} style={styles.headImg}/>
          </View>
          <View style={styles.swiperWrapper}>
             <Swiper style={styles.wrapper} showsButtons={false} height={18} autoplay={true} loop={true}  horizontal={false} showsPagination={false} showsVerticalScrollIndicator={true}>
                <View style={styles.slide}>
                  <TouchableOpacity  onPress={()=>{ToastAndroid.show('芒果时节，清凉滋补',ToastAndroid.SHORT);}}>
                    <View style={{flexDirection:'row',flex:1,}}>
                      <View style={{justifyContent: 'center',alignItems: 'center'}}>
                         <Text style={styles.label}>推荐</Text>
                      </View>
                      <View style={{justifyContent: 'center',alignItems: 'center'}}>
                        <Text style={styles.content}>芒果时节，清凉滋补</Text>
                      </View>
                    </View>
                  </TouchableOpacity >
                </View>
                
                <View style={styles.slide}>
                  <TouchableOpacity  onPress={()=>{ToastAndroid.show('疯狂秒杀仅此一天',ToastAndroid.SHORT);}}>
                   <View style={{flexDirection:'row',flex:1,}}>
                      <View style={{justifyContent: 'center',alignItems: 'center'}}>
                         <Text style={styles.label}>秒杀</Text>
                      </View>
                      <View style={{justifyContent: 'center',alignItems: 'center'}}>
                        <Text style={styles.content}>6.6疯狂秒杀仅此一天</Text>
                      </View>
                    </View>
                  </TouchableOpacity >
                </View>
      
                <View style={styles.slide}>
                  <TouchableOpacity  onPress={()=>{ToastAndroid.show('精挑细选的100份健康美味',ToastAndroid.SHORT);}}>
                    <View style={{flexDirection:'row',flex:1,}}>
                      <View style={{justifyContent: 'center',alignItems: 'center'}}>
                         <Text style={styles.label}>热销</Text>
                      </View>
                      <View style={{justifyContent: 'center',alignItems: 'center'}}>
                        <Text style={styles.content}>精挑细选的100份健康美味</Text>
                      </View>
                    </View>
                  </TouchableOpacity >
                </View>
              </Swiper>
          </View>
         
        </View>
      )
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:8,
/*    justifyContent: 'center',*/
/*    alignItems: 'center',*/
    backgroundColor: '#FFF',
    flexDirection:'row'
  },
  icon: {
      height: 46,
      width: 46,
      resizeMode: 'cover'
  },
  headImg:{
    height:21,
    width:60,
    marginLeft:10
  },
  headImgWrapper:{
    width:80,
    height:21
  },
  swiperWrapper: {

      height:18,
      flex:1,
      flexDirection:'column'
  },
  slide: {
    flex: 1,
    height:16,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection:'row',
  },
  label:{
    color:'red',
    borderWidth: 1,
    borderColor: 'red',
    marginRight:5,
    fontWeight:'500',
    fontSize:12,
    lineHeight:12,
    borderRadius:3,
  },
  content:{
    fontSize:12,
    lineHeight:14,
    color:'#000',
    fontWeight:'500'
  },

  bannerImg:{
    flex:1,resizeMode:'cover',height:94,width:ScreenWidth
  },

});
module.exports = SX_headlines;