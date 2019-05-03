import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,TouchableOpacity,AsyncStorage,ActivityIndicator,FlatList,StoryList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {SearchBar} from 'react-native-elements';


class MoreSections extends Component{
    render(){
      return(
      <View style={styles.headerNewStories}>
        <TouchableOpacity onPress={() => this.props.navigation.openDrawer()} style = {styles.headerListButton}>
          <Icon name = 'list' size = {22}/>
        </TouchableOpacity>
        <View>
          <Text style = {styles.title}>More Sections</Text>
        </View>
        </View>
      )
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    containerLogin: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#F5FCFF'
    },
    containerFeedBack: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    containerFeedBack2: {
      justifyContent: 'flex-start',
    },
    containerCatchUp: {
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      
    },
    header: {
      flexDirection: 'row',
      borderBottomWidth: 0.5,
      paddingTop: 10,
      paddingBottom: 10,
      backgroundColor: '#f2c252',
      justifyContent: 'space-between',
    
    },
    headerNewStories: {
      flexDirection: 'row',
      borderBottomWidth: 0.5,
      paddingTop: 20,
      paddingBottom: 20,
      backgroundColor: '#f2c252',
      justifyContent: 'space-between',
    },
    headerMyProfile:{
      flexDirection: 'row',
      borderBottomWidth: 0.5,
      paddingTop: 20,
      paddingBottom: 20,
      backgroundColor: '#f2c252',
      justifyContent: 'flex-start',
    },
    headerTitle: {
      flexDirection: 'column',
      
    },
    headerListButton: {
      width: 55,
      justifyContent :'center',
      alignItems:'center',
    },
    headerSearchButton: {
      // width: 40,
      justifyContent :'center',
      alignItems:'center',
  
    },
    headerMoreButton: {
      // width: 40,
      justifyContent :'center',
      alignItems:'center',
    },
    content: {
      flexDirection: 'row',
      backgroundColor: '#edf2ef',
      borderTopWidth: 0.5,
      borderTopColor: 'white',
    },
    content1: {
      flex: 1,
      paddingLeft: 3,
  
    },
    contentText1: {
      fontSize: 17,
      flex: 1,
      fontWeight:'500',
    },
    contentText2: {
      fontSize: 13,
      fontStyle: 'italic',
      flex: 1,
    },
    contentText3: {
      fontSize: 13,
      flex: 1,
    },
    title: {
      alignSelf: 'flex-start',
      fontWeight: '600',  
      fontSize: 18,
    },
    title2: {
      alignSelf: 'flex-start',
      fontWeight: '400',
      fontSize: 16,
    },
    top: {
    },
    bottom: {
      flex: 1,
    },
    icon: {
      alignItems: 'center',
    },
    areas: {
      width: 60,
      backgroundColor: '#f7dfa8',
      justifyContent: 'center',
      alignItems: 'center',
    },
    contentNearText: {
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 16,
    },
    screenStyles: {
    },
    textInput: {
      margin: 15,
      height: 40,
      padding: 5,
      fontSize: 16,
      borderBottomWidth: 1,
      borderTopColor: '#e89278',
    },
    buttonLogin: {
      justifyContent: 'center',
      flexDirection: 'row',
      backgroundColor: '#e89278',
      alignItems: 'center',
      height: 70,
      width: 100,
      borderRadius: 10,
    },
    login: {
      fontSize: 28,
      textAlign: 'center',
      margin: 10,
      fontWeight: '600',
    },
    buttonLoginText: {
      color: 'white',
      fontWeight: '700',
    },
    buttonLoginView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    buttonFeedBackView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    }, 
    feedbackText:{
      fontSize: 20,
      textAlign:'center',
    },
  });
  export default MoreSections;