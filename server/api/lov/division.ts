export default defineEventHandler((event) => {
    return {
        result: {
            status: 'Success',
            statusCode: 200,
            data: [
                {
                    label: 'Division A',
                    value: 'Division A',
                },
                {
                    label: 'Division B',
                    value: 'Division B',
                },
                {
                    label: 'Division C',
                    value: 'Division C',
                }
            ]
        }
    }
});