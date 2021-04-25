const API_END_POINT = process.env.REACT_APP_API_END_POINT;

const defaultAPIs = (method, url, data) => {
    let config = {method};
    if (method === 'POST' || method === 'PUT') {
        config = {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }
    }

    return fetch(`${API_END_POINT}${url}`, config).then(response => {
        if (!response.ok) {
            throw new Error('response is not OK');
        }
        return response.json();

    }).catch(error => {
        throw new Error(error);
    });
};

const GET = (url) => defaultAPIs('GET', url);
const POST = (url, data) => defaultAPIs('POST', url, data);
const PUT = (url, data) => defaultAPIs('PUT', url, data);

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

    createLabel({subject, description, backgroundColor}) {
        return POST(`/labels`, {
            subject,
            description,
            backgroundColor,
        });
    },
}

export default APIs;
