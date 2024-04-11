export default function Row({ children, className }) {
  return <div className={`flex ${className}`}>{children}</div>;
}
