import ActivityIndicator from "./ActivityIndicator";

export default function Button({
  children,
  className,
  disabled,
  icon,
  loading,
  onClick,
  textClassName,
}) {
  return (
    <div
      className={`flex items-center justify-center rounded-md
      ${disabled || loading ? "bg-black/50" : "bg-black"} 
      ${disabled || loading ? "bg-black/50" : "hover:bg-black/80"}
      ${disabled || loading ? "cursor-default" : "cursor-pointer"}
      ${!className?.includes("h-") ? "h-[44px]" : null}
      ${className}
      `}
      onClick={() => {
        if (!disabled && !loading && onClick) {
          onClick();
        }
      }}
    >
      {loading ? (
        <ActivityIndicator mode="light" size="small" />
      ) : (
        <>
          {icon ? icon : null}

          <p
            className={`flex items-center justify-center text-sm font-medium leading-tight text-white ${textClassName}`}
          >
            {children}
          </p>
        </>
      )}
    </div>
  );
}
