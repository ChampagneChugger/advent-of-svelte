<script lang="ts">
	type Days = {
		name: string
		href: string
	}

	const days: Days[] = [
		{
			name: "Day 1",
			href: "day-1"
		}
	]
</script>

<div class="homecontainer">
	<h1>Advent of Svelte</h1>
	<div class="days">
		{#each days as { name, href }}
			<a {href}>{name}</a>
		{/each}
	</div>
</div>

<style>
	.homecontainer {
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 40px;
	}

	.days {
		width: 80%;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: auto;
		gap: 20px;
	}

	.days a {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 50px;
		border: 1px solid grey;
		color: white;
		text-decoration: none;
		transition: 0.3s;
	}

	.days a:hover {
		background-color: #222;
	}
</style>
