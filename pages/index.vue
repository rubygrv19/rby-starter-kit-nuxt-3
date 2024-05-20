<script setup>
	import { OUR_SERVICE } from '@/public/data/our-service.ts';
	import { LOV_DIVISION } from '@/public/data/lov/division.ts';

    const router = useIonRouter();

	const listOurService = ref(OUR_SERVICE.result);
	const listDivision = ref(LOV_DIVISION.result);

	const formGetInTouch = ref({
		fullname: null,
		division: null,
		message: null,
		attachment: null
	});

	const goPageOurService = (url) => {
        router.push(url);
    };

	// const getListOurService = async () => {
	// 	const { data } = await useFetch('/api/our-service');
	// 	if (data.value.result.statusCode === 200) {
	// 		listOurService.value = data.value.result;
	// 	};
	// };

	// const getListDivision = async () => {
	// 	const { data } = await useFetch('/api/lov/division');
	// 	if (data.value.result.statusCode === 200) {
	// 		listDivision.value = data.value.result;
	// 	};
	// };

	// onMounted(async () => {
	// 	await getListOurService();
	// 	await getListDivision();
    // });


	
</script>

<template>
	<div>
		<div class="bg-white py-[72px] px-[72px] xs:py-10 xs:px-6">
			<div class="flex items-center">
				<div>
					<div class="text-5xl text-[#313131] font-extrabold mb-6 xs:text-2xl xs:text-center xs:mb-4">
						<div class="mb-2 xs:mb-0">
							General Affair (GA)
						</div>
						<div>
							Service Systems
						</div>
					</div>
					<div class="xs:hidden">
						<div class="text-xl text-[#313131] font-normal xs:text-base xs:text-center">
							<div class="mb-2">
								There are many variations of passages of Lorem Ipsum available, but the
							</div>
							<div>
								majority have suffered alteration in some form, by injected humour.
							</div>
						</div>
					</div>
					<div class="hidden xs:flex">
						<div class="text-xl text-[#313131] font-normal xs:text-base xs:text-center">
							There are many variations of passages of Lorem Ipsum available, but the majority have
							suffered alteration in some form, by injected humour.
						</div>
					</div>
				</div>
				<div class="ml-auto xs:hidden">
					<img src="/images/banner.svg" alt="banner" />
				</div>
			</div>
		</div>
		<div class="bg-[#F2F2F2] py-12 px-[72px] xs:py-6 xs:px-6">
			<div class="text-center mb-12 xs:mb-4">
				<div class="text-[32px] text-[#313131] font-bold xs:text-xl">
					Our Service
				</div>
			</div>
			<div class="grid grid-cols-3 gap-6 xs:grid-cols-2 xs:gap-4">
				<div v-for="(item, index) of listOurService.data" :key="index">
					<div 
						class="bg-white rounded-lg p-4 xs:py-5 xs:px-2 xs:h-full"
						style="box-shadow: 0px 4px 8px 0px #0000000D;"
						@click="goPageOurService(item.link)"
						@touchend="goPageOurService(item.link)"
					>
						<div class="mb-4 xs:flex xs:justify-center xs:mb-2">
							<div class="xs:hidden">
								<img src="/images/our-service.svg" alt="our-service" />
							</div>
							<div class="hidden xs:flex">
								<img src="/images/our-service_mobile.svg" alt="our-service_mobile" />
							</div>
						</div>
						<div class="mb-6 xs:mb-0">
							<div class="mb-2 xs:mb-0">
								<div
									class="text-xl text-[#313131] font-bold xs:text-xs xs:font-semibold xs:text-center">
									{{ item.name }}
								</div>
							</div>
							<div class="text-base text-[#757575] font-normal xs:hidden">
								{{ item.desc }}
							</div>
						</div>
						<div class="xs:hidden">
							<BaseButton
								type="button"
								label="Apply Request"
								@click="goPageOurService(item.link)"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="bg-white py-[72px] px-[320px] xs:py-10 xs:px-6">
			<div class="text-center mb-6">
				<div class="mb-2">
					<div class="text-[32px] text-[#313131] font-bold xs:text-xl">
						Get In Touch
					</div>
				</div>
				<div class="text-base text-[#757575] font-normal xs:text-xs">
					If you have a complaint, please contact us
				</div>
			</div>
			<div>
				<div class="mb-6 xs:mb-4">
					<div class="mb-1">
						<div class="text-base text-[#313131] font-normal">
							Full name
							<span class="text-[#FF0000]">*</span>
						</div>
					</div>
					<BaseInput
                        type="text"
                        v-model="formGetInTouch.fullname"
                        placeholder="Please input your full name"
                    />
				</div>
				<div class="mb-6 xs:mb-4">
					<div class="mb-1">
						<div class="text-base text-[#313131] font-normal">
							Division
							<span class="text-[#FF0000]">*</span>
						</div>
					</div>
					<BaseSelect
						v-model="formGetInTouch.division"
						:lov="listDivision.data"
					/>
				</div>
				<div class="mb-6 xs:mb-4">
					<div class="mb-1">
						<div class="text-base text-[#313131] font-normal">
							Message
							<span class="text-[#FF0000]">*</span>
						</div>
					</div>
					<BaseTextarea
						rows="4"
						v-model="formGetInTouch.message"
						placeholder="Input your message here"
					/>
				</div>
				<div class="mb-6 xs:mb-4">
					<div class="mb-1">
						<div class="text-base text-[#313131] font-normal">
							Attach your file (Optional)
						</div>
					</div>
					<div class="w-full md:flex">
						<div class="w-full border border-[#F58220] rounded cursor-pointer py-[13px] px-4 xs:justify-center">
							<div class="flex justify-center items-center gap-x-4">
								<div>
									<img src="/icons/attachment.svg" alt="file" />
								</div>
								<div class="text-base text-[#F58220] font-normal">
									Attach your file
								</div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<BaseButton
                        type="button"
                        label="Submit"
						class="w-full"
                    />
				</div>
			</div>
		</div>
	</div>
</template>