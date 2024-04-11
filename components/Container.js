import Column from "./Column";

export default function Container({ children }) {
  return <Column className="flex-1 bg-bg">{children}</Column>;
}
