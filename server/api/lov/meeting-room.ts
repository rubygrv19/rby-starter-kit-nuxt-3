export default defineEventHandler((event) => {
    return {
        result: {
            status: 'Success',
            statusCode: 200,
            data: [
                {
                    label: 'Room A (Max 10 person)',
                    value: 5,
                },
                {
                    label: 'Room B (Max 10 person)',
                    value: 10,
                },
                {
                    label: 'Room C (Max 4 person)',
                    value: 4,
                }
            ]
        }
    }
});