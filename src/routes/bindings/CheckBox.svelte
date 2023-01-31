<script>
	let yes = false;
	const yesValue = `Thank you. We will bombard your inbox and sell
		your personal details.`;
	const falseValue = `You must opt in to continue. If you're not
		paying, you're the product.`;
</script>

<label>
	<input type="checkbox" bind:checked={yes} />
	Yes! Send me regular email spam
</label>

<!-- {#if yes}
	<p>yes</p>
{:else}
	<p>no</p>
{/if} -->

<p>
	{yes ? yesValue : falseValue}
</p>

<button disabled={!yes}>Subscribe</button>
