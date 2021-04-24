import {useRef} from "react";

export default function LabelEditWrapForm({
                                              id,
                                              subject,
                                              setSubject,
                                              description,
                                              backgroundColor,
                                              setBackgroundColor,
                                          }) {

    const labelEditFormRef = useRef(null);

    const onChangeSubject = (event) => {
        setSubject(event.target.value);
    };

    const onSubmitEditedLabel = (event) => {
        event.preventDefault();
        console.log(Object.fromEntries(new FormData(labelEditFormRef.current)));
    };

    const isNew = !id;
    const submitButton = <button type="submit">{isNew ? 'Create label' : 'Save changes'}</button>;

    return (
        <form action="#" ref={labelEditFormRef} onSubmit={onSubmitEditedLabel}>
            <label htmlFor="name">Label name</label>
            <input id="name" name="subject" defaultValue={subject} onChange={onChangeSubject}/>

            <label htmlFor="description">Description</label>
            <input id="description" name="description" defaultValue={description}/>

            <button>Cancel</button>
            {submitButton}
        </form>
    );
}
