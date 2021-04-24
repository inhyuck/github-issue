import React, {useState} from 'react';
import LabelEditWrapForm from "./LabelEditWrapForm.jsx";

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

    return (
        <div className="row-item">
            <div className="subject" style={{backgroundColor}}>
                <span>{subject}</span>
            </div>
            <button>Delete</button>

            <LabelEditWrapForm id={id}
                               subject={subject} setSubject={setSubject}
                               description={description}
                               backgroundColor={backgroundColor} setBackgroundColor={setBackgroundColor}
            />
        </div>
    );
}
