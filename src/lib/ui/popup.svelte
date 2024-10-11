<script>
	export let level;
	export let message;
</script>

<div class="mt-8 flex flex-col items-center justify-center text-center">
	{#if level === 'INFO'}
		<div class="bg-green w-1/5 rounded-sm p-3 shadow-sm dark:bg-green-800">
			{message}
		</div>
	{:else if level == 'ERROR'}
		<div class="bg-red w-1/5 rounded-sm p-3 shadow-sm dark:bg-red-800">
			{message}
		</div>
	{/if}
</div>
