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
const DELETE = (url) => defaultAPIs('DELETE', url);

const APIs = {
    getLabels() {
        return GET('/labels');
    },

    createLabel({subject, description, backgroundColor}) {
        return POST(`/labels`, {
            subject,
            description,
            backgroundColor,
        });
    },

    editLabel({id, subject, description, backgroundColor}) {
        return PUT(`/labels/${id}`, {
            subject,
            description,
            backgroundColor,
        });
    },

    deleteLabel({id}) {
        return DELETE(`/labels/${id}`);
    },
}

export default APIs;
