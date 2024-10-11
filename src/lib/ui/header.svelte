<script>
	import Link from '$lib/ui/link.svelte';
	import { IsLogged } from '$lib/api/auth.js';

	export let heads;
	let visibleAccoutMenu = false;

	function showAccountMenu() {
		visibleAccoutMenu = !visibleAccoutMenu;
	}

	const logged = IsLogged();
</script>

<header class="text-gray-950 dark:text-gray-50">
	<nav class="ml-20 p-10">
		<ul class="float-left flex flex-wrap">
			{#each heads as { href, title, current }}
				{#if current === true}
					<li>
						<a
							class="me-4 underline decoration-pink-500 decoration-2 delay-100 duration-300 hover:rounded-sm hover:bg-pink-500 md:me-6"
							{href}>{title}</a
						>
					</li>
				{:else}
					<li>
						<a
							class="dark:text-gray-650 me-4 text-gray-400 underline decoration-pink-500 decoration-2 delay-100 duration-300 hover:rounded-sm hover:bg-pink-500 md:me-6"
							{href}>{title}</a
						>
					</li>
				{/if}
			{/each}
		</ul>

		<div class="flex-column float-right">
			<button class="mr-20" on:click={showAccountMenu}>
				<svg
					class="stroke-gray-950 dark:stroke-gray-50"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"
					></circle></svg
				>
			</button>

			{#if logged}
				{#if visibleAccoutMenu}
					<ul>
						<li><Link url="/account" description="My user" /></li>
						<li><Link url="/logout" description="Logout" /></li>
					</ul>
				{/if}
			{:else if visibleAccoutMenu}
				<ul>
					<li><Link url="/login" description="Login" /></li>
					<li><Link url="/register" description="Register" /></li>
				</ul>
			{/if}
		</div>
	</nav>
</header>
