import {useState, useEffect, useCallback} from 'react';
import {fetchData} from '@network/apiMethods';

const initialData = {
  data: [],
  totalResult: 0,
  pageNo: 1,
  totalPages: 1,
};

const usePagination = (url: string, sortBy?: string) => {

  const [initialLoader, setInitialLoader] = useState(true);
  const [data, setData] = useState<MovieCardDataArr>(initialData.data);
  const [totalResult, setTotalResult] = useState(initialData.totalResult);
  const [pageNo, setPageNo] = useState(initialData.pageNo);
  const [totalPages, setTotalPages] = useState(initialData.totalPages);
  const [refreshing, setRefreshing] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  const getData = async (page: number) => {
    try {
      const movies = await fetchData(url, {
        params: {
          page: page,
          ...(sortBy && {sort_by: sortBy}),
        },
      });

      const result = {
        data:
          movies?.results?.map(
            ({
              id,
              title,
              poster_path,
              overview,
              vote_average,
              vote_count,
              release_date,
            }: MovieCardData) => ({
              id,
              title,
              poster_path,
              overview,
              vote_average,
              vote_count,
              release_date,
            }),
          ) || [],
        totalResult: movies?.total_result,
        pageNo: movies?.page,
        totalPages: movies?.total_pages,
      };

      if (page === 1) {
        setData(result.data);
      } else {
        setData([...data, ...result.data]);
      }
      setTotalResult(result.totalResult);
      setPageNo(result.pageNo);
      setTotalPages(result.totalPages);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setRefreshing(false);
      setLoadingMore(false);
      setInitialLoader(false);
    }
  };

  useEffect(() => {
    setPageNo(1);
    setInitialLoader(true);
    getData(1);
  }, [url]);

  const handleRefresh = useCallback(() => {
    setRefreshing(true);
    getData(1);
  }, []);

  const loadMore = () => {
    if (!loadingMore) {
      if (pageNo < totalPages) {
        setLoadingMore(true);
        const nextPage = pageNo + 1;
        getData(nextPage);
      }
    }
  };

  return {
    data,
    totalResult,
    refreshing,
    loadingMore,
    handleRefresh,
    loadMore,
    initialLoader,
  };
};

export default usePagination;
