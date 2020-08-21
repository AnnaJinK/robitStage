import axios from 'axios';

export const checkIndexExists = (index) => axios.get('/api/toy/exists/index/' + index);
export const toyRegister = ({ active, index, name, job, descsum, mechanism, image1, image2, image3, linktostore, linktovideo, toydesc }) => axios.post('/api/toy/register', { active, index, name, job, descsum, mechanism, image1, image2, image3, linktostore, linktovideo, toydesc });
export const sortById = () => axios.get('/api/toy/list');
export const findByIndex = (index) => axios.get('/api/toy/get/index/' + index);
export const sortByIndex = () => axios.get('/api/toy/indexlist');
export const toyUpdate = (body) => axios.patch(`/api/toy/${body._id}?index=${body.index}`, body);
// export const toyUpdate = (body) => axios.patch(`/api/toy/${body.index}`, body);
export const toyDelete = (id) => axios.delete(`/api/toy/delete/${id}`);
