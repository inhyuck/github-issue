import React, {useState} from 'react';
import LabelForm from "./LabelForm.jsx";
import {randomHexColor} from "../utils/colorUtils";

export default function LabelFormWrap({label = {}, submitButtonText, saveLabel, cancelLabel, deleteLabel}) {
    const {
        id,
        subject: prevSubject = '',
        description: prevDescription = '',
        backgroundColor: prevBackgroundColor = randomHexColor(),
    } = label;

    const [subject, setSubject] = useState(prevSubject);
    const [backgroundColor, setBackgroundColor] = useState(prevBackgroundColor);

    const onClickDeleteLabel = () => {
        window.confirm('정말 이 레이블을 삭제하시겠습니까?') && deleteLabel({id});
    };

    return (
        <div className="row-item">
            <div className="subject" style={{backgroundColor}}>
                <span>{subject}</span>
            </div>
            {label.id && <button onClick={onClickDeleteLabel}>Delete</button>}
            <LabelForm id={id}
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
