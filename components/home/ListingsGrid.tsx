import React from 'react';
import { View, Text, Pressable, Dimensions } from 'react-native';
import ContractorCard from './ItemCard';
import { CONTRACTORS } from '../../data/data';

const { width } = Dimensions.get('window');
const CARD_GAP = 12;
const HORIZONTAL_PADDING = 16;
const CARD_WIDTH = (width - HORIZONTAL_PADDING * 2 - CARD_GAP) / 2;

interface ListingsGridProps {
  onContractorPress?: (id: string) => void;
}

const ListingsGrid = ({ onContractorPress }: ListingsGridProps) => {
  return (
    <View className="px-4 pt-4 pb-6">
      {/* Section Header */}
      <View className="flex-row items-center justify-between mb-4">
        <Text className="text-lg font-semibold text-gray-900">
          Top Contractors
        </Text>
        <Pressable>
          <Text className="text-sm font-medium text-red-500">See All</Text>
        </Pressable>
      </View>

      {/* Grid */}
      <View className="flex-row flex-wrap" style={{ gap: CARD_GAP }}>
        {CONTRACTORS.map((item) => (
          <View key={item.id} style={{ width: CARD_WIDTH }}>
            <ContractorCard
              item={item}
              onPress={() => onContractorPress?.(item.id)}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

export default ListingsGrid;
