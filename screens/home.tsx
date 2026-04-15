import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../components/home/SearchBar';
import CategoryPills from '../components/home/CategoryPills';
import ListingsGrid from '../components/home/ListingsGrid';

interface HomeProps {
  navigation: any;
}

export default function Home({ navigation }: HomeProps) {
  const handleContractorPress = (id: string) => {
    navigation.navigate('ContractorDetail', { contractorId: id });
  };

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      <ScrollView className="flex-1 bg-gray-50" showsVerticalScrollIndicator={false}>
        <SearchBar />
        <CategoryPills />
        <ListingsGrid onContractorPress={handleContractorPress} />
      </ScrollView>
    </SafeAreaView>
  );
}
