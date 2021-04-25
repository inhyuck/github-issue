export default function LabelsRowItem({label, onEditLabel, deleteLabel}) {
    const {id, subject, description, backgroundColor} = label;

    const onClickEditLabel = () => {
        onEditLabel(id);
    };
    const onClickDeleteLabel = () => {
        window.confirm('정말 이 레이블을 삭제하시겠습니까?') && deleteLabel({id});
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
                <button onClick={onClickEditLabel}>Edit</button>
                <button onClick={onClickDeleteLabel}>Delete</button>
            </div>
        </div>
    );
}
