import Categories from '@/components/categories/Categories';
import SearchInput from '@/components/inputs/SearchInput';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex place-self-center bg-red-500 h-full w-screen">
      <View className="w-[90%] h-full justify-start self-center pt-5">
        <SearchInput />
        <View className="mt-5">
          <Text className="text-3xl font-bold">Categories</Text>
          <Categories />
        </View>
        <View>
          <Text className="text-3xl font-bold">Products</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}