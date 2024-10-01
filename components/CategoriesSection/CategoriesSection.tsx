import React from 'react';
import { View, FlatList } from 'react-native';
import Header from '../../components/Header/Header';
import Tab from '../../components/Tab/Tab';
import style from './style';

interface Category {
  categoryId: number;
  name: string;
}

interface CategoriesSectionProps {
  categories: Category[];
  selectedCategory: number;
  onCategorySelect: (categoryId: number) => void;
}

const MemoizedTab = React.memo(Tab);

const CategoriesSection: React.FC<CategoriesSectionProps> = ({ categories, selectedCategory, onCategorySelect }) => {
  const renderCategoryItem = ({ item }: { item: Category }) => (
    <MemoizedTab
      tabId={item.categoryId}
      title={item.name}
      onPress={() => onCategorySelect(item.categoryId)}
      isInactive={item.categoryId !== selectedCategory}
    />
  );

  return (
    <View>
      <View style={style.categoryHeader}>
        <Header title="Select Category" type="h2" />
      </View>
      <View style={style.categories}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={item => item.categoryId.toString()}
        />
      </View>
    </View>
  );
};

export default CategoriesSection;
