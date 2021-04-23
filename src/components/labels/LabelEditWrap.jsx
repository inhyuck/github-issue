import React, {useState} from 'react';

export default function LabelEditWrap({label = {}}) {
    const {
        id,
        subject: prevSubject = '',
        description: prevDescription = '',
        backgroundColor: prevBackgroundColor = '#dad3d3', //todo default value random hex color
    } = label;

    const [subject, setSubject] = useState(prevSubject);
    const [description, setDescription] = useState(prevDescription);
    const [backgroundColor, setBackgroundColor] = useState(prevBackgroundColor);

    const isNew = !!id;
    const submitButtonText = isNew ? 'Create label' : 'Save changes';

    return (
        <div className="row-item">
            <div className="subject" style={{backgroundColor}}>
                <span>{subject}</span>
            </div>
            <button>Delete</button>
            <form action="#">
                <label htmlFor="name">Label name</label>
                <input id="name" name="subject" defaultValue={subject}/>

                <label htmlFor="description">Description</label>
                <input id="description" name="description" defaultValue={description}/>

                <button>Cancel</button>
                <button type="submit">{submitButtonText}</button>
            </form>
        </div>
    );
}
