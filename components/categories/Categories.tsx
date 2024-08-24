import { StyleSheet, Text, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import EventCategoryButton from './CategoryButton';


const Categories = () => {
  const [pressed, setPressed] = React.useState<string | null>(null);
  const [categories, setCategories] = React.useState([]);

  useEffect(() => {
    const data = fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(json => setCategories(json))
  })

  const handlePress = (name: string) => {
    setPressed(prev => (prev === name ? null : name));
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="flex flex-row w-full gap-0"
    >
      {categories?.map(category => (
        <EventCategoryButton
          key={category}
          name={(category as string).toUpperCase()}
          onPress={() => handlePress(category)}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
