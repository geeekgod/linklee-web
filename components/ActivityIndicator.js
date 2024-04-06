import { useMemo } from "react";

export default function ActivityIndicator({
  className,
  mode = "dark",
  size = "large",
}) {
  const useSize = useMemo(() => {
    if (size === "small") return "h-5 w-5";
    else if (size === "medium") return "h-8 w-8";
    else if (size === "large") return "h-10 w-10";
  }, [size]);

  return mode === "dark" ? (
    <div
      className={`animate-spin rounded-full border-b-2 border-black ${useSize} ${className}`}
    />
  ) : (
    <div
      className={`h-10 w-10 animate-spin rounded-full border-b-2 border-white ${useSize} ${className}`}
    />
  );
}
