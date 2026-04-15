import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  StarIcon,
  MapPinIcon,
  HeartIcon,
  ClockIcon,
  ChevronRightIcon,
  MessageCircleIcon,
} from '../components/icons';
import { CONTRACTORS } from '../data/data';

interface ContractorDetailProps {
  route: { params: { contractorId: string } };
  navigation: any;
}

export default function ContractorDetail({ route, navigation }: ContractorDetailProps) {
  const contractor = CONTRACTORS.find((c) => c.id === route.params.contractorId);

  if (!contractor) {
    return (
      <SafeAreaView className="flex-1 bg-white items-center justify-center">
        <Text className="text-gray-500">Contractor not found</Text>
      </SafeAreaView>
    );
  }

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((word) => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['bottom']}>
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Hero Image */}
        <View className="relative" style={{ aspectRatio: 16 / 9 }}>
          <Image
            source={{ uri: contractor.image }}
            className="w-full h-full"
            resizeMode="cover"
          />
          <View className="absolute top-0 left-0 right-0 bottom-0 bg-black/20" />

          {/* Category Badge */}
          <View className="absolute bottom-3 left-4">
            <View className="bg-white rounded-full px-3 py-1.5 border border-gray-200">
              <Text className="text-gray-900 text-xs font-medium">
                {contractor.category.name}
              </Text>
            </View>
          </View>
        </View>

        {/* Content */}
        <View className="px-4 pt-4">
          {/* Header */}
          <View className="flex-row items-start justify-between mb-1">
            <View className="flex-1 mr-3">
              <Text className="text-xl font-semibold text-gray-900 mb-0.5">
                {contractor.name}
              </Text>
              <Text className="text-sm text-gray-500">{contractor.title}</Text>
            </View>
            <Pressable className="p-2 border border-gray-200 rounded-full">
              <HeartIcon size={18} color="#6B7280" />
            </Pressable>
          </View>

          {/* Rate */}
          <View className="flex-row items-baseline mt-3 mb-4">
            <Text className="text-2xl font-bold text-gray-900">
              {contractor.rate}
            </Text>
            <Text className="text-sm text-gray-500 ml-0.5">
              {contractor.rateUnit}
            </Text>
          </View>

          {/* Stats Row */}
          <View className="flex-row items-center gap-4 mb-5 pb-5 border-b border-gray-100">
            <View className="flex-row items-center gap-1">
              <StarIcon size={14} color="#FACC15" fill="#FACC15" />
              <Text className="text-sm font-medium text-gray-900">
                {contractor.rating.toFixed(1)}
              </Text>
              <Text className="text-sm text-gray-500">
                ({contractor.reviewCount})
              </Text>
            </View>
            <View className="flex-row items-center gap-1">
              <MapPinIcon size={14} color="#9CA3AF" />
              <Text className="text-sm text-gray-600">{contractor.location}</Text>
            </View>
            <View className="flex-row items-center gap-1">
              <ClockIcon size={14} color="#9CA3AF" />
              <Text className="text-sm text-gray-600">{contractor.postedDate}</Text>
            </View>
          </View>

          {/* Quick Stats */}
          <View className="flex-row mb-5 gap-3">
            <View className="flex-1 bg-gray-50 rounded-lg p-3 items-center">
              <Text className="text-lg font-bold text-gray-900">
                {contractor.yearsExp}
              </Text>
              <Text className="text-xs text-gray-500 mt-0.5">Years Exp</Text>
            </View>
            <View className="flex-1 bg-gray-50 rounded-lg p-3 items-center">
              <Text className="text-lg font-bold text-gray-900">
                {contractor.completedJobs}
              </Text>
              <Text className="text-xs text-gray-500 mt-0.5">Jobs Done</Text>
            </View>
            <View className="flex-1 bg-gray-50 rounded-lg p-3 items-center">
              <Text className="text-lg font-bold text-gray-900">
                {contractor.savedCount}
              </Text>
              <Text className="text-xs text-gray-500 mt-0.5">Saved</Text>
            </View>
          </View>

          {/* About */}
          <View className="mb-5">
            <Text className="text-base font-semibold text-gray-900 mb-2">
              About
            </Text>
            <Text className="text-sm text-gray-600 leading-relaxed">
              {contractor.description}
            </Text>
          </View>

          {/* Tags */}
          {contractor.tags.length > 0 && (
            <View className="mb-5">
              <Text className="text-base font-semibold text-gray-900 mb-2">
                Services
              </Text>
              <View className="flex-row flex-wrap gap-2">
                {contractor.tags.map((tag) => (
                  <View
                    key={tag.id}
                    className="px-3 py-1.5 bg-white rounded-full border border-gray-200"
                  >
                    <Text className="text-xs font-medium text-gray-600">
                      {tag.name}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          )}

          {/* Provider Info */}
          <View className="mb-6 pb-5 border-t border-gray-100 pt-5">
            <Pressable className="flex-row items-center">
              <View className="w-10 h-10 rounded-full bg-red-500 items-center justify-center">
                <Text className="text-white text-sm font-bold">
                  {getInitials(contractor.user.nickname)}
                </Text>
              </View>
              <View className="flex-1 ml-3">
                <Text className="text-sm font-medium text-gray-900">
                  {contractor.user.nickname}
                </Text>
                <Text className="text-xs text-gray-500">View Profile</Text>
              </View>
              <ChevronRightIcon size={16} color="#D1D5DB" />
            </Pressable>
          </View>
        </View>
      </ScrollView>

      {/* Bottom CTA */}
      <View className="px-4 py-3 border-t border-gray-100 flex-row gap-3">
        <Pressable className="flex-1 flex-row items-center justify-center py-3 border border-gray-200 rounded-full gap-2">
          <MessageCircleIcon size={16} color="#EF4444" />
          <Text className="text-sm font-medium text-gray-700">Message</Text>
        </Pressable>
        <Pressable className="flex-1 bg-red-500 rounded-full py-3 items-center">
          <Text className="text-white text-sm font-semibold">Hire Now</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
