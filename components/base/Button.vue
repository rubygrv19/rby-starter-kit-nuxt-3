<script setup>
	const props = defineProps({
		type: String,
		label: String,
		disabled: Boolean,
	});
</script>

<template>
	<div>
		<button 
			:type="props.type"
			:disabled="props.disabled"
			class="bg-[#F58220] rounded-lg text-center w-full py-[13px] disabled:bg-[#F8D082]">
			<div 
				class="text-base text-white font-semibold"
				:class="{ 
					'text-[#D6AE61]' : props.disabled 
				}">
				{{ props.label }}
			</div>
		</button>
	</div>
</template>