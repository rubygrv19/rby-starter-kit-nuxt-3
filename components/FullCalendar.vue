<script setup>
    import FullCalendar from '@fullcalendar/vue3';
    import timeGridPlugin from '@fullcalendar/timegrid';

    const calendarOptions = {
        plugins: [timeGridPlugin],
        initialView: 'timeGridWeek',
        allDaySlot: false,
        headerToolbar: {
            left: '',
            center: 'timeGridDay,timeGridWeek',
            right: ''
        }
    };
</script>

<template>
    <div>
        <FullCalendar :options='calendarOptions' />
    </div>
</template>