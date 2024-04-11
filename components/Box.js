import Column from "./Column";

export default function Box({ children, className }) {
  return (
    <Column
      className={`flex flex-1 shadow-xl shadow-black/15 md:flex-none md:rounded-xl md:border md:border-gray-200 md:border-opacity-80 md:bg-white ${className}`}
    >
      {children}
    </Column>
  );
}
