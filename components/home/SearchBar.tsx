import React, { useState } from 'react';
import { View, TextInput, Pressable } from 'react-native';
import { SearchIcon, FilterIcon } from '../icons';

const SearchBar = () => {
  const [focused, setFocused] = useState(false);

  return (
    <View className="px-4 pt-2 pb-3 bg-white">
      <View
        className={`flex-row items-center rounded-full border px-4 py-2.5 ${
          focused ? 'border-red-500' : 'border-gray-200'
        }`}
      >
        <SearchIcon size={18} color="#9CA3AF" />
        <TextInput
          placeholder="Search listings..."
          placeholderTextColor="#9CA3AF"
          className="flex-1 ml-3 text-gray-700 text-base"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        <Pressable className="ml-2 p-1.5 bg-red-500 rounded-full">
          <FilterIcon size={14} color="#FFFFFF" />
        </Pressable>
      </View>
    </View>
  );
};

export default SearchBar;
