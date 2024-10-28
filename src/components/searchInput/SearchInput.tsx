import {TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {colors} from '@theme/themes';

import {styles} from './styles';

const SearchInput = ({
  searchTerm,
  setSearchTerm,
  placeHolder,
}: SearchInputProps) => {
    
  return (
    <View style={styles.searchContainer}>
      <Icon
        name="search"
        size={16}
        color={colors.textSecondary}
        style={styles.searchIcon}
      />
      <TextInput
        style={styles.searchInput}
        placeholder={placeHolder}
        placeholderTextColor={colors.textSecondary}
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
    </View>
  );
};

export default SearchInput;
