import axios from 'axios'

const KEY = 'AIzaSyCrSuHI7SukfTu0Vo_SU1PVUrHDcGyHEPk';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})