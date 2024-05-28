import { Route, Routes } from "react-router-dom";
import LineChart from "./components/LineChart";
import Home from "./Home";
import OneDay from "./OneDay";
import OneWeek from "./OneWeek";
import OneMonth from "./OneMonth";
import OneYear from "./OneYear";
import TwoYears from "./TwoYears";
import FiveYears from "./FiveYears";
import TenYears from "./TenYears";
import Hours from "./12Hours";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/chart" element={<LineChart></LineChart>}></Route>
        <Route path="/chart/Hours" element={<Hours></Hours>}></Route>
        <Route path="/chart/OneDay" element={<OneDay></OneDay>}></Route>
        <Route path="/chart/OneWeek" element={<OneWeek></OneWeek>}></Route>
        <Route path="/chart/OneMonth" element={<OneMonth></OneMonth>}></Route>
        <Route path="/chart/OneYear" element={<OneYear></OneYear>}></Route>
        <Route path="/chart/TwoYear" element={<TwoYears></TwoYears>}></Route>
        <Route path="/chart/FiveYear" element={<FiveYears></FiveYears>}></Route>
        <Route path="/chart/TenYear" element={<TenYears></TenYears>}></Route>
      </Routes>
    </>
  );
}
export default App;
