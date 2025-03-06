import { Link } from "react-router-dom";

interface CardButtonType {
  page: string;
  children: string;
}
export const CardButton = ({ page, children }: CardButtonType) => {
  return (
    <Link
      to={page}
      className="bg-card flex items-center max-h-24 text-4xl font-bold w-full rounded-lg p-4 drop-shadow-lg hover:bg-primary hover:text-white transition-all duration-300"
    >
      {children}
    </Link>
  );
};
