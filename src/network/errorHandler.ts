import {AxiosError} from 'axios';

export const ErrorHandler = (error: AxiosError) => {

  if (error === null) throw new Error('Unrecoverable error!! Error is null!');

  if (error.code === 'ERR_NETWORK') {
    console.log('connection problems..');
  }
   else if (error.code === 'ERR_CANCELED') {
    console.log('connection canceled..');
  }

  if (error?.response) {
    const statusCode = error?.response?.status;

    if (statusCode === 404) {
      console.log('The requested resource does not exist or has been deleted');
    } 
    else if (statusCode === 401) {
      console.log('Please login to access this resource');
    }
  } else if (error.request) {
    // The request was made but no response was received
    console.log("in request",error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error', error.message);
  }
};
