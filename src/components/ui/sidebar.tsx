import { useNavigate } from "react-router-dom";
import { Button } from "./button";
import { useAuth } from "../middlewares/context/authContext";

export const SideBar = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const menu = [{ label: "Dashboard", onClick: () => navigate("/dashboard") }];
  return (
    <section className="border-2 border-red-500 h-screen">
      <div className="p-4">
        <h1 className="text-5xl font-bold">ToDo List</h1>
        <p className="ml-2">Hello, {localStorage.getItem("user")}</p>
      </div>
      <div>
        {menu.map((item, index) => (
          <button key={index} onClick={item.onClick}>
            {item.label}
          </button>
        ))}
      </div>
      <Button label={"Logout"} type={"submit"} onClick={() => logout()} />
    </section>
  );
};
