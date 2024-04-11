export default function Center({ children, style }) {
  return (
    <div className={`flex flex-1 md:items-center md:justify-center ${style}`}>
      {children}
    </div>
  );
}
