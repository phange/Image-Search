import axios from 'axios';

// Axios is a promise-based HTTP library that lets developers make 
// requests to either their own or a third-party server to fetch data.
const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID k4kYc2jnnwFhHLcGwieiaSetjrmJxma1a3VH2ivohDw',
        },
        params: {
            query: term,    
        },
    });
    
    return response.data.results;
};

export default searchImages;