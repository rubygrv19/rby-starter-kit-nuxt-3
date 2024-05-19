<script setup>
	const props = defineProps({
		type: String,
		placeholder: String,
		error: Boolean,
		errorType: String,
		errorMessage: String,
		icon: String,
		iconPosition: String,
	});

	const proxyValue = defineModel();
	const onClickIcon = defineEmits(['iconOnClick'])
</script>

<template>
	<div>
		<div class="mb-1">
			<div v-if="!props.icon">
				<input 
					:type="props.type"
					v-model="proxyValue"
					:placeholder="props.placeholder"
					class="border border-[#CACACB] rounded w-full py-[13px] px-4" 
				/>
			</div>

			<div v-if="props.icon">
				<div class="flex items-center cursor-pointer">
					<div v-if="props.iconPosition === 'left'">
						<div 
							class="border-y border-l border-[#CACACB] rounded-l py-[13px] px-4"
							@click="onClickIcon('iconOnClick')"
						>
							<img :src="props.icon" :alt="props.icon" />
						</div>
					</div>
					<div class="flex-grow">
						<input 
							:type="props.type"
							v-model="proxyValue"
							:placeholder="props.placeholder"
							class="border-y border-[#CACACB] w-full py-[13px] px-4" 
							:class="{
								'border-l rounded-l' : props.iconPosition === 'right',
								'border-r rounded-r' : props.iconPosition === 'left'
							}"
						/>
					</div>
					<div v-if="props.iconPosition === 'right'">
						<div 
							class="border-y border-r border-[#CACACB] rounded-r py-[13px] px-4"
							@click="onClickIcon('iconOnClick')"
						>
							<img :src="props.icon" :alt="props.icon" />
						</div>
					</div>
				</div>
			</div>
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