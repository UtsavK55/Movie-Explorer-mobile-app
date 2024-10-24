import {AxiosError} from 'axios';
import {_delete, _get, _post, _put} from './axiosInstance';
import {ErrorHandler} from './errorHandler';

export const fetchData = async (page: number, sortBy: string) => {
  try {
    const response = await _get('/discover/movie', {
      params: {page: `${page}`, sort_by: `${sortBy}`},
    });
    return (
      response?.data.results?.map(
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
      ) || []
    );
  } catch (error) {
    ErrorHandler(error as AxiosError);
  }
};

export const addData = async (newData: []) => {
  try {
    await _post('/data', newData);
  } catch (error) {
    console.error('Error adding data:', error);
    ErrorHandler(error as AxiosError);
  }
};

export const updateData = async (id: string, updatedData: []) => {
  try {
    await _put(`/data/${id}`, updatedData);
  } catch (error) {
    console.error('Error updating data:', error);
    ErrorHandler(error as AxiosError);
  }
};

export const deleteData = async (id: string) => {
  try {
    await _delete(`/data/${id}`);
  } catch (error) {
    console.error('Error deleting data:', error);
    ErrorHandler(error as AxiosError);
  }
};
