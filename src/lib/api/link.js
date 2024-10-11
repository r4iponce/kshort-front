import { IsLogged, ReadJWTStore } from '$lib/api/auth.js';

export async function CreateLink(short, url) {
	let requestHeaders;
	let endpoint;

	if (IsLogged) {
		let token = ReadJWTStore();
		requestHeaders = {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`
		};
		endpoint = 'http://localhost:8080/api/v1/links/authenticated';
	} else {
		requestHeaders = {
			'Content-Type': 'application/json'
		};
		endpoint = 'http://localhost:8080/api/v1/links';
	}
	try {
		const response = await fetch(endpoint, {
			method: 'POST',
			headers: requestHeaders,
			body: JSON.stringify({
				short,
				url
			})
		});

		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}

		console.log(`Redirection from ${short} to ${url} has has been created`);
	} catch (error) {
		console.error(error.message);

		throw 'Cannot create redirection';
	}
}
