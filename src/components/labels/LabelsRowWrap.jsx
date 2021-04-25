import LabelsRowHead from './LabelsRowHead.jsx';
import LabelsRowList from './LabelsRowList.jsx';
import LabelFormWrap from "./LabelFormWrap";

export default function LabelsRowWrap({labels, isShowNewLabelForm, setIsShowNewLabelForm, onCreateLabel, onEditLabel}) {
    const labelsCount = labels.length;
    const hideNewLabelForm = () => {
        setIsShowNewLabelForm(() => false);
    };

    return (
        <section className="row-wrap">
            {
                isShowNewLabelForm &&
                <LabelFormWrap submitButtonText={'Create label'} saveLabel={onCreateLabel} cancelLabel={hideNewLabelForm}/>
            }
            <LabelsRowHead labelsCount={labelsCount}/>
            <LabelsRowList labels={labels} onEditLabel={onEditLabel}/>
        </section>
    );
}
