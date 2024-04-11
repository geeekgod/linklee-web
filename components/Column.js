export default function Column({ children, className }) {
  return <div className={`flex flex-col ${className}`}>{children}</div>;
}
