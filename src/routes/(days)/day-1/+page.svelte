<script lang="ts">
	import type { Listofkids } from "$lib/types"

	let { data } = $props()

	let niceKids: Listofkids[] = $state([])
	let badKids: Listofkids[] = $state([])

	$effect(() => {
		niceKids = data.listofkids.filter((kid) => kid.tally >= 0)
		badKids = data.listofkids.filter((kid) => kid.tally < 0)
	})

	$effect(() => {
		niceKids.sort((a, b) => b.tally - a.tally)
		badKids.sort((a, b) => a.tally - b.tally)
	})

	$effect(() => {
		console.log(data.listofkids[0])
	})

	function increment(e: MouseEvent) {
		const index: number = Number((e.target as HTMLButtonElement).getAttribute("data-index"))
		const listType: string | null = (e.target as HTMLButtonElement).getAttribute("data-listType")

		if (listType == "nice") {
			niceKids[index].tally++
		} else {
			badKids[index].tally++
		}
	}

	function decrement(e: MouseEvent) {
		const index: number = Number((e.target as HTMLButtonElement).getAttribute("data-index"))
		const listType: string | null = (e.target as HTMLButtonElement).getAttribute("data-listType")

		if (listType == "nice") {
			niceKids[index].tally--
		} else {
			badKids[index].tally--
		}
	}
</script>

<div class="sides">
	<div class="nice">
		<h1>Nice</h1>
		<hr />
		<div class="kids">
			{#each niceKids as { name, tally }, i}
				<div class="kid">
					<p>{name}</p>
					<p class="positive">{tally}</p>
					<span>
						<button on:click={increment} data-index={i} data-listType="nice">+</button>
						<button on:click={decrement} data-index={i} data-listType="nice">-</button>
					</span>
				</div>
			{/each}
			{niceKids.length}
		</div>
	</div>
	<div class="naughty">
		<h1>Naughty</h1>
		<hr />
		<div class="kids">
			{#each badKids as { name, tally }, i}
				<div class="kid">
					<p>{name}</p>
					<p class="negative">{tally}</p>
					<span>
						<button on:click={increment} data-index={i} data-listType="naughty">+</button>
						<button on:click={decrement} data-index={i} data-listType="naughty">-</button>
					</span>
				</div>
			{/each}
			{badKids.length}
		</div>
	</div>
</div>

<style>
	.sides {
		display: grid;
		grid-template-rows: auto;
		grid-template-columns: repeat(2, 1fr);
		gap: 20px;
	}

	.sides h1 {
		font-size: 22px;
	}

	.sides hr {
		margin: 10px 0px;
	}

	.kids {
		display: grid;
		grid-template-rows: auto;
		grid-template-columns: 1fr;
		gap: 20px;
	}

	.kids .kid {
		min-height: 50px;
		border: 1px solid grey;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0px 20px;
	}

	.positive {
		color: green;
	}

	.negative {
		color: red;
	}
</style>
