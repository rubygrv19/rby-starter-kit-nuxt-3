<script setup>
    import { LOV_MEETING_ROOM } from '@/public/data/lov/meeting-room.ts';

    definePageMeta({
        layout: 'blank'
    });

    const router = useIonRouter();

    const listMeetingRoom = ref(LOV_MEETING_ROOM.result);

    const isError = ref(false);
    const isSnackRequest = ref(false);

    const formBookMeetingRooms = ref({
		meetingName: null,
		startDate: null,
		startTime: null,
		endDate: null,
		endTime: null,
		chooseRoom: null,
		participant: null,
		snackRequest: null,
		lunchRequest: null,
		remark: null
	});

    const goPageMeetingRoomReservation = () => {
        router.push('/meeting-room-reservation');
    };

    const onReservationRoom = () => {
        console.log(formBookMeetingRooms.value);
    };

    // const getListMeetingRoom = async () => {
	// 	const { data } = await useFetch('/api/lov/meeting-room');
	// 	if (data.value.result.statusCode === 200) {
	// 		listMeetingRoom.value = data.value.result;
	// 	};
	// };

	// onMounted(async () => {
	// 	await getListMeetingRoom();
    // });

</script>

<template>
    <ion-page class="overflow-y-scroll">
        <div class="bg-white py-10 px-[72px] xs:p-6">
            <div class="mb-10 xs:mb-6">
                <div class="flex gap-x-4">
                    <div>
                        <div class="cursor-pointer" @click="goPageMeetingRoomReservation()">
                            <img 
                                src="/icons/meeting-room-reservation_arrow-down.svg"
                                alt="meeting-room-reservation_arrow-down"
                            />
                        </div>
                    </div>
                    <div>
                        <div class="mb-2 xs:mb-1">
                            <div class="text-[32px] text-[#313131] font-bold xs:text-xl">
                                Book Meeting Rooms
                            </div>
                        </div>
                        <div class="text-base text-[#757575] font-normal xs:text-sm">
                            This web application is used to apply for rooms at PT Indonesia Infrastructure Finance
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="grid grid-cols-2 gap-x-[54px] xs:grid-cols-1">
                    <div>
                        <div class="mb-4">
                            <div class="text-xl text-[#000000] font-semibold xs:text-base">
                                Meeting Details
                            </div>
                        </div>
                        <div class="mb-4">
                            <div class="mb-1">
                                <div class="text-base text-[#313131] font-normal">
                                    Meeting name
                                    <span class="text-[#FF0000]">*</span>
                                </div>
                            </div>
                            <BaseInput
                                type="text"
                                v-model="formBookMeetingRooms.meetingName"
                                placeholder="Type your meeting name"
                                :error="isError"
                                errorType="danger"
                                errorMessage="Please input your meeting name, max 100 character"
                            />
                        </div>
                        <div class="mb-4">
                            <div class="grid grid-cols-2 gap-4 xs:grid-cols-1">
                                <div>
                                    <div class="mb-1">
                                        <div class="text-base text-[#313131] font-normal">
                                            Start date
                                            <span class="text-[#FF0000]">*</span>
                                        </div>
                                    </div>
                                    <BaseInput
                                        type="date"
                                        v-model="formBookMeetingRooms.startDate"
                                        :error="isError"
                                        errorType="danger"
                                        errorMessage="Select start date"
                                    />
                                </div>
                                <div>
                                    <div class="mb-1">
                                        <div class="text-base text-[#313131] font-normal">
                                            Start time
                                            <span class="text-[#FF0000]">*</span>
                                        </div>
                                    </div>
                                    <BaseInput
                                        type="time"
                                        v-model="formBookMeetingRooms.startTime"
                                        :error="isError"
                                        errorType="danger"
                                        errorMessage="Select start time"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="mb-4">
                            <div class="grid grid-cols-2 gap-4 xs:grid-cols-1">
                                <div>
                                    <div class="mb-1">
                                        <div class="text-base text-[#313131] font-normal">
                                            End date
                                            <span class="text-[#FF0000]">*</span>
                                        </div>
                                    </div>
                                    <BaseInput
                                        type="date"
                                        v-model="formBookMeetingRooms.endDate"
                                        :error="isError"
                                        errorType="danger"
                                        errorMessage="Select end date"
                                    />
                                </div>
                                <div>
                                    <div class="mb-1">
                                        <div class="text-base text-[#313131] font-normal">
                                            End time
                                            <span class="text-[#FF0000]">*</span>
                                        </div>
                                    </div>
                                    <BaseInput
                                        type="time"
                                        v-model="formBookMeetingRooms.endTime"
                                        :error="isError"
                                        errorType="danger"
                                        errorMessage="Select end time"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="mb-4">
                            <div class="mb-1">
                                <div class="text-base text-[#313131] font-normal">
                                    Choose room
                                    <span class="text-[#FF0000]">*</span>
                                </div>
                            </div>
                            <BaseSelect
                                v-model="formBookMeetingRooms.chooseRoom"
                                :lov="listMeetingRoom.data"
                                :error="isError"
                                errorType="warning"
                                errorMessage="The meet room has been booked, you can still book but enter the waiting list room."
                            />
                        </div>
                        <div class="mb-4">
                            <div class="mb-1">
                                <div class="text-base text-[#313131] font-normal">
                                    Participant
                                    <span class="text-[#FF0000]">*</span>
                                </div>
                            </div>
                            <BaseInput
                                type="number"
                                v-model="formBookMeetingRooms.participant"
                                placeholder="e.g. : 5"
                                :error="isError"
                                errorType="danger"
                                errorMessage="The number of people exceeds the building capacity"
                            />
                        </div>
                        <div class="mb-4">
                            <div class="mb-1">
                                <div class="flex gap-x-1">
                                    <div>
                                        <BaseInput
                                            type="checkbox"
                                            v-model="isSnackRequest"
                                        />
                                    </div>
                                    <div>
                                        <div class="text-base text-[#313131] font-normal">
                                            Snack request (Optional)
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <BaseTextarea
                                rows="4"
                                v-model="formBookMeetingRooms.snackRequest"
                                placeholder="Snack remarks"
                                :error="isError"
                                errorType="danger"
                                errorMessage="Input your request, max 100 character"
                            />
                        </div>
                        <div class="mb-4">
                            <div class="flex gap-x-1">
                                <div>
                                    <BaseInput
                                        type="checkbox"
                                        v-model="formBookMeetingRooms.lunchRequest"
                                    />
                                </div>
                                <div>
                                    <div class="text-base text-[#313131] font-normal">
                                        Lunch request (Optional)
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mb-8 xs:mb-6">
                            <div class="mb-1">
                                <div class="text-base text-[#313131] font-normal">
                                    Remark (Optional)
                                </div>
                            </div>
                            <BaseInput
                                type="text"
                                v-model="formBookMeetingRooms.remark"
                                placeholder="Add your remark"
                            />
                        </div>
                        <div>
                            <BaseButton
                                type="button"
                                label="Reservation room"
                                class="w-full"
                                @click="onReservationRoom()"
                            />
                        </div>
                    </div>
                    <div class="flex justify-center xs:hidden">
                        <img 
                            src="/images/meeting-room-reservation_banner.svg"
                            alt="meeting-room-reservation_banner"
                        />
                    </div>
                </div>
            </div>
        </div>
    </ion-page>
</template>