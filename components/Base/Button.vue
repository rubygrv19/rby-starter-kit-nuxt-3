<script setup>
	const props = defineProps({
		type: String,
		label: String,
		disabled: Boolean,
		class: String,
	});
</script>

<template>
	<div>
		<button 
			:type="props.type"
			:disabled="props.disabled"
			class="bg-[#F58220] rounded-lg text-center py-[13px] px-8 disabled:bg-[#F8D082]"
			:class="props.class">
			<div 
				class="text-base font-semibold"
				:class="{ 
					'text-white' : !props.disabled,
					'text-[#D6AE61]' : props.disabled 
				}">
				{{ props.label }}
			</div>
		</button>
	</div>
</template>