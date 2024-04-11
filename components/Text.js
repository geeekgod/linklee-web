export default function Text({ children, className }) {
  return <p className={`leading-none ${className}`}>{children}</p>;
}
