import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';

const SearchInput = ({ onPress }: { onPress?: () => void }) => {
  const [searchText, setSearchText] = useState('');

  const clearText = () => {
    setSearchText('');
  };

  return (
    <View className='flex flex-row justify-center w-full h-14'>
      <TextInput
        className='w-full bg-gray-300 px-20 rounded-2xl'
        autoComplete='additional-name'
        autoCapitalize='words'
        clearButtonMode='while-editing'
        placeholder='Search the entire shop'
        inputMode='search'
        value={searchText}
        onChangeText={text => setSearchText(text)}
        onPress={onPress}
      />
      {searchText.length > 0 && (        
      <TouchableOpacity onPress={clearText} className='absolute right-5 top-4'>
        <AntDesign name='close' size={20} color='#fff' />
      </TouchableOpacity>
      )}
      <AntDesign
        name='search1'
        size={20}
        color='#fff'
        style={{ position: 'absolute', left: 14, top: 14 }}
      />
    </View>
  );
};

export default SearchInput
