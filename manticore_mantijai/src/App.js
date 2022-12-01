import logo from './logo.svg';
import './App.css';
import Nav from './component/Navbar';
import Home from './component/Home';
import Appear from './component/Appearance';
import History from './component/History';
import { createContext, useState } from "react";
import Menu from "./component/Menu";
import Quiz from "./component/Quiz";
import Score from "./component/Score";
import About from './component/About';
import { Bounce } from "react-awesome-reveal";


{/* Context API (ให้บริการเกี่ยวกับข้อมูลสถานะของตัว Application )*/ }
export const DataContext = createContext()



function App() {
  {/* ส่วนของ State สำหรับจัดเก็บสถานะภายในแอพ */ }
  const [appState, setAppState] = useState("menu");
  {/* ส่วนของ state สำหรับจัดเก็บคะแนน */ }
  const [score, setScore] = useState(0);


  return (
    <div className="App">
      <Nav />
      <Home />
      <Appear />
      <History />

      {/* Quiz Components */}

      <DataContext.Provider value={{ appState, setAppState, score, setScore }}>
        <div id='QuizComponent'>
          <Bounce>
            <h1 className="Head"> LET'S DO SOME QUIZ! </h1>
            {/* เงื่อนไขในการแสดงค่า Components */}
            {appState === "menu" && <Menu />}
            {appState === "quiz" && <Quiz />}
            {appState === "score" && <Score />}
          </Bounce>
        </div>
      </DataContext.Provider>

      <About />
    </div>
  );
}

export default App;
