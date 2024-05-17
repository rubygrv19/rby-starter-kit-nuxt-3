<script setup>
	const props = defineProps({
		type: String,
		placeholder: String,
		error: Boolean,
		messageError: String,
	});

	const emit = defineEmits(['update:modelValue']);
	const proxyValue = defineModel();
</script>

<template>
	<div>
		<div class="mb-1">
			<input 
				:type="props.type"
				v-model="proxyValue"
				:placeholder="props.placeholder"
				class="border border-[#CACACB] rounded w-full py-[13px] px-4" 
			/>
		</div>
		<div v-if="props.error">
			<div class="bg-[#FFB3B3] rounded py-1 px-2">
				<div class="text-xs text-[#BF4D4D] font-normal">
					{{ props.messageError }}
				</div>
			</div>
		</div>
	</div>
</template>