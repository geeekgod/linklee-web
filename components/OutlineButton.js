import ActivityIndicator from "./ActivityIndicator";

export default function OutlineButton({
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
      className={`flex items-center justify-center rounded-md border-[1px] bg-white
        ${disabled || loading ? "border-gray-200/50" : "border-gray-200"} 
        ${
          disabled || loading
            ? "border-gray-200/50"
            : "hover:border-gray-200/80"
        }
        ${disabled || loading ? "cursor-default" : "cursor-pointer"}
        ${!className?.includes("h-") ? "h-[44px]" : null}
        ${className}
      `}
      onClick={() => {
        if (!disabled && !loading) {
          onClick();
        }
      }}
    >
      {loading ? (
        <ActivityIndicator size="small" />
      ) : (
        <>
          {icon ? icon : null}

          <p
            className={`text-sm font-medium leading-tight text-black ${textClassName}`}
          >
            {children}
          </p>
        </>
      )}
    </div>
  );
}
