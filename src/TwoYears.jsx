import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data_json from "../src/assets/OneDay.json";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

function TwoYears() {
  const [dataChart, setDataChart] = useState({ labels: [], datasets: [] });

  function timeConverter(time) {
    var a = new Date(time);
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var time = month + " " + year + " ";
    return time;
  }

  useEffect(() => {
    let labels = [];
    let values = [];
    data_json[0].rates.forEach((el, index) => {
      labels.push(
        timeConverter(data_json[0].startTime + index * data_json[0].interval)
      );
      values.push(el);
    });
    setDataChart({
      labels,
      datasets: [
        {
          label: "5 YEAR",
          data: values,
          borderColor: "rgba(0, 21, 255, 0.831)",
          backgroundColor: "rgb(0, 26, 255)",
        },
      ],
    });
  }, []);

  return (
    <>
      <div>
        <div className="flex items-center justify-center space-x-4 p-4 mt-2">
          <Link to="/chart/Hours">
            <button className="px-4 py-2 bg-gray-100 rounded-full hover:bg-blue-700 focus:text-white focus:bg-blue-700">
              12H
            </button>
          </Link>
          <Link to="/chart/OneDay">
            <button className="px-4 py-2 bg-gray-100 rounded-full hover:bg-blue-700 focus:text-white focus:bg-blue-700">
              1D
            </button>
          </Link>
          <Link to="/chart/OneWeek">
            <button className="px-4 py-2 bg-gray-100 rounded-full hover:bg-blue-700 focus:text-white focus:bg-blue-700">
              1W
            </button>
          </Link>
          <Link to="/chart/OneMonth">
            <button className="px-4 py-2 text-white rounded-full hover:bg-blue-700 focus:text-white bg-blue-700">
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
      <div className="mx-auto w-[1100px]">
        {dataChart?.labels?.length && (
          <Line options={options} data={dataChart} />
        )}
      </div>
    </>
  );
}

export default TwoYears;
