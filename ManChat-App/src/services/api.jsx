import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.51:3001',
});

export default api;

// http://10.0.2.2:3001/users       ===>    Android Emulator
// http://192.168.0.51:3001/users   ===>    Mobile ADB