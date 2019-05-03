import React, { Component } from "react";
import {DrawerNavigator, createDrawerNavigator,createAppContainer,createStackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/MaterialIcons';

import Login from '../scLogin/components/Logincomponent';
import TopStories from '../scTopStories/components/TopStoriescomponent';
import CatchUp from '../scCatchUp/components/CatchUpcomponent';
import Feedback from '../scFeedback/components/Feedbackcomponent';
import MoreSections from '../scMoreSections/components/MoreSectionscomponent';
import MyProfile from '../scMyProfile/components/MyProfilecomponent';
import NewStories from '../scNewStories/components/NewStoriescomponent';
import SavedStories from '../scSavedStories/components/SavedStoriescomponent';
import Settings from '../scSettings/components/Settingscomponent';
import SubmitToAdmin from '../scSubmitToAdmin/components/SubmitToAdmincomponent';


const MyDrawerNavigator = createDrawerNavigator({
  TopStories: {
    screen: TopStories, 
    navigationOptions: {
      drawerLabel: 'Top Stories',
      drawerIcon:({tintColor})=>(<Icon name = 'signal' size = {24}/>)
      }, 
  },  
  Login: {
      screen: Login,
      navigationOptions: {
      drawerLabel: 'Login',
      drawerIcon:({tintColor})=>(<Icon name = 'fighter-jet' size = {24}/>)
      },
    },
  
  

  CatchUp: {
    screen: CatchUp,
    navigationOptions: {
      drawerLabel: 'Catch Up',
      drawerIcon:({tintColor})=>(<Icon name = 'repeat' size = {24}/>)
    },
  },
  NewStories: {
    screen: NewStories,
    navigationOptions: {
      drawerLabel: 'New Stories',
      drawerIcon:({tintColor})=>(<Icon name = 'html5' size = {24}/>)
      },
  },
  MoreSections: {
    screen: MoreSections,
    navigationOptions: {
      drawerLabel: 'More Sections'
      // , drawerIcon:({tintColor})=>(<Icon name = '' size = {24}/>)
      },
  },
  SavedStories: {
    screen: SavedStories,
    navigationOptions: {
      drawerLabel: 'Saved Stories',
      drawerIcon:({tintColor})=>(<Icon name = 'save' size = {24}/>)
      },
  },
  MyProfile: {
    screen: MyProfile,
    navigationOptions: {
      drawerLabel: 'My Profile',
      drawerIcon:({tintColor})=>(<Icon name = 'child' size = {24}/>)
      },
  },
  SubmitToAdmin: {
    screen: SubmitToAdmin,
    navigationOptions: {
      drawerLabel: 'Submit To Admin',
      drawerIcon:({tintColor})=>(<Icon name = 'plus' size = {24}/>)
      },
  },
  Feedback: {
    screen: Feedback,
    navigationOptions: {
      drawerLabel: 'Feedback',
      drawerIcon:({tintColor})=>(<Icons name = 'feedback' size = {24}/>)
      },
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      drawerLabel: 'Settings',
      drawerIcon:({tintColor})=>(<Icons name = 'settings' size = {24}/>)
      },
  },
});
export default createAppContainer(MyDrawerNavigator);