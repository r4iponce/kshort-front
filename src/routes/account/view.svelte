<script>
	export let user;
</script>

<form class="mx-auto max-w-sm">
	<div class="mb-2">
		<label class="block text-left font-semibold" for="name">Username</label>
		<input
			class="rounded-sm border-2 border-slate-800 p-2 py-2 dark:border-slate-600 dark:bg-slate-900"
			placeholder="Username"
			bind:value={user.name}
			id="name"
		/>
	</div>
	<div class="mb-2">
		<label class="block text-left font-semibold" for="name">Email</label>
		<input
			class="rounded-sm border-2 border-slate-800 p-2 py-2 dark:border-slate-600 dark:bg-slate-900"
			placeholder="Email"
			bind:value={user.email}
		/>
	</div>
	<div class="mb-2">
		<label class="block text-left font-semibold" for="name">Password</label>
		<input
			class="rounded-sm border-2 border-slate-800 p-2 py-2 dark:border-slate-600 dark:bg-slate-900"
			placeholder="Your password"
			bind:value={user.password}
		/>
	</div>
	<div>
		<button
			class="dark:white m-2 rounded-sm bg-slate-800 p-2 py-2 text-gray-50 duration-500 hover:bg-slate-700 dark:bg-slate-200 dark:text-gray-950 dark:hover:bg-slate-400"
			type="button"
		>
			Login
		</button>
	</div>
</form>
