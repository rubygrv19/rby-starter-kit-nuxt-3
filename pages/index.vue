<script setup>
	definePageMeta({
		layout: 'web-blank',
	});

</script>

<template>
	<div>
		<div class="grid grid-cols-2">
			<div>
				<NuxtLink to="/web">Web</NuxtLink>
			</div>
			<div>
				<NuxtLink to="/mobile">Mobile</NuxtLink>
			</div>
		</div>
	</div>
</template>
