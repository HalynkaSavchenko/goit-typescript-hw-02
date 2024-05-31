import axios from 'axios';
import { SearchResponse } from './types'

axios.defaults.baseURL = 'https://api.unsplash.com';

const ACCESS_KEY = '6nDLBNSh_BS4DoWCbvaZUVp9Yf8CTTNWzejqNlnFLac';

export const fetchData = async (searchQuery: string, currentPage: number): Promise<SearchResponse> => {
    const response = await axios.get<SearchResponse>('/search/photos', {
        params: {
            query: searchQuery,
            page: currentPage,
            per_page: 8,
            client_id: ACCESS_KEY,
            orientation: 'landscape',
        }
    });
    
    return response.data
};