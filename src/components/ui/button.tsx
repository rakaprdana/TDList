interface ButtonType {
  label: string;
  type: "submit" | "button";
  onClick?: () => void;
}

export const Button = ({ label, type, onClick }: ButtonType) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="flex w-full  justify-center rounded-md bg-primary px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {label}
    </button>
  );
};
