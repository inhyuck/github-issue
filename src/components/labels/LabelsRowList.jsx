import LabelsRowItem from './LabelsRowItem.jsx';
import LabelEditWrap from './LabelEditWrap.jsx';

export default function LabelsRowList({labels}) {
    const labelsRowList = labels.map((label) => {
        if (label.id === 1) { //todo editing 상태 따로 관리
            return <LabelEditWrap key={label.id} label={labels[0]}/>;
        }
        return <LabelsRowItem key={label.id} label={label}/>;
    });

    return (
        <div className="row-list">
            {labelsRowList}
        </div>
    );
}
