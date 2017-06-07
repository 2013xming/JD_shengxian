/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Dimensions,
  ToastAndroid
} from 'react-native';

import{StackNavigator} from 'react-navigation';
import HomeScreen from './views/homeScreen';
import TabNavigator from 'react-native-tab-navigator';
import SplashScreen from 'react-native-splash-screen';

const ScreenWidth = Dimensions.get('window').width;  
const ScreenHeight = Dimensions.get('window').height;  


/*class TypesScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: '分类',
    tabBarIcon: ({focused}) => (
      focused ? <Image
        source={require('./images/5876072aNdff8f84c.png')}
        style={styles.icon}/> :
      <Image
        source={require('./images/58760704N2ea53f62.png')}
        style={styles.icon}/>
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"/>
    );
  }
}

class HostDishesScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: '东家菜',
    tabBarIcon: ({focused}) => (
      focused ? <Image
        source={require('./images/58c8e867N4cccffb7.png')}
        style={styles.icon}/> :
      <Image
        source={require('./images/58c8e862Nc5c1e490.png')}
        style={styles.icon}/>
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"/>
    );
  }
}
class PreferredScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: '优选100',
    tabBarIcon: ({ focused }) => (
      focused ? <Image
        source={require('./images/5880d51cN10b43c26.jpg!q50.jpg')}
        style={styles.icon}/> :
      <Image
        source={require('./images/5880d502N6cb4f98b.jpg!q50.jpg')}
        style={styles.icon}/>
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"/>
    );
  }
}
*/


class TabNavigatorScreen extends React.Component {
   constructor(props){
    super(props);
    this.state = {
      selectedTab:'Home',
    }
  }
  render() {
    return (
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'Home'}
          renderIcon={() => <Image style={{height:46,width:46,marginBottom:-10}} source={require('./images/587606b8Neeb295ff.png')} />}
          renderSelectedIcon={() => <Image style={{height:46,width:46,marginBottom:-10}} source={require('./images/587606a2N4ef766cf.png')} />}
          onPress={() => this.setState({ selectedTab: 'Home' })}>
           <HomeScreen />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'Types'}
          renderIcon={() => <Image style={{height:46,width:46,marginBottom:-10}} source={require('./images/5876072aNdff8f84c.png')} />}
          renderSelectedIcon={() => <Image style={{height:46,width:46,marginBottom:-10}} source={require('./images/58760704N2ea53f62.png')} />}
          onPress={() => this.setState({ selectedTab: 'Types' })}>
            <Text>分类页面</Text>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'HostDishes'}
          renderIcon={() => <Image style={{height:46,width:46,marginBottom:-10}} source={require('./images/58c8e867N4cccffb7.png')} />}
          renderSelectedIcon={() => <Image style={{height:46,width:46,marginBottom:-10}} source={require('./images/58c8e862Nc5c1e490.png')} />}
          onPress={() => this.setState({ selectedTab: 'HostDishes' })}>
          <Text>东家菜</Text>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'Preferred'}
          renderIcon={() => <Image style={{height:46,width:46,marginBottom:-10}} source={require('./images/5880d51cN10b43c26.jpg!q50.jpg')} />}
          renderSelectedIcon={() => <Image style={{height:46,width:46,marginBottom:-10}} source={require('./images/5880d502N6cb4f98b.jpg!q50.jpg')} />}
          onPress={() => this.setState({ selectedTab: 'Preferred' })}>
            <Text>优选100</Text>
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}


/*const MyApp = TabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Types: {
    screen: TypesScreen,
  },
  HostDishes:{
    screen:HostDishesScreen
  },
  Preferred:{
    screen:PreferredScreen
  }
},  {
      animationEnabled: true, // 切换页面时是否有动画效果
      tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
      swipeEnabled: true, // 是否可以左右滑动切换tab

      backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
      tabBarOptions: {
//          activeTintColor: '#00CD00', // 文字和图片选中颜色
//          inactiveTintColor: '#8A8A8A', // 文字和图片未选中颜色
          showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
          showLabel:false,
          indicatorStyle: {
              height: 0,  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
              
          }, 
          tabStyle: {

          },
          style: {
              backgroundColor: '#fff', // TabBar 背景色
              height: 50
          },
          labelStyle: {
              fontSize: 10, // 文字大小
          },
          iconStyle:{
            height:46,
            width:46,
            marginTop:-10
          }
      },
});*/

const App = StackNavigator({
  Main: {
    screen: TabNavigatorScreen,
    navigationOptions:{
      headerLeft :<View><Image source={require('./images/goback.png')} style={{height:26,width:26,marginLeft:10}}/></View>,
      headerTitle: <View style={{flex:1,flexDirection:"row",alignItems:"center",justifyContent: 'center'}}>
                      <View style={{flex:1,flexDirection:"row",alignItems:"center",justifyContent: 'center'}}>
                        <Text style={{fontSize:20,color:"#C74040",fontWeight:"bold"}}>京东生鲜</Text>
                      </View>
                    </View>,
      headerRight :<View><Image source={require('./images/right.png')} style={{height:26,width:26,marginRight:10}}/></View>,
/*      headerTitleStyle:{justifyContent:"center",flex:1,flexDirection:"row",alignItems:"center",}*/
    }
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  icon: {
      height: 46,
      width: 46,
      resizeMode: 'cover'
  }
});

AppRegistry.registerComponent('JD_shengxian', () => App);
