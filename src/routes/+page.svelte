<script lang="ts">
	import { baseballState } from '$lib/state.svelte';
	import plays from '$lib/plays';
	import doubleplay from '$lib/doubleplay';

	let dice1: number = $state(1);
	let dice2: number = $state(1);
	let play: string = $state('');

	function rollDice() {
		dice1 = Math.floor(Math.random() * (6 - 1) + 1);
		dice2 = Math.floor(Math.random() * (6 - 1) + 1);
		// dice1 = 2;
		// dice2 = 2;

		let dice_roll = [dice1, dice2];
		dice_roll.sort();

		dice1 = dice_roll[0];
		dice2 = dice_roll[1];

		play = plays(dice1, dice2);
		baseballState.history.push(
			`${$state.snapshot(play)}, ${$state.snapshot(baseballState.baseRunners)}`
		);
	}

	function switchSides() {
		baseballState.outs = 0;
		baseballState.turn = baseballState.turn === 0 ? 1 : 0;
		baseballState.baseRunners = [0, 0, 0, 0];
		dice1 = 1;
		dice2 = 1;
		play = 'Batter Up';
	}
</script>

<div
	class="flex h-screen w-screen flex-col items-center justify-center bg-green-400 text-5xl font-bold"
>
	<div class="mb-10 flex gap-10">
		<div>
			<p>
				{#if baseballState.turn === 0}*{/if}Home: {baseballState.homeScore}
			</p>
			<p>
				{#if baseballState.turn === 1}*{/if}Away: {baseballState.awayScore}
			</p>
			<div class="flex items-center gap-4">
				Outs:
				<div
					class="border-blac2 h-6 w-6 rounded-full {baseballState.outs >= 1
						? 'bg-black'
						: 'border-4'}"
				></div>
				<div
					class="border-blac2 h-6 w-6 rounded-full {baseballState.outs >= 2
						? 'bg-black'
						: 'border-4'}"
				></div>
			</div>
		</div>
		<ul>
			<li>First: {baseballState.baseRunners[1]}</li>
			<li>Second: {baseballState.baseRunners[2]}</li>
			<li>Third: {baseballState.baseRunners[3]}</li>
			<li>Home: {baseballState.baseRunners[0]}</li>
		</ul>
	</div>
	{#if dice1 !== 0 && dice2 !== 0}
		<div>{dice1} {dice2}</div>
		{play}
	{/if}
	{#if baseballState.outs >= 3}
		<button class="rounded bg-green-800 p-4 text-white" onclick={switchSides}>SWITCH SIDES</button>
	{:else}
		<button class="rounded bg-green-800 p-4 text-white" onclick={() => rollDice()}> Pitch </button>
	{/if}

	<div class="absolute top-4 left-4">
		{#each baseballState.history as history}
			<p class="text-lg">{history}</p>
		{/each}
	</div>
</div>
