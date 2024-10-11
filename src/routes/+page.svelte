<script>
	import Header from '$lib/ui/header.svelte';
	import Popup from '$lib/ui/popup.svelte';
	import { CreateLink } from '$lib/api/link';
	import '../app.css';

	let title = 'A easy to use link shortener';
	let short;
	let url;
	let linkPromise;
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

<main>
	<div class="m-10 mb-5 text-center">
		<div class="pb-10 text-3xl font-semibold">
			<h1>{title}</h1>
		</div>
	</div>

	<div class="flex flex-col items-center justify-center text-center">
		<div class="w-2/5 rounded-sm bg-white p-8 shadow-sm dark:bg-slate-800">
			<h1 class="mb-2 text-xl font-semibold" title="Create shortened url">Create shortened url</h1>
			<div class="items-center justify-center">
				<input
					class="m-2 w-2/5 rounded-sm border-2 border-slate-800 p-2 py-2 dark:border-slate-600 dark:bg-slate-900"
					placeholder="Link (default is random)"
					bind:value={short}
					id="short-input"
				/>
				<input
					placeholder="https://en.wikipedia.org/wiki/Ada_Lovelace"
					class="m-2 w-2/5 rounded-sm border-2 border-slate-800 p-2 py-2 dark:border-slate-600 dark:bg-slate-900"
					bind:value={url}
					id="url-input"
				/>
			</div>

			<button
				class="dark:white m-2 w-10/12 rounded-sm bg-slate-800 p-2 py-2 text-gray-50 duration-500 hover:bg-slate-700 dark:bg-slate-200 dark:text-gray-950 dark:hover:bg-slate-400"
				type="button"
				on:click={() => (linkPromise = CreateLink(short, url))}
			>
				Post it.
			</button>
		</div>
	</div>

	{#if linkPromise != null}
		{#await linkPromise then}
			<Popup level="INFO" message="Redirection from {short} to {url} has been created"></Popup>
		{:catch}
			<Popup level="ERROR" message="Redirection from {short} to {url} cannot be created"></Popup>
		{/await}
	{/if}
</main>
