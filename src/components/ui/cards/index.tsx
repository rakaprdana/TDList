import { Link } from "react-router-dom";
interface CardTypes {
  label: string;
  navigate: string;
}
export const Card = ({ label, navigate }: CardTypes) => {
  return (
    <Link
      to={navigate}
      className="bg-white flex items-center p-4 w-full max-w-[28rem] rounded-xl shadow-xl hover:bg-primary hover:text-white active:scale-90 transition-all duration-300"
    >
      <h1 className="text-3xl font-bold">{label}</h1>
    </Link>
  );
};
