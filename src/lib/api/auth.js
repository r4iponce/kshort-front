import { goto } from '$app/navigation';

export function Authenticate(email, password) {
	getJWT(email, password).then((token) => storeJWT(token)); // TODO error management
	goto('/');
}

async function getJWT(email, password) {
	try {
		const response = await fetch('http://localhost:8080/api/v1/auth/tokens', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email,
				password
			})
		});

		if (!response.ok) {
			if (response.status == 401) {
				throw 'Bad credential';
			} else {
				throw new Error(`Bad response status: ${response.status}`);
			}
		}

		const data = await response.json();

		return data.token;
	} catch (error) {
		console.error(error.message);
	}
}

function storeJWT(token) {
	document.cookie = `KSHORTJWT=${token}; max-age=86400; path=/; secure=false`;
}

export function ReadJWTStore() {
	const token = document.cookie
		.split('; ')
		.find((row) => row.startsWith('KSHORTJWT='))
		?.split('=')[1];

	return token;
}

export async function GetUserInfo() {
	let token = ReadJWTStore();

	try {
		const response = await fetch('http://localhost:8080/api/v1/users/self', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`
			}
		});

		if (response.status == 401) {
			goto('/login');
		}

		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}

		const data = await response.json();

		return data;
	} catch (error) {
		console.error(error.message);
		throw('Cannot fetch user information');
	}
}

export function IsLogged() {
	const token = document.cookie
		.split('; ')
		.find((row) => row.startsWith('KSHORTJWT='))
		?.split('=')[1];

	if (token === undefined) {
		return false;
	} else {
		return true;
	}
}
