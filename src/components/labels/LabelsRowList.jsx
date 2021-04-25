import LabelEditWrap from './LabelEditWrap.jsx';
import {useState} from 'react';
import LabelsRowItem from "./LabelsRowItem";

export default function LabelsRowList({labels, onEditLabel}) {
    const [isEditingLabelIds, setIdEditingLabelIds] = useState([]);
    const onEditingLabel = (newEditingLabelId) => {
        setIdEditingLabelIds((editingLabelIds) => [...editingLabelIds, newEditingLabelId]);
    };
    const cancelEditingLabel = (cancelEditingLabelId) => {
        setIdEditingLabelIds((editingLabelIds) => {
            const cancelLabelIdIndex = editingLabelIds.findIndex(id => id === cancelEditingLabelId);
            return [...editingLabelIds.slice(0, cancelLabelIdIndex), ...editingLabelIds.slice(cancelLabelIdIndex + 1)];
        });
    };

    const labelsRowList = labels.map((label) => {
        if (isEditingLabelIds.includes(label.id)) {
            return <LabelEditWrap key={label.id} label={label} onEditLabel={onEditLabel} cancelEditingLabel={cancelEditingLabel}/>;
        }
        return <LabelsRowItem key={label.id} label={label} onEditingLabel={onEditingLabel}/>;
    });

    return (
        <div className="row-list">
            {labelsRowList}
        </div>
    );
}
