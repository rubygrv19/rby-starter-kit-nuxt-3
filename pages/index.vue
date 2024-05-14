<script setup>
	const ourService = ref([{
			title: 'Meeting Room Reservation',
			desc: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
			link: null,
			image: '/images/our-service.svg'
		},
		{
			title: 'Car Reservation',
			desc: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
			link: null,
			image: '/images/our-service.svg'
		},
		{
			title: 'Others Help Request',
			desc: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
			link: null,
			image: '/images/our-service.svg'
		},
		{
			title: 'Assets Management',
			desc: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
			link: null,
			image: '/images/our-service.svg'
		},
		{
			title: 'Stationary/IT Supply',
			desc: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
			link: null,
			image: '/images/our-service.svg'
		}
	])
</script>

<template>
	<div>
		<div class="bg-white py-[72px] px-[72px] xs:py-[40px] xs:px-[24px]">
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
		<div class="bg-[#F2F2F2] py-[48px] px-[72px] xs:py-[24px] xs:px-[24px]">
			<div class="text-center mb-12 xs:mb-4">
				<div class="text-[32px] text-[#313131] font-bold xs:text-xl">
					Our Service
				</div>
			</div>
			<div class="grid grid-cols-3 gap-6 xs:grid-cols-3 xs:gap-4">
				<div v-for="(item, index) of ourService" :key="index">
					<div class="bg-white rounded-lg p-4 xs:p-2 xs:h-full"
						style="box-shadow: 0px 4px 8px 0px #0000000D;">
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
									{{ item.title }}
								</div>
							</div>
							<div class="text-base text-[#757575] font-normal xs:hidden">
								{{ item.desc }}
							</div>
						</div>
						<div class="xs:hidden">
							<button type="button" class="bg-[#F58220] rounded-lg py-[13px] px-8">
								<div class="text-base text-white font-semibold">
									Apply Request
								</div>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="bg-white py-[72px] px-[72px] xs:py-[40px] xs:px-[24px]">
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
		</div>
	</div>
</template>