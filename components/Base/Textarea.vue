<script setup>
	const props = defineProps({
		rows: String,
		placeholder: String,
		error: Boolean,
		errorType: String,
		errorMessage: String,
	});

	const proxyValue = defineModel();
</script>

<template>
	<div>
		<div class="mb-1">
			<textarea 
				:rows="props.rows"
				v-model="proxyValue"
				:placeholder="props.placeholder"
				class="border border-[#CACACB] rounded w-full py-[13px] px-4"
			></textarea>
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