import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Search from '../screens/search';
import Messages from '../screens/messages';
import Auth from '../screens/auth';
import { HomeIcon, SearchIcon, MessageCircleIcon, UserIcon } from '../components/icons';

const Tab = createBottomTabNavigator({
  screenOptions: {
    tabBarActiveTintColor: '#EF4444',
    tabBarInactiveTintColor: '#9CA3AF',
    headerShown: false,
    tabBarStyle: {
      borderTopWidth: 1,
      borderTopColor: '#F3F4F6',
      backgroundColor: '#FFFFFF',
      paddingBottom: 4,
      paddingTop: 4,
      height: 56,
    },
    tabBarLabelStyle: {
      fontSize: 11,
      fontWeight: '500' as const,
    },
  },
  screens: {
    Home: {
      screen: Home,
      options: {
        title: 'Home',
        tabBarIcon: ({ color }: { color: string }) => <HomeIcon size={22} color={color} />,
      },
    },
    Search: {
      screen: Search,
      options: {
        title: 'Search',
        tabBarIcon: ({ color }: { color: string }) => <SearchIcon size={22} color={color} />,
      },
    },
    Messages: {
      screen: Messages,
      options: {
        title: 'Messages',
        tabBarIcon: ({ color }: { color: string }) => <MessageCircleIcon size={22} color={color} />,
      },
    },
    Account: {
      screen: Auth,
      options: {
        title: 'Account',
        tabBarIcon: ({ color }: { color: string }) => <UserIcon size={22} color={color} />,
      },
    },
  },
});

export default Tab;
