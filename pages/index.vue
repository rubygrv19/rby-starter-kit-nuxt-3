<script setup>
	definePageMeta({
		layout: 'blank',
	});

	const router = useIonRouter();

	onMounted(() => {
		setTimeout(() => {
			router.push('/modules/home')
		}, 3000);
	});

</script>

<template>
	<ion-page>
		<ion-content>
			<div class="w-full h-full bg-[#2e054c]">
				<div class="flex justify-center items-center h-full">
					<div>
						<div>
							<img class="border rounded-2xl"
								src="https://media.tenor.com/v9sdELSzVw4AAAAC/nyan-cat-kawaii.gif" width="100" />
						</div>
						<div class="text-center mt-2">
							<div class="text-sm text-white font-normal">
								Please Wait ...
							</div>
						</div>
					</div>
				</div>
			</div>
		</ion-content>
	</ion-page>
</template>
