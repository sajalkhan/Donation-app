import React from 'react';
import { View } from 'react-native';
import Search from '../Search/Search';

import style from './style';

const SearchSection: React.FC = () => (
  <View style={style.searchBox}>
    <Search />
  </View>
);

export default SearchSection;
