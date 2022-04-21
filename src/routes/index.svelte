<article>
	<header>
		<h1>Sanity + SvelteKit</h1>
	</header>
	<main>
		<h2>Pets</h2>
		{#if pets && pets.length}
		<ul>
			{#each pets as pet}
			<li>{pet.name}</li>
			{/each}
		</ul>
		{:else}
		<p>No pets found.</p>
		{/if}
		<h2>Data</h2>
		<div>
			{#if pets && pets.length}
			<pre>
			{JSON.stringify(pets, null, 2)}
  	  </pre>
			{:else}
			<p>Your data will show up here when you've configured everything correctly</p>
			{/if}
		</div>
	</main>
</article>

<script>
  let pets = $$props.pets;
</script>

