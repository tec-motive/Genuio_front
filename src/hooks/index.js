import * as cookie from 'cookie';

export async function handle({ request, resolve }) {
	console.log('request222:', request.locals);
	const cookies = cookie.parse(request.headers.cookie || '');
	const jwt = cookies.jwt && Buffer.from(cookies.jwt, 'base64').toString('utf-8');
	request.locals.user = jwt ? JSON.parse(jwt) : null;
	// console.log('handle() user: ', request.locals.user);
	console.log('request locals:', request.locals);
	/*
  if (!request.locals.user && request.path != '/login') {
    return {
      headers: { Location: '/login' },
      status: 302
    }
  }
 */
	return await resolve(request);
}

export function getSession({ locals }) {
	console.log('local user: ', locals);
	return {
		user: locals.user && {
			username: locals.user.username,
			email: locals.user.email,
			account: locals.user.account,
			password: locals.user.password,
			isAdmin: locals.user.isAdmin
		}
	};
}
