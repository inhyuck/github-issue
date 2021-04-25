export default function LabelsRowItem({label, onEditingLabel}) {
    const {id, subject, description, backgroundColor} = label;

    const onClickEdit = () => {
        onEditingLabel(id);
    };
    const handleClickDelete = () => {
        console.info('clicked delete button, labelId: ', id);
    };

    return (
        <div className="row-item">
            <div className="subject" style={{backgroundColor}}>
                <span>{subject}</span>
            </div>
            <div className="desc">
                <span>{description}</span>
            </div>
            <div className="buttons">
                <button onClick={onClickEdit}>Edit</button>
                <button onClick={handleClickDelete}>Delete</button>
            </div>
        </div>
    );
}
