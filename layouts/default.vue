<template>
	<div class="h-screen">
		<div class="h-full overflow-scroll">
			<div class="py-[18px] px-[72px] xs:py-[10px] xs:px-6">
				<div class="xs:hidden">
					<AppHeader />
				</div>
				<div class="md:hidden">
					<div>
						<AppHeaderMobile />
					</div>
				</div>
			</div>
			<div>
				<slot />
			</div>
		</div>
	</div>
</template>