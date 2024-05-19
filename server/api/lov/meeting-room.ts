export default defineEventHandler((event) => {
    return {
        result: {
            status: 'Success',
            statusCode: 200,
            data: [
                {
                    label: 'Room A',
                    value: 5,
                },
                {
                    label: 'Room B',
                    value: 10,
                },
                {
                    label: 'Room C',
                    value: 4,
                }
            ]
        }
    }
});