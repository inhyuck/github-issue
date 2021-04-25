import LabelFormWrap from './LabelFormWrap.jsx';
import {useState} from 'react';
import LabelsRowItem from "./LabelsRowItem";

export default function LabelsRowList({labels, editLabel}) {
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
            return <LabelFormWrap key={label.id} label={label} submitButtonText={'Save Changes'} saveLabel={editLabel}
                                  cancelLabel={cancelEditingLabel}/>;
        }
        return <LabelsRowItem key={label.id} label={label} onEditingLabel={onEditingLabel}/>;
    });

    return (
        <div className="row-list">
            {labelsRowList}
        </div>
    );
}
