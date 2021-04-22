const END_POINT = 'http://localhost:3001';

const GET = (url) => {
    return fetch(`${END_POINT}${url}`)
        .then(response => {
            return response.json();
        });
};

export default {
    getLabels() {
        return GET('/labels');
    },
};
