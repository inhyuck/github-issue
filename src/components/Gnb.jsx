import {MENU} from './consts/menu.js';
import {toPascalCase} from './utils/stringUtils.js';

export default function Gnb({menu: selectedMenu, onChangeMenu, setIsShowNewLabelForm}) {
    const selectedButtonStyle = {
        backgroundColor: 'rgb(3, 102, 214)',
    };
    const onClickNewAction = () => {
        if (selectedMenu === MENU.LABELS) {
            setIsShowNewLabelForm(() => true)
        }
    }

    const menuButtons = Object.values(MENU).map(menu => <button key={menu} style={selectedMenu === menu ? selectedButtonStyle : {}}
                                                                onClick={() => onChangeMenu(menu)}>{toPascalCase(menu)}</button>);

    return (
        <nav className="gnb">
            <div className="tab-buttons">
                {menuButtons}
            </div>
            <button className="new-btn" onClick={onClickNewAction}>{`New ${selectedMenu}`}</button>
        </nav>
    );
}
