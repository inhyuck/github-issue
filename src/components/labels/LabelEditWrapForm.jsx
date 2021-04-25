import {useRef} from "react";
import {randomHexColor} from "../utils/colorUtils";

export default function LabelEditWrapForm({
                                              id,
                                              subject,
                                              setSubject,
                                              description,
                                              backgroundColor,
                                              setBackgroundColor,
                                              onEditLabel,
                                              cancelEditingLabel,
                                          }) {

    const labelEditFormRef = useRef(null);

    const onChangeSubject = (event) => {
        setSubject(() => event.target.value);
    };

    const onClickBackgroundColor = () => {
        setBackgroundColor(() => randomHexColor());
    };

    const onChangeBackgroundColor = (event) => {
        setBackgroundColor(() => event.target.value);
    };

    const onSubmitEditedLabel = (event) => {
        event.preventDefault();
        const {subject, description, backgroundColor} = Object.fromEntries(new FormData(labelEditFormRef.current));
        onEditLabel({id, subject, description, backgroundColor})
            .then(() => cancelEditingLabel(id));
    };

    const onClickCancelEditing = () => {
        cancelEditingLabel(id);
    };

    const isNew = !id;
    const submitButton = <button type="submit">{isNew ? 'Create label' : 'Save changes'}</button>;

    return (
        <form action="#" ref={labelEditFormRef} onSubmit={onSubmitEditedLabel}>
            <label htmlFor="name">Label name</label>
            <input type="text" id="name" name="subject" value={subject} onChange={onChangeSubject}/>

            <label htmlFor="description">Description</label>
            <input type="text" id="description" name="description" defaultValue={description}/>

            <button type="button" style={{backgroundColor}} onClick={onClickBackgroundColor}>색상랜덤변경</button>
            <label htmlFor="backgroundColor">Color</label>
            <input type="text" id="backgroundColor" name="backgroundColor" value={backgroundColor} onChange={onChangeBackgroundColor}/>

            <button type="button" onClick={onClickCancelEditing}>Cancel</button>
            {submitButton}
        </form>
    );
}
