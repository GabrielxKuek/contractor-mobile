import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { HeartIcon, MapPinIcon, StarIcon } from '../icons';
import type { Contractor } from '../../data/data';

interface ContractorCardProps {
  item: Contractor;
  onPress?: () => void;
}

const ContractorCard = ({ item, onPress }: ContractorCardProps) => {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((word) => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <Pressable
      onPress={onPress}
      className="flex-1 bg-white rounded-lg overflow-hidden border border-gray-200 active:border-red-500"
    >
      {/* Image */}
      <View className="relative" style={{ aspectRatio: 4 / 3 }}>
        <Image
          source={{ uri: item.image }}
          className="w-full h-full"
          resizeMode="cover"
        />

        {/* Category Badge */}
        <View className="absolute top-2.5 left-2.5">
          <View className="bg-white rounded-full px-2.5 py-1 border border-gray-200">
            <Text className="text-gray-900 text-[10px] font-medium">
              {item.category.name}
            </Text>
          </View>
        </View>

        {/* Save Button */}
        <Pressable
          onPress={(e) => e.stopPropagation()}
          className="absolute top-2.5 right-2.5 flex-row items-center gap-1 bg-white/95 rounded-full px-2 py-1 border border-gray-200"
        >
          <HeartIcon size={12} color="#6B7280" />
          {item.savedCount > 0 && (
            <Text className="text-[10px] font-medium text-gray-500">
              {item.savedCount}
            </Text>
          )}
        </Pressable>
      </View>

      {/* Content */}
      <View className="p-3">
        {/* Rate */}
        <View className="flex-row items-baseline mb-1">
          <Text className="text-base font-bold text-gray-900">
            {item.rate}
          </Text>
          <Text className="text-xs text-gray-500">{item.rateUnit}</Text>
        </View>

        {/* Name */}
        <Text
          className="text-sm font-medium text-gray-900 mb-0.5"
          numberOfLines={1}
        >
          {item.name}
        </Text>

        {/* Title */}
        <Text className="text-xs text-gray-500 mb-2">{item.title}</Text>

        {/* Rating */}
        {item.rating > 0 && (
          <View className="flex-row items-center gap-1 mb-2">
            <StarIcon size={12} color="#FACC15" fill="#FACC15" />
            <Text className="text-xs font-medium text-gray-900">
              {item.rating.toFixed(1)}
            </Text>
            {item.reviewCount > 0 && (
              <Text className="text-xs text-gray-500">
                ({item.reviewCount})
              </Text>
            )}
          </View>
        )}

        {/* Tags */}
        {item.tags.length > 0 && (
          <View className="flex-row flex-wrap gap-1.5 mb-3">
            {item.tags.slice(0, 2).map((tag) => (
              <View
                key={tag.id}
                className="px-2 py-0.5 bg-white rounded-full border border-gray-200"
              >
                <Text className="text-[10px] font-medium text-gray-600">
                  {tag.name}
                </Text>
              </View>
            ))}
            {item.tags.length > 2 && (
              <View className="px-2 py-0.5 bg-white rounded-full border border-gray-200">
                <Text className="text-[10px] font-medium text-gray-400">
                  +{item.tags.length - 2}
                </Text>
              </View>
            )}
          </View>
        )}

        {/* Footer */}
        <View className="flex-row items-center justify-between pt-2.5 border-t border-gray-100">
          {/* User */}
          <View className="flex-row items-center gap-1.5 flex-1">
            <View className="w-5 h-5 rounded-full bg-red-500 items-center justify-center">
              <Text className="text-white text-[8px] font-bold">
                {getInitials(item.user.nickname)}
              </Text>
            </View>
            <Text
              className="text-xs text-gray-600 flex-1"
              numberOfLines={1}
            >
              {item.user.nickname}
            </Text>
          </View>

          {/* Location */}
          <View className="flex-row items-center gap-0.5">
            <MapPinIcon size={10} color="#9CA3AF" />
            <Text className="text-[10px] text-gray-400">{item.location}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default ContractorCard;
