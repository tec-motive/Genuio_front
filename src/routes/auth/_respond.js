export function respond(body) {
	if (body.errors) {
		return { status: 401, body };
	}
	console.log('body', body);
	const json = JSON.stringify(body.user);
	const value = Buffer.from(json).toString('base64');

	//아이디 패스워드를 여기서 확인해야 하지만, 확인 없이 그냥 로그인 잘 됐다고 가정하고 body를 그대로 다시 보내준다.
	return {
		headers: {
			'set-cookie': `jwt=${value}; Path=/; HttpOnly`
		},
		body
	};
}
