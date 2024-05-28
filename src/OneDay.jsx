import { Link } from "react-router-dom";
import OneDayLine from "./components/OneDayLine";
function OneDay() {
  return (
    <div>
      <div>
        <div className="flex items-center justify-center space-x-4 p-4 mt-2">
          <Link to="/chart/Hours">
            <button className="px-4 py-2 bg-gray-100 rounded-full hover:bg-blue-700 focus:text-white focus:bg-blue-700">
              12H
            </button>
          </Link>
          <Link to="/chart/OneDay">
            <button className="px-4 py-2 text-white rounded-full hover:bg-blue-700 focus:text-white bg-blue-700">
              1D
            </button>
          </Link>
          <Link to="/chart/OneWeek">
            <button className="px-4 py-2 bg-gray-100 rounded-full hover:bg-blue-700 focus:text-white focus:bg-blue-700">
              1W
            </button>
          </Link>
          <Link to="/chart/OneMonth">
            <button className="px-4 py-2 bg-gray-100 rounded-full hover:bg-blue-700 focus:text-white focus:bg-blue-700">
              1M
            </button>
          </Link>
          <Link to="/chart/OneYear">
            <button className="px-4 py-2 bg-gray-100 rounded-full hover:bg-blue-700 focus:text-white focus:bg-blue-700">
              1Y
            </button>
          </Link>
          <Link to="/chart/TwoYear">
            <button className="px-4 py-2 bg-gray-100 rounded-full hover:bg-blue-700 focus:text-white focus:bg-blue-700">
              2Y
            </button>
          </Link>
          <Link to="/chart/FiveYear">
            <button className="px-4 py-2 bg-gray-100 rounded-full hover:bg-blue-700 focus:text-white focus:bg-blue-700">
              5Y
            </button>
          </Link>
          <Link to="/chart/TenYear">
            <button className="px-4 py-2 bg-gray-100 rounded-full hover:bg-blue-700 focus:text-white focus:bg-blue-700">
              10Y
            </button>
          </Link>
        </div>
      </div>
      <div>
        <OneDayLine></OneDayLine>
      </div>
    </div>
  );
}

export default OneDay;
