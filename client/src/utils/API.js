import axios from 'axios';

export default {
  getUserInfo: id => {
    return axios.get(`/api/user/${id}`);
  },
  allEvents: () => {
    return axios.get('/api/event');
  }

};
