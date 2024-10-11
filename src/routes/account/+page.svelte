<script>
	import Header from '$lib/ui/header.svelte';
	import { GetUserInfo } from '$lib/api/auth';
	import '../../app.css';
	import View from './view.svelte';

	let title = 'Login';
	let userInfoPromise = GetUserInfo();
</script>

<svelte:head>
	<title>Kshort · Home</title>
	<meta name="description" content={title} />
</svelte:head>

<Header
	heads={[
		{ href: '/', title: 'Home', current: false },
		{ href: '/about', title: 'About', current: false }
	]}
/>

<main class="flex justify-center">
	<div class="md=w-3/5 mt-8 w-5/6 flex-col rounded-sm bg-white p-8 shadow-sm dark:bg-slate-800">
		<h1 class="mb-4 text-center text-xl font-semibold dark:text-gray-50">Account information</h1>
		{#await userInfoPromise then data}
			<View user={{ name: data.name, email: data.email, role: data.role }}></View>
		{/await}
	</div>
</main>
