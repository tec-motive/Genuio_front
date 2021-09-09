export function respond(request) {
	const { body, user } = request;
	const { account, password } = body.user;
	const accountData = [
		{
			username: 'doyun',
			email: 'materokatti@gmail.com',
			account: 'donfamily',
			password: 1234,
			isAdmin: true
		},
		{
			username: 'hyeonjun',
			email: 'xia@gmail.com',
			account: 'xia',
			password: 1234,
			isAdmin: false
		}
	];

	if (body.errors) {
		return { status: 401, body };
	}

	const result = accountData.filter(
		(user) => user.account === account && user.password === +password
	);
	const json = JSON.stringify(result[0]);
	const value = Buffer.from(json).toString('base64');

	request.locals.user = result[0];
	console.log('responsd request:', request);
	body.user = result[0];
	return {
		headers: {
			'set-cookie': `jwt=${value}; Path=/; HttpOnly`
		},
		body
	};
}
