import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

interface EventCategoryButtonProps {
  name: string;
  onPress: () => void;
}
const CategoryButton: React.FC<EventCategoryButtonProps> = ({
  name,
  onPress,
}) => {
  return (
    <View
      className='flex flex-col items-center p-5'
    >
      <Pressable
        className='flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600'
        onPress={onPress}
      >
      </Pressable>
      <Text className='mt-2 text-sm'>{name}</Text>
    </View>
  );
};

export default CategoryButton;

