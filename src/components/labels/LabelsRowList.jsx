import LabelFormWrap from './LabelFormWrap.jsx';
import {useState} from 'react';
import LabelsRowItem from "./LabelsRowItem";

export default function LabelsRowList({labels, editLabel, deleteLabel}) {
    const [editingLabelIds, setEditingLabelIds] = useState([]);
    const onEditLabel = (newEditLabelId) => {
        setEditingLabelIds((editingLabelIds) => [...editingLabelIds, newEditLabelId]);
    };
    const cancelEditLabel = (cancelEditLabelId) => {
        setEditingLabelIds((editingLabelIds) => {
            const cancelLabelIdIndex = editingLabelIds.findIndex(id => id === cancelEditLabelId);
            return [...editingLabelIds.slice(0, cancelLabelIdIndex), ...editingLabelIds.slice(cancelLabelIdIndex + 1)];
        });
    };

    const labelsRowList = labels.map((label) => {
        if (editingLabelIds.includes(label.id)) {
            return <LabelFormWrap key={label.id} label={label} submitButtonText={'Save Changes'}
                                  saveLabel={editLabel} cancelLabel={cancelEditLabel} deleteLabel={deleteLabel}/>;
        }
        return <LabelsRowItem key={label.id} label={label} onEditLabel={onEditLabel} deleteLabel={deleteLabel}/>;
    });

    return (
        <div className="row-list">
            {labelsRowList}
        </div>
    );
}
