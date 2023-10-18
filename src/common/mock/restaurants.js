import fetchMock from 'fetch-mock';
import { restaurantsData } from './data/restaurants-data';

fetchMock.get('/api/restaurants', restaurantsData);
