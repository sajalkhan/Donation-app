import React, { useRef, useState } from 'react';
import { Pressable, TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { scaleFontSize } from '../../assets/styles/scaling';
import style from './style';

interface SearchProps {
  onSearch: (searchValue: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const textInputRef = useRef<TextInput>(null);
  const [search, setSearch] = useState<string>('');

  const handleFocus = () => {
    textInputRef.current?.focus();
  };

  const handleSearch = (searchValue: string) => {
    setSearch(searchValue);
    onSearch(searchValue);
  };

  return (
    <Pressable style={style.searchInputContainer} onPress={handleFocus}>
      <FontAwesomeIcon icon={faSearch} color={'#25C0FF'} size={scaleFontSize(22)} />
      <TextInput ref={textInputRef} style={style.searchInput} value={search} onChangeText={handleSearch} />
    </Pressable>
  );
};

export default Search;
