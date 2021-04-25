const API_END_POINT = process.env.REACT_APP_API_END_POINT;

const GET = (url) => {
    return fetch(`${API_END_POINT}${url}`)
        .then(response => {
            return response.json();
        });
};

const PUT = (url, data) => {
    return fetch(`${API_END_POINT}${url}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(response => {
        return response.json();
    });
};

const APIs = {
    getLabels() {
        return GET('/labels');
    },

    editLabels({id, subject, description, backgroundColor}) {
        return PUT(`/labels/${id}`, {
            subject,
            description,
            backgroundColor,
        });
    },
}

export default APIs;
