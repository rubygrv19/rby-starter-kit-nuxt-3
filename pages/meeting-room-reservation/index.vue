<script setup>
    const router = useIonRouter();

    const goPageNewReservation = () => {
        router.push('/meeting-room-reservation/book-meeting-rooms');
    };
</script>

<template>
    <div>
        <div class="bg-[#F1F3F9] py-[72px] px-[320px] xs:py-10 xs:px-6">
            <div class="text-center mb-10">
                <div class="mb-4">
                    <div class="text-[32px] text-[#313131] font-bold xs:text-2xl xs:font-extrabold">
                        Meeting Room Reservation
                    </div>
                </div>
                <div class="mb-6">
                    <div class="text-base text-[#757575] font-normal xs:text-xs">
                        You can view existing applications and can create new applications
                    </div>
                </div>
                <div class="flex justify-center">
                    <BaseButton
                        type="button"
                        label="New Reservation"
                        @click="goPageNewReservation()"
                    />
                </div>
            </div>
            <div>
                <div class="bg-white rounded-lg py-6 px-10">
                    <FullCalendar />
                </div>
            </div>
        </div>
    </div>
</template>