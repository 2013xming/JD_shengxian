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



const ScreenWidth = Dimensions.get('window').width;  
const ScreenHeight = Dimensions.get('window').height;  


class SX_character extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  componentWillmount () {

  }
  componentWillUnmount () {

  }
  componentDidMount () {

  }

  render(){
    return(
         <View style={styles.container} removeClippedSubviews={false}>
          <View>
            <TouchableOpacity  onPress={()=>{ToastAndroid.show('秒杀,手慢无',ToastAndroid.SHORT);}}>
              <Image source={require("../images/5875ebdaN148ed2ac.jpg!q50.jpg.webp")} style={{width:ScreenWidth,height:35,resizeMode:"cover"}}/>
            </TouchableOpacity >
          </View>
          <View style={styles.firstRowItem}>
            <View style={styles.firstRowItemLeft}>
              <TouchableOpacity  onPress={()=>{ToastAndroid.show('瘦肉满满',ToastAndroid.SHORT);}}>
                <Image source={require("../images/59350ac6N77d4a934.jpg!q50.jpg.webp")} style={{width:ScreenWidth/2,height:180,resizeMode:"cover"}}/>
              </TouchableOpacity >
            </View>
            <View style={styles.firstRowItemRight}>
              <View style={styles.columnItemUp}>
                <TouchableOpacity  onPress={()=>{ToastAndroid.show('初见鲜橙',ToastAndroid.SHORT);}}>
                  <Image source={require("../images/592e8ccbNb556e244.jpg!q50.jpg.webp")} style={{width:ScreenWidth/2,height:90,resizeMode:"cover"}}/>
                </TouchableOpacity >
              </View>
              <View style={styles.columnItemDown}>
                <TouchableOpacity  onPress={()=>{ToastAndroid.show('秒杀,手慢无',ToastAndroid.SHORT);}}>
                  <Image source={require("../images/59278a8eN125fb92c.jpg!q50.jpg.webp")} style={{width:ScreenWidth,height:90,resizeMode:"cover"}}/>
                </TouchableOpacity >
              </View>
            </View>
          </View>
          <View style={styles.secondRowItem}>

            <View style={styles.secondRowItemLeft}>
              <TouchableOpacity  onPress={()=>{ToastAndroid.show('秒杀,手慢无',ToastAndroid.SHORT);}}>
                <Image source={require("../images/5934b110N9470c9b6.jpg!q50.jpg.webp")} style={{width:ScreenWidth/2,height:90,resizeMode:"cover"}}/>
              </TouchableOpacity >
            </View>
            <View style={styles.secondRowItemRight}>
              <TouchableOpacity  onPress={()=>{ToastAndroid.show('秒杀,手慢无',ToastAndroid.SHORT);}}>
                <Image source={require("../images/592f7b77N89b78f35.jpg!q50.jpg.webp")} style={{width:ScreenWidth/2,height:90,resizeMode:"cover"}}/>
              </TouchableOpacity >
            </View>

          </View>
        </View>
      )
  }

}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
  },
  firstRowItem:{
    flexDirection:'row',

  },
  firstRowItemLeft:{
    flex:1,
    height:180
  },
  firstRowItemRight:{
    flex:1,
    height:180,
    flexDirection:'column',
  },
  columnItemUp:{
    flex:1,
    height:90,
    flexDirection:'column',
  },
  columnItemDown:{
    flex:1,
    height:90,
    flexDirection:'column',
  },
  secondRowItem:{
    flexDirection:'row',
  },
  secondRowItemLeft:{
    flex:1,
  },
  secondRowItemRight:{
    flex:1,
  }
});
module.exports = SX_character;