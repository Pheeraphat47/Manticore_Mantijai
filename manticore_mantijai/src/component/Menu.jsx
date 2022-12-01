import { useContext } from "react";
import { DataContext } from "../App";

/* Components หน้า menu */ 

const Menu = () => {  
    /* เรียกใช้ setAppState จาก DataContext มาใช้ */
    const {setAppState} = useContext(DataContext)
    return(
        <div className="menu">
            <img className = "manticorepic" src={process.env.PUBLIC_URL+"img/manticorepic.png"} />
            {/* เปลียนค่าเป็น quiz โดยการกดปุ่ม */}
            <button onClick={() => setAppState("quiz") }> START </button>
        </div>
    )

}

export default Menu;