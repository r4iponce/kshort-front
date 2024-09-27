<script>
	export let heads;
</script>

<header>
	<nav class="ml-20 p-10">
		<ul class="flex flex-wrap float-left">
			{#each heads as { href, title, current }}
				{#if current === true}
					<li>
						<a
							class="me-4 text-gray-950 underline decoration-pink-500 decoration-2 delay-100 duration-300 hover:rounded-sm hover:bg-pink-500 md:me-6 dark:text-gray-50"
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
		<img class="float-right mr-20" src="/user.svg" alt="User button" />
	</nav>
</header>
