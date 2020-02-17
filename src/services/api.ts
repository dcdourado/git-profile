// import { useDispatch } from 'react-redux';
import axios, { AxiosResponse } from 'axios';

import { request, success, failure } from '../store/ducks/loading';
import store from '../store/index';

// const dispatch = useDispatch();

const instance = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Accept: 'application/vnd.github.v3+json',
  },
});

const handleRequest = async (method: () => Promise<AxiosResponse<any>>) => {
  try {
    store.dispatch(request());
    const response = await method();
    store.dispatch(success());
    return response;
  } catch (error) {
    store.dispatch(failure());
    throw new Error(error);
  }
};

const api = {
  get: (url: string) => handleRequest(() => instance.get(url)),
  // post: (url: string) => instance.post(url),
};

export default api;
