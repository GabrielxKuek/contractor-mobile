import React from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronRightIcon } from '../components/icons';
import { MESSAGES } from '../data/data';

export default function Messages() {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((word) => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      {/* Header */}
      <View className="px-4 pt-4 pb-3 border-b border-gray-100">
        <Text className="text-2xl font-semibold text-gray-900">Messages</Text>
      </View>

      {/* Message List */}
      <FlatList
        data={MESSAGES}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 4 }}
        renderItem={({ item }) => (
          <Pressable className="flex-row items-center px-4 py-3.5 border-b border-gray-50">
            {/* Avatar */}
            <View className="relative">
              <View className="w-12 h-12 rounded-full bg-red-500 items-center justify-center">
                <Text className="text-white text-sm font-bold">
                  {getInitials(item.user.nickname)}
                </Text>
              </View>
              {/* Unread Indicator */}
              {item.unreadCount > 0 && (
                <View className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full bg-red-500 border-2 border-white items-center justify-center">
                  <Text className="text-white text-[9px] font-bold">
                    {item.unreadCount}
                  </Text>
                </View>
              )}
            </View>

            {/* Content */}
            <View className="flex-1 ml-3">
              <View className="flex-row items-center justify-between mb-0.5">
                <Text
                  className={`text-sm ${
                    item.unreadCount > 0
                      ? 'font-semibold text-gray-900'
                      : 'font-medium text-gray-700'
                  }`}
                  numberOfLines={1}
                >
                  {item.user.nickname}
                </Text>
                <Text className="text-xs text-gray-400 ml-2">
                  {item.timestamp}
                </Text>
              </View>

              <Text className="text-xs text-gray-500 mb-1" numberOfLines={1}>
                {item.contextTitle}
              </Text>

              <Text
                className={`text-sm ${
                  item.unreadCount > 0 ? 'text-gray-700' : 'text-gray-500'
                }`}
                numberOfLines={1}
              >
                {item.lastMessage}
              </Text>
            </View>

            {/* Arrow */}
            <ChevronRightIcon size={16} color="#D1D5DB" />
          </Pressable>
        )}
        ListEmptyComponent={
          <View className="flex-1 items-center justify-center pt-20">
            <Text className="text-gray-400 text-base">No messages yet</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}
