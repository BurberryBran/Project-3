import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: '5',
        key: 'AIzaSyAv5fCHtDFZ6Pf6r4OdwGqVT9gVjgsUPnM',


    }
});