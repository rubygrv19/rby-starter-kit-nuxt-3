<script setup>
	import { OUR_SERVICE } from '@/public/data/our-service.ts';

    const router = useIonRouter();

	const listHeader = ref(OUR_SERVICE.result);

	const goPageHeader = (url) => {
        router.push(url);
    };

	// const getListHeader = async () => {
	// 	const { data } = await useFetch('/api/our-service');
	// 	if (data.value.result.statusCode === 200) {
	// 		listHeader.value = data.value.result;
	// 	};
	// };

	// onMounted(async () => {
	// 	await getListHeader();
	// });
</script>

<template>
	<div>
		<div class="flex items-center">
			<div>
				<img src="/logo.svg" alt="logo" class="cursor-pointer" />
			</div>
			<div class="mx-auto">
				<ul class="flex gap-x-8">
					<li 
						@click="goPageHeader('/')"
						class="text-sm text-[#F58220] font-bold cursor-pointer"
					>
						Home
					</li>
					<li 
						v-for="(item, index) of listHeader.data" :key="index"
						@click="goPageHeader(item.link)"
						class="text-sm text-[#313131] font-normal cursor-pointer"
					>
						{{ item.name }}
					</li>
				</ul>
			</div>
			<div class="flex gap-x-3 items-center">
				<div class="cursor-pointer">
					<img src="/icons/notification.svg" alt="notification" />
				</div>
				<div class="border-[1px] border-[#CACACB] rounded-lg cursor-pointer p-2">
					<div class="flex gap-x-1 items-center">
						<div>
							<img src="/images/profile.svg" alt="profile" class="cursor-pointer" />
						</div>
						<div>
							<div class="text-sm text-[#313131] font-semibold">
								Employee
							</div>
						</div>
						<div>
							<img src="/icons/arrow-down.svg" alt="arrow-down" class="cursor-pointer" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>