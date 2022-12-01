import { DataContext } from "../App";
import { useContext } from "react";
import QuestionsData from "../data/QuestionData";

/* Components สรุปผลคะแนน */
const Score = () => {
    const { score,setAppState,setScore} = useContext(DataContext);

    const restartApp=()=> {
        setScore(0);
        setAppState("menu");
    }
    return (
        <div className="score">            
            <h1 className="totalscore">Total Score</h1>
            <h2 className="scoreboard">{score} / {QuestionsData.length}</h2>
            <button onClick={restartApp}  className="material-symbols-outlined" id="refreshbutton">
                refresh
            </button>
        </div>
    )

}

export default Score;