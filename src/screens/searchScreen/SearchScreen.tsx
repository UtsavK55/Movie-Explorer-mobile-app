import {useEffect, useState} from 'react';

import BaseContainer from '@components/baseContainer';
import Search from '@components/search';

import usePagination from '@hooks/usePagination';
import {search, searchQuery} from '@network/apiUrls';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [url, setUrl] = useState(search);
  const {
    data,
    refreshing,
    loadingMore,
    handleRefresh,
    loadMore,
    initialLoader,
  } = usePagination(url);

  useEffect(() => {
    // Reset pagination state when search term changes
    if (searchTerm) {
      setUrl(searchQuery(searchTerm));
      handleRefresh();
    }
  }, [searchTerm]);
  return (
    <BaseContainer>
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        data={data}
        refreshing={refreshing}
        loadingMore={loadingMore}
        initialLoader={initialLoader}
        loadMore={loadMore}
        handleRefresh={handleRefresh}
      />
    </BaseContainer>
  );
};

export default SearchScreen;
