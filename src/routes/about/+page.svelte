<script>
	import Header from '$lib/ui/header.svelte';
	import Link from '$lib/ui/link.svelte';
	import '../../app.css';

	let title = 'A easy to use link shortener';
</script>

<svelte:head>
	<title>Kshort · About</title>
	<meta name="description" content={title} />
</svelte:head>

<Header
	heads={[
		{ href: '/', title: 'Home', current: false },
		{ href: '/about', title: 'About', current: true }
	]}
/>

<div class="m-10 mb-5 text-center text-gray-950 dark:text-gray-50">
	<div class="pb-10 text-3xl font-semibold">
		<h1>{title}</h1>
	</div>
</div>

<div class="flex flex-col items-center justify-center text-gray-950 dark:text-gray-50">
	<div class="w-2/5 rounded-sm bg-white p-8 shadow-sm dark:bg-slate-800">
		<h1 class="mb-2 text-xl font-semibold" title="Create shortened url">Create shortened url</h1>
		<p>
			Kshort is a link shortener made in <Link url="https://kotlinlang.org" description="Kotlin" /> and
			<Link url="https://svelte.dev" description="Svelte" /> by <Link
				url="https://ada.wf"
				description="Ada"
			/>, source are available <Link url="https://gitlab.gnous.eu/ada/kshort" description="here" />.
		</p>
	</div>
</div>
