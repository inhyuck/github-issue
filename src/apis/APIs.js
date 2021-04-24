const API_END_POINT = process.env.REACT_APP_API_END_POINT;

const GET = (url) => {
    return fetch(`${API_END_POINT}${url}`)
        .then(response => {
            return response.json();
        });
};

const APIs = {
    getLabels() {
        return GET('/labels');
    },
}

export default APIs;
