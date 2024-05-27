<script setup>
	const props = defineProps({
		lov: Array,
		error: Boolean,
		errorType: String,
		errorMessage: String,
	});

	const proxyValue = defineModel();
</script>

<template>
	<div>
		<div class="mb-1">
			<select
				v-model="proxyValue"
				class="border border-[#CACACB] rounded w-full py-[13px] px-4">
				<option v-for="(item, index) of lov" :key="index" :value="item.value">
					{{ item.label }}
				</option>
			</select>
		</div>
		<div v-if="props.error">
			<div 
				class="rounded py-1 px-2"
				:class="{
					'bg-[#FFB3B3] text-[#BF4D4D]' : props.errorType === 'danger',
					'bg-[#FFEAB3] text-[#313131]' : props.errorType === 'warning'
				}"	
			>
				<div class="text-xs font-normal">
					{{ props.errorMessage }}
				</div>
			</div>
		</div>
	</div>
</template>