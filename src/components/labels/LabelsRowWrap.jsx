import LabelsRowHead from './LabelsRowHead.jsx';
import LabelsRowList from './LabelsRowList.jsx';
import LabelEditWrap from "./LabelEditWrap";

export default function LabelsRowWrap({labels, isShowNewLabelForm, setIsShowNewLabelForm, onCreateLabel, onEditLabel}) {
    const labelsCount = labels.length;
    const hideNewLabelForm = () => {
        setIsShowNewLabelForm(() => false);
    };

    return (
        <section className="row-wrap">
            {
                isShowNewLabelForm &&
                <LabelEditWrap submitButtonText={'Create label'} saveLabel={onCreateLabel} cancelLabel={hideNewLabelForm}/>
            }
            <LabelsRowHead labelsCount={labelsCount}/>
            <LabelsRowList labels={labels} onEditLabel={onEditLabel}/>
        </section>
    );
}
