import React, {useState} from 'react';
import LabelEditWrapForm from "./LabelEditWrapForm.jsx";
import {randomHexColor} from "../utils/colorUtils";

export default function LabelEditWrap({label = {}, submitButtonText, saveLabel, cancelLabel}) {
    const {
        id,
        subject: prevSubject = '',
        description: prevDescription = '',
        backgroundColor: prevBackgroundColor = randomHexColor(),
    } = label;

    const [subject, setSubject] = useState(prevSubject);
    const [backgroundColor, setBackgroundColor] = useState(prevBackgroundColor);

    return (
        <div className="row-item">
            <div className="subject" style={{backgroundColor}}>
                <span>{subject}</span>
            </div>
            <button>Delete</button>

            <LabelEditWrapForm id={id}
                               subject={subject} setSubject={setSubject}
                               description={prevDescription}
                               backgroundColor={backgroundColor} setBackgroundColor={setBackgroundColor}
                               saveLabel={saveLabel}
                               cancelLabel={cancelLabel}
                               submitButtonText={submitButtonText}
            />
        </div>
    );
}
