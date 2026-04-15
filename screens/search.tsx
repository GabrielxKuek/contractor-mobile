import React, { useState, useMemo } from 'react';
import { View, Text, TextInput, FlatList, Pressable, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SearchIcon, XIcon } from '../components/icons';
import ContractorCard from '../components/home/ItemCard';
import { CONTRACTORS, CATEGORIES } from '../data/data';

const { width } = Dimensions.get('window');
const CARD_GAP = 12;
const HORIZONTAL_PADDING = 16;
const CARD_WIDTH = (width - HORIZONTAL_PADDING * 2 - CARD_GAP) / 2;

interface SearchScreenProps {
  navigation: any;
}

export default function Search({ navigation }: SearchScreenProps) {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [focused, setFocused] = useState(false);

  const filtered = useMemo(() => {
    let results = CONTRACTORS;
    if (activeCategory !== null) {
      results = results.filter((c) => c.category.id === activeCategory);
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      results = results.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.title.toLowerCase().includes(q) ||
          c.category.name.toLowerCase().includes(q) ||
          c.tags.some((t) => t.name.toLowerCase().includes(q)) ||
          c.location.toLowerCase().includes(q)
      );
    }
    return results;
  }, [query, activeCategory]);

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      {/* Search Bar */}
      <View className="px-4 pt-2 pb-3">
        <View
          className={`flex-row items-center rounded-full border px-4 py-2.5 ${
            focused ? 'border-red-500' : 'border-gray-200'
          }`}
        >
          <SearchIcon size={18} color="#9CA3AF" />
          <TextInput
            placeholder="Search contractors, services..."
            placeholderTextColor="#9CA3AF"
            value={query}
            onChangeText={setQuery}
            className="flex-1 ml-3 text-gray-700 text-base"
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            autoFocus
          />
          {query.length > 0 && (
            <Pressable onPress={() => setQuery('')} className="ml-2 p-1">
              <XIcon size={16} color="#9CA3AF" />
            </Pressable>
          )}
        </View>
      </View>

      {/* Category Filters */}
      <FlatList
        data={[{ id: 0, name: 'All' }, ...CATEGORIES]}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16, gap: 8, paddingBottom: 12 }}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          const isActive =
            (activeCategory === null && item.id === 0) || activeCategory === item.id;
          return (
            <Pressable
              onPress={() => setActiveCategory(item.id === 0 ? null : item.id)}
              className={`px-4 py-2 rounded-full border ${
                isActive ? 'bg-white border-red-500' : 'bg-white border-gray-200'
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

      {/* Results */}
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ gap: CARD_GAP, paddingHorizontal: HORIZONTAL_PADDING }}
        contentContainerStyle={{ gap: CARD_GAP, paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={{ width: CARD_WIDTH }}>
            <ContractorCard
              item={item}
              onPress={() => navigation.navigate('ContractorDetail', { contractorId: item.id })}
            />
          </View>
        )}
        ListEmptyComponent={
          <View className="items-center pt-20">
            <Text className="text-gray-400 text-sm">No contractors found</Text>
            <Text className="text-gray-300 text-xs mt-1">
              Try a different search term
            </Text>
          </View>
        }
        ListHeaderComponent={
          <View className="px-4 pb-2">
            <Text className="text-sm text-gray-500">
              {filtered.length} contractor{filtered.length !== 1 ? 's' : ''} found
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}
