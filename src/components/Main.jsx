import React from 'react';

import Gnb from './Gnb.jsx';
import LabelsRowWrap from './labels/LabelsRowWrap.jsx';
import {MENU} from './consts/menu.js';
import MilestonesRowWrap from './milestones/MilestonesRowWrap.jsx';

export default function Main() {
    const [menu, setMenu] = React.useState(MENU.LABELS);

    const onChangeMenu = (menu) => setMenu(() => menu);

    const rowWrap = menu === MENU.LABELS ? <LabelsRowWrap/> : <MilestonesRowWrap/>;

    return (
        <main className="contents">
            <Gnb menu={menu} onChangeMenu={onChangeMenu}/>
            {rowWrap}
        </main>
    );
}
