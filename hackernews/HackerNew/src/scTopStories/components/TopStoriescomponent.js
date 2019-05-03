import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,TouchableOpacity,AsyncStorage,ActivityIndicator,FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {SearchBar} from 'react-native-elements';
import {connect} from 'react-redux';
import {fetchNewsAction, fetchSuccessAction, fetchFailedAction, fetchFailedSingleNewAction,fetchSingleNewAction,fetchSuccessSingleNewAction} from '../actions';



const extractKey = ({id}) => id
class TopStories extends Component {
    constructor(props){
      super(props);
      this.state = {
          refreshing: false,
          data: this.props.news,
          text:'',
      }
}

    _onPressMoreButton = () => {
      alert('List display options havent been setup')
      };
    _searchFilterFunction=text =>{
      this.setState({text});
      console.log('text',text)
      const newData = this.props.news.filter(item => {      
        const itemData = `${item.title}`;
         const textData = text;         
         return itemData.indexOf(textData) > -1;    
      });    
    
          this.setState({ data: newData })
      
}
    _onSearchButton = () => {
      const { text } = this.state;
      return(
      <SearchBar        
      placeholder="Type Here..."        
      lightTheme        
      round        
      onChangeText={this._searchFilterFunction}
      value={text}
      autoCorrect={false}   
    />    
      )
    } 
      componentDidMount = () => {
      this.props.onFetchNews();
    }
    Title = () => {
  
      return(
        <View style={styles.header}>
        <TouchableOpacity onPress={() => this.props.navigation.openDrawer()} style = {styles.headerListButton}>
          <Icon name = 'list' size = {22}/>
        </TouchableOpacity>
        <View>
          <Text style = {styles.title}>Top Stories</Text>
          <Text style = {styles.title2}>Last updated 35mi...</Text>
        </View>
        <TouchableOpacity onPress={()=>{this._onSearchButton}} 
        style = {styles.headerSearchButton}>
          <Icon name = 'search'  size = {22}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._onPressMoreButton} 
        style = {[styles.headerMoreButton,{paddingRight: 10}]}>
          <Icon name = 'ellipsis-v' size = {22}/> 
        </TouchableOpacity>
        </View>
      );
    }
    _onPressSingleNew=()=>{
      
    }
    _renderItem=({item}) => {
  
      return (
      <TouchableOpacity onPress={this._onPressSingleNew} style={styles.content}>
      <View style={styles.areas}> 
       <Text style = {[styles.contentNearText, {fontWeight: 'bold'}]}>{item.id}</Text>
       <Text style = {styles.contentNearText}>{item.vote}</Text>   
      </View>    
      <View style = {styles.content1}>
        <Text style = {styles.contentText1}>{item.title}</Text>
        <Text style = {styles.contentText2}>{item.link}</Text>
        <Text style = {styles.contentText3}>{item.timestamp}-{item.author}</Text>
      </View>
      </TouchableOpacity>
      )}
 
    Content = () =>{
        return(
          <FlatList
                data={this.state.data}
                keyExtractor={extractKey} 
                renderItem={this._renderItem}             
               />  
        );
      }
  
    render() {
      console.log('texttest',this.state.data)
      return (
        <View style={styles.container}>
          <View style= {styles.top}>
            {this.Title()}
          </View>
          <ScrollView style = {{flex:1}}>
            {this._onSearchButton()} 
            {this.Content()}
            </ScrollView>
        </View>
  
    );
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
      backgroundColor: '#dddcd7',
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
const mapStateToProps = (state) => {
    return {
        news: state.TopStoriesreducer.news
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        onFetchNews:() => {
            dispatch(fetchNewsAction());
        },
        onFetchSingleNew:() => {
            dispatch(fetchSingleNewAction());
        }
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(TopStories)
