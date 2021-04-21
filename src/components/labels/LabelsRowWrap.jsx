import LabelsRowHead from './LabelsRowHead.jsx';
import LabelsRowList from './LabelsRowList.jsx';

export default function LabelsRowWrap() {
    return (
        <section className="row-wrap">
            <LabelsRowHead/>
            <LabelsRowList/>
        </section>
    );
}
