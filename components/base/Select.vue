<script setup>
	const props = defineProps({
		lov: Array,
		error: Boolean,
		messageError: String,
	});

	const emit = defineEmits(['update:modelValue']);
	const proxyValue = defineModel();
</script>

<template>
	<div>
		<div class="mb-1">
			<select
				v-model="proxyValue"
				class="border border-[#CACACB] rounded w-full py-[13px] px-4">
				<option v-for="(item, index) of lov" :key="index">
					{{ item }}
				</option>
			</select>
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