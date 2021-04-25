import LabelsRowHead from './LabelsRowHead.jsx';
import LabelsRowList from './LabelsRowList.jsx';

export default function LabelsRowWrap({labels, onEditLabel}) {
    const labelsCount = labels.length;

    return (
        <section className="row-wrap">
            <LabelsRowHead labelsCount={labelsCount}/>
            <LabelsRowList labels={labels} onEditLabel={onEditLabel}/>
        </section>
    );
}
