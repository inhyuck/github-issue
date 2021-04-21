import Gnb from './Gnb.jsx';
import LabelsRowWrap from './labels/LabelsRowWrap.jsx';

export default function Main() {
    return (
        <main className="contents">
            <Gnb/>
            <LabelsRowWrap/>
            {/*<MilestonesRowWrap/>*/}
        </main>
    );
}
