import { useNavigate } from "react-router-dom";
import { Button } from "./button";

export const SideBar = () => {
  const navigate = useNavigate();
  const menu = [{ label: "Dashboard", onClick: () => navigate("/dashboard") }];
  return (
    <section className="border-2 border-red-500 h-screen">
      <div>
        <h1>ToDo List</h1>
        <p>Hello, {localStorage.getItem("user")}</p>
      </div>
      <div>
        {menu.map((item, index) => (
          <button key={index} onClick={item.onClick}>
            {item.label}
          </button>
        ))}
      </div>
      <Button label={"Logout"} type={"submit"} />
    </section>
  );
};
