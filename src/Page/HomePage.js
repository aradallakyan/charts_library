import { useState } from "react";
import BarChart from "../Components/Charts/BarChart";
import PieChartSamples from "../Components/Charts/PieChart";
import CodeEditorComponent from "../Components/CodeEditorComponent";
import { MyModal } from "../Components/UI/UiComponents";
import s from "./home_page.module.css";
const HomePage = () => {
    const [openModal, setOpenModal] = useState(false);
    return <div className={s.each_row_wrapper}>
        <div className={s.each_card_wrapper} >
            <button onClick={() => setOpenModal(true)}>click!</button>
            <PieChartSamples />
        </div>
        <div className={s.each_card_wrapper} >
            <BarChart />
        </div>
        {openModal ? <MyModal onClose={() => setOpenModal(false)}>
            <CodeEditorComponent />
        </MyModal> : null}
    </div>
}

export default HomePage;