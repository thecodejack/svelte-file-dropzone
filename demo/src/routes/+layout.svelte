<script lang="ts">
	import '../styles.css';
</script>

<div class="layout-box">
	<div class="layout-row layout-header">
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/form">Form</a></li>
			<li><a href="/basic">Basic</a></li>
			<li><a href="/reactive-disabled">Reactive Disabled</a></li>
		</ul>
	</div>

	<div class="layout-row layout-content">
		<div id="layout-content">
			<slot />
		</div>
	</div>

	<div class="layout-row layout-footer">
		<div>Footer</div>
	</div>
</div>

<style>
	ul {
		display: flex;
		flex-direction: row;
		justify-content: center;
		list-style-type: none;
		margin: 0;
		padding: 0;
	}

	li {
		margin: 0 0.5em;
	}
</style>
