<script setup>
	definePageMeta({
		layout: 'mobile-blank',
	});

</script>

<template>
	<ion-content>
		<div class="flex justify-center items-center text-center h-full">
			<div>
				<div>
					<ion-icon :icon="ioniconsLogoVue" size="large" />
				</div>
				<div>
					<ion-button shape="round" href="/mobile/home">
						<ion-icon :icon="ioniconsChevronForwardOutline" />
					</ion-button>
				</div>
			</div>
		</div>
	</ion-content>
</template>
