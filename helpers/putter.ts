// { internalAxios }
import axios from './axios';

// export const putter = (
//   endpoint: string,
//   params: any = undefined,
//   isInternal: boolean = true
// ) =>
//   isInternal
//     ? internalAxios.put(endpoint, params)
//     : axios.put(endpoint, params);
// export const deleter = (
//   endpoint: string,
//   params: any = undefined,
//   isInternal: boolean = true
// ) =>
//   isInternal
//     ? internalAxios.delete(endpoint, params)
//     : axios.delete(endpoint, params);
// export function getter(
//   endpoint: string,
//   params: any = undefined,
//   isInternal: boolean = false,
//   accessToken: string | undefined = undefined
// ) {
//   return isInternal
//     ? internalAxios
//         .get(endpoint, {
//           params,
//           headers: accessToken
//             ? {
//                 Authorization: `Bearer ${accessToken}`,
//               }
//             : undefined,
//         })
//         .then((res) => res.data)
//     : axios
//         .get(endpoint, {
//           params,
//           headers: accessToken
//             ? {
//                 Authorization: `Bearer ${accessToken}`,
//               }
//             : undefined,
//         })
//         .then((res) => res.data);
// }

export const poster = (endpoint: string, params: any = undefined) =>
	axios.post(endpoint, params, {
		headers: {
			'Content-Type': 'application/json',
		},
	});
