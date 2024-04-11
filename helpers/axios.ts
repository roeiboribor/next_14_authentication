import Axios from 'axios';

const axios = Axios.create({
	baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
	withCredentials: true,
});

// export const internalAxios = Axios.create({
// 	baseURL: process.env.NEXTAUTH_URL,
// });

export default axios;
