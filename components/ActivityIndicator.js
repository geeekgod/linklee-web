function ActivityIndicator({ className, mode = "dark", size = "large" }) {
    const getSize = () => {
      if (size === "small") return "h-5 w-5";
      else if (size === "medium") return "h-8 w-8";
      else if (size === "large") return "h-10 w-10";
    };
  
    return mode === "light" ? (
      <div
        className={`animate-spin rounded-full border-b-2 border-black ${getSize()} ${className}`}
      />
    ) : (
      <div
        className={`animate-spin rounded-full border-b-2 border-white ${getSize()} ${className}`}
      />
    );
  }
  
  export default ActivityIndicator;