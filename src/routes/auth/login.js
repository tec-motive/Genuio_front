import { respond } from './_respond.js';

export async function post(request) {
	/*
  const body = await fetch('localhost:3000/auth', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: request.body.email,
      password: request.body.password,
    })
  });
  const res = await body.json();
  */
	/*
  const res = {
    body: {
      email: request.body.user.email,
      password: request.body.user.password,
    }
  }
 */
	// const body = request.body;
	console.log('request:', request);

	return respond(request);
}
