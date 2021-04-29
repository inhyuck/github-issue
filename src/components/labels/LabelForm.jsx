import {randomHexColor} from "../utils/colorUtils";

export default function LabelForm({
                                      id,
                                      subject,
                                      setSubject,
                                      description,
                                      backgroundColor,
                                      setBackgroundColor,
                                      saveLabel,
                                      cancelLabel,
                                      submitButtonText,
                                  }) {

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
        const {subject, description, backgroundColor} = Object.fromEntries(new FormData(event.target));
        saveLabel({id, subject, description, backgroundColor})
            .then(() => cancelLabel(id));
    };

    const onClickCancelEditing = () => {
        cancelLabel(id);
    };

    return (
        <form action="#" onSubmit={onSubmitEditedLabel}>
            <label htmlFor="name">Label name</label>
            <input type="text" id="name" name="subject" value={subject} onChange={onChangeSubject}/>

            <label htmlFor="description">Description</label>
            <input type="text" id="description" name="description" defaultValue={description}/>

            <button type="button" style={{backgroundColor}} onClick={onClickBackgroundColor}>색상랜덤변경</button>
            <label htmlFor="backgroundColor">Color</label>
            <input type="text" id="backgroundColor" name="backgroundColor" value={backgroundColor} onChange={onChangeBackgroundColor}/>

            <button type="button" onClick={onClickCancelEditing}>Cancel</button>
            <button type="submit">{submitButtonText}</button>
        </form>
    );
}
