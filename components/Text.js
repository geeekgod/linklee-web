export default function Text({ children, className, onClick }) {
  return <p onClick={onClick} className={`leading-none ${className}`}>{children}</p>;
}
