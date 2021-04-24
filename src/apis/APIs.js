const API_END_POINT = process.env.REACT_APP_API_END_POINT;

const GET = (url) => {
    return fetch(`${API_END_POINT}${url}`)
        .then(response => {
            return response.json();
        });
};

export default {
    getLabels() {
        return GET('/labels');
    },
};
