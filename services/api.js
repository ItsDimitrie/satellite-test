import axios from 'axios';

const API_BASE = 'https://api.le-systeme-solaire.net/rest/bodies/';

export const getSatelliteData = (id) => {
  return axios.get(`${API_BASE}${id}`);
};

