<script>
	import Header from '$lib/ui/header.svelte';
	import { Authenticate } from '$lib/api/auth';
	import '../../app.css';

	let title = 'Login';
	let email;
	let password;
</script>

<svelte:head>
	<title>Kshort · Home</title>
	<meta name="description" content={title} />
</svelte:head>

<Header
	heads={[
		{ href: '/', title: 'Home', current: true },
		{ href: '/about', title: 'About', current: false }
	]}
/>

<main class="flex justify-center text-center">
	<div class="w-2/6 flex-col rounded-sm bg-white p-8 shadow-sm dark:bg-slate-800">
		<h1 class="mb-4 text-xl font-semibold dark:text-gray-50">Login</h1>
		<form on:submit={Authenticate(email, password)}>
			<div class="mb-2">
				<input
					class="rounded-sm border-2 border-slate-800 p-2 py-2 dark:border-slate-600 dark:bg-slate-900"
					placeholder="Email"
					bind:value={email}
				/>
			</div>
			<div class="mb-2">
				<input
					placeholder="Your password"
					type="password"
					class=" m-2 rounded-sm border-2 border-slate-800 p-2 py-2 dark:border-slate-600 dark:bg-slate-900"
					bind:value={password}
				/>
			</div>
			<div>
				<button
					class="dark:white m-2 rounded-sm bg-slate-800 p-2 py-2 text-gray-50 duration-500 hover:bg-slate-700 dark:bg-slate-200 dark:text-gray-950 dark:hover:bg-slate-400"
					type="button"
					on:click={Authenticate(email, password)}
				>
					Login.
				</button>
			</div>
		</form>
	</div>
</main>
