import React, { useState } from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import { CATEGORIES } from '../../data/data';

const CategoryPills = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const allCategories = [{ id: 0, name: 'All', icon: '' }, ...CATEGORIES];

  return (
    <View className="py-3 bg-white">
      <FlatList
        data={allCategories}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16, gap: 8 }}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          const isActive = activeId === item.id || (activeId === null && item.id === 0);
          return (
            <Pressable
              onPress={() => setActiveId(item.id === 0 ? null : item.id)}
              className={`px-4 py-2 rounded-full border ${
                isActive
                  ? 'bg-white border-red-500'
                  : 'bg-white border-gray-200'
              }`}
            >
              <Text
                className={`text-sm font-medium ${
                  isActive ? 'text-red-500' : 'text-gray-600'
                }`}
              >
                {item.name}
              </Text>
            </Pressable>
          );
        }}
      />
    </View>
  );
};

export default CategoryPills;
