export function respond(body) {
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
	const { account, password } = body.user;

	if (body.errors) {
		return { status: 401, body };
	}
	console.log('body', body);
	const json = JSON.stringify(body.user);
	const value = Buffer.from(json).toString('base64');

	const result = accountData.filter(
		(user) => user.account === account && user.password === +password
	);

	body.user = result[0];

	return {
		headers: {
			'set-cookie': `jwt=${value}; Path=/; HttpOnly`
		},
		body
	};
}
