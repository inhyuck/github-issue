import {MENU} from './consts/menu.js';
import {toPascalCase} from './utils/stringUtils.js';

export default function Gnb({menu: selectedMenu, onChangeMenu}) {
    const selectedButtonStyle = {
        backgroundColor: 'rgb(3, 102, 214)',
    };
    const menuButtons = Object.values(MENU).map(menu => <button key={menu} style={selectedMenu === menu ? selectedButtonStyle : {}}
                                                                onClick={() => onChangeMenu(menu)}>{toPascalCase(menu)}</button>);

    return (
        <nav className="gnb">
            <div className="tab-buttons">
                {menuButtons}
            </div>
            <button className="new-btn">{`New ${selectedMenu}`}</button>
        </nav>
    );
}
