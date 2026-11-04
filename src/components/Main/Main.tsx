import LeftBlock from "./LeftBlock/LeftBlock"
import MiddleBlock from "./MiddleBlock/MiddleBlock"
import './Main.css'
import RightBlock from "./RightBlock/RightBlock";

function Main() {
    return (
        <div className="Main">
            <LeftBlock />
            <MiddleBlock />
            <RightBlock />
        </div>
    );
}

export default Main