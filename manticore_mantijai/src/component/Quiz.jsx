import { useContext, useEffect , useState } from "react";
import { DataContext } from "../App";
import QuestionsData from "../data/QuestionData";
/* Componets จัดการเกี่ยวกับการแสดงผล , คำถามแบบทดสอบ , ตัวเลือก  */

const Quiz = () => {
    /* set State */
    const [current,setCurrent] = useState(0);
    const [selectChoice , setSelectChoice] = useState("");
    const {score,setScore,setAppState} = useContext(DataContext);

    /* ตรวจสอบการเปลี่ยนแปลงค่าใน state select choice */     
     useEffect(()=>{
        checkAnswer()     
        // eslint-disable-next-line
    },[selectChoice]);

    /* เช็คคำตอบ */
    const checkAnswer=()=>{
        if(selectChoice!== ""){
            if(selectChoice == QuestionsData[current].answer){
                setScore(score+1);
                nextQuestion();
            }else{
                nextQuestion();
            }
        }
    };

    /* แสดงคำถามข้อถัดไป */
    const nextQuestion=()=> {
        /* Clear ตัวเลือกเดิมออกไป */
        setSelectChoice("");
        if (current === QuestionsData.length-1) { // 0-4 
            setAppState("score");
        }else{
            setCurrent(current+1);   
        }
          
    }


    return(
        <div className="quiz">
            {/* คำถาม */}
            <h1 className="questionquiz">{QuestionsData[current].question}</h1>
            {/* ตัวเลือก */}
           
            <div className="choices">
                <button onClick={() => setSelectChoice("A") }>{QuestionsData[current].A}</button>
                <button onClick={() => setSelectChoice("B") }>{QuestionsData[current].B}</button>
                <button onClick={() => setSelectChoice("C") }>{QuestionsData[current].C}</button>
                <button onClick={() => setSelectChoice("D") }>{QuestionsData[current].D}</button>
            </div>
            {/*แสดงข้อมูล 2 ส่วน (คำถามข้อที่เท่าไหร่ , คำถามทั้งหมด )*/}
            <br/>
            <h3 className="pagecount">{`${current+1} / ${QuestionsData.length}`}</h3>
        </div>
    )

}

export default Quiz;