import React, {useEffect, useState} from 'react';

import Gnb from './Gnb.jsx';
import LabelsRowWrap from './labels/LabelsRowWrap.jsx';
import {MENU} from './consts/menu.js';
import MilestonesRowWrap from './milestones/MilestonesRowWrap.jsx';
import APIs from '../apis/APIs.js';

export default function Main() {
    const [menu, setMenu] = useState(MENU.LABELS);
    const [labels, setLabels] = useState([]);
    const [isShowNewLabelForm, setIsShowNewLabelForm] = useState(false);

    const fetchLabels = () => {
        APIs.getLabels()
            .then(labels => setLabels(labels));
    };
    useEffect(fetchLabels, []);

    const onChangeMenu = (menu) => setMenu(() => menu);

    const editLabel = ({id, subject, description, backgroundColor}) => {
        return APIs.editLabel({id, subject, description, backgroundColor})
            .then(() => fetchLabels());
    };
    const createLabel = ({subject, description, backgroundColor}) => {
        return APIs.createLabel({subject, description, backgroundColor})
            .then(() => fetchLabels());
    };

    const rowWrap = menu === MENU.LABELS
        ? <LabelsRowWrap labels={labels} createLabel={createLabel} editLabel={editLabel} isShowNewLabelForm={isShowNewLabelForm}
                         setIsShowNewLabelForm={setIsShowNewLabelForm}/>
        : <MilestonesRowWrap/>;
    return (
        <main className="contents">
            <Gnb menu={menu} onChangeMenu={onChangeMenu} setIsShowNewLabelForm={setIsShowNewLabelForm}/>
            {rowWrap}
        </main>
    );
}
