export default defineEventHandler((event) => {
    return {
        result: {
            status: 'Success',
            statusCode: 200,
            data: [
                {
                    name: 'Meeting Room Reservation',
                    desc: 'To submit a request for a meeting room',
                    link: '/meeting-room-reservation',
                    image: '/images/our-service.svg'
                },
                {
                    name: 'Car Reservation',
                    desc: 'To submit a car request',
                    link: null,
                    image: '/images/our-service.svg'
                },
                {
                    name: 'Others Help Request',
                    desc: 'Can submit requests...',
                    link: null,
                    image: '/images/our-service.svg'
                },
                {
                    name: 'Assets Management',
                    desc: 'Can submit requests...',
                    link: null,
                    image: '/images/our-service.svg'
                },
                {
                    name: 'Stationary/IT Supply',
                    desc: 'Can submit requests...',
                    link: null,
                    image: '/images/our-service.svg'
                }
            ]
        }
    }
});