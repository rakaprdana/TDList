import { Card } from "../components/ui/cards";
import { SideBar } from "../components/ui/sidebar";

const Dashboard = () => {
  return (
    <section className="flex gap-4">
      <SideBar />
      <div className="border-2 border-blue-600 flex flex-col w-full">
        <h1 className="text-3xl py-4 font-bold">Dashboard</h1>
        <div className="border-2 border-gray-200 bg-zinc-50 flex flex-col space-x-4 w-3/4 p-4 rounded-2xl">
          <h1 className="text-2xl font-semibold mb-4">Menu</h1>
          <div className="grid grid-cols-2 gap-4">
            <Card label={"New List"} navigate={"/create"} />
            <Card label={"My List"} navigate={"/all-list"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
