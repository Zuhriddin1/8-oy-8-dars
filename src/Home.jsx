import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="flex flex-col w-[300px] pt-5 pb-5  border border-white shadow-2xl ml-[630px] mt-[200px] rounded-lg justify-center items-center">
      <h1 className="font-bold text-center pb-5 text-white cursor-pointer">
        XE charts
      </h1>
      <Link to={"chart"} className="btn btn-primary text-white shadow-2xl">
        Link to charts
      </Link>
    </div>
  );
}
export default Home;
