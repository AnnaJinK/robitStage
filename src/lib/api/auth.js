import axios from 'axios';

export const login = ({ id, password }) => axios.post('/api/auth/login', { id, password })

export const checkStatus = () => axios.get('/api/auth/check');
export const logout = () => axios.post('/api/auth/logout');