import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import TabNavigator from './tab-navigator';
import {
  HomeIcon,
  ListIcon,
  BookmarkIcon,
  SettingsIcon,
  HelpCircleIcon,
  XIcon,
} from '../components/icons';

function CustomDrawerContent(props: any) {
  const { navigation } = props;

  const menuItems = [
    { label: 'Home', icon: HomeIcon, route: 'Tabs' },
    { label: 'My Listings', icon: ListIcon, route: 'Tabs' },
    { label: 'Saved Items', icon: BookmarkIcon, route: 'Tabs' },
    { label: 'Settings', icon: SettingsIcon, route: 'Tabs' },
    { label: 'Help', icon: HelpCircleIcon, route: 'Tabs' },
  ];

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      {/* Header */}
      <View className="px-4 pt-2 pb-6 flex-row items-center justify-between">
        <Text className="text-lg font-semibold text-gray-900">Menu</Text>
        <Pressable
          onPress={() => navigation.closeDrawer()}
          className="p-1"
        >
          <XIcon size={20} color="#6B7280" />
        </Pressable>
      </View>

      {/* Menu Items */}
      <View className="flex-1">
        {menuItems.map((item, index) => {
          const IconComponent = item.icon;
          const isActive = index === 0;
          return (
            <Pressable
              key={item.label}
              onPress={() => navigation.navigate(item.route)}
              className={`flex-row items-center mx-3 px-3 py-3 rounded-lg mb-1 ${
                isActive ? 'bg-red-50' : ''
              }`}
            >
              <IconComponent
                size={20}
                color={isActive ? '#EF4444' : '#6B7280'}
              />
              <Text
                className={`ml-3 text-sm font-medium ${
                  isActive ? 'text-red-500' : 'text-gray-700'
                }`}
              >
                {item.label}
              </Text>
            </Pressable>
          );
        })}
      </View>

      {/* Footer */}
      <View className="px-4 py-4 border-t border-gray-100">
        <Text className="text-xs text-gray-400">Marketplace v1.0</Text>
      </View>
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator({
  drawerContent: (props) => <CustomDrawerContent {...props} />,
  screenOptions: {
    headerShown: false,
    drawerStyle: {
      backgroundColor: '#FFFFFF',
      width: 280,
    },
  },
  screens: {
    Tabs: {
      screen: TabNavigator,
      options: {
        title: 'Home',
      },
    },
  },
});

export default Drawer;
