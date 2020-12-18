import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID OZrOd1BBQfpU5JNc1xyRwUZ-eFmZp2NGnxsYUYitIQE',
  },
});
