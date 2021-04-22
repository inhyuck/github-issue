import LabelsRowItem from './LabelsRowItem.jsx';

export default function LabelsRowList({labels}) {
    const labelsRowList = labels.map((label) => <LabelsRowItem key={label.id} label={label}/>);

    return (
        <div className="row-list">
            {labelsRowList}
        </div>
    );
}
