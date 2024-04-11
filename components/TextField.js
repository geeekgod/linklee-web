import { useState } from "react";

import ActivityIndicator from "./ActivityIndicator";

export default function TextField({
  className,
  error = false,
  expandable = false,
  icon,
  label,
  loading = false,
  lowercaseOnly = false,
  maxLength = 1000,
  onFocus,
  onTextChange,
  placeholder,
  prefix,
  required = false,
  value,
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div>
      {label ? (
        <div className="mb-2 text-xs font-normal leading-none text-neutral-700">
          {`${label} ${required ? "*" : ""}`}
        </div>
      ) : null}

      {expandable ? (
        <div className="relative">
          <div
            className={`flex flex-col overflow-hidden rounded-md border-[1px] border-opacity-60 bg-white 
            ${error ? "border-red-500" : focused ? "border-black" : null}
            `}
          >
            <textarea
              className={`max-h-[300px] min-h-[46px] w-full p-3 text-sm text-black text-opacity-60 placeholder:font-light placeholder:text-gray-500/75 focus:outline-none ${className}`}
              maxLength={maxLength}
              onBlur={() => setFocused(false)}
              onFocus={() => {
                if (onFocus) onFocus();
                setFocused(true);
              }}
              onChange={(e) =>
                onTextChange(
                  lowercaseOnly ? e.target.value.toLowerCase() : e.target.value,
                )
              }
              placeholder={placeholder || ""}
              value={value}
            />

            {maxLength !== 1000 ? (
              <p
                className={`m-2 self-end text-[10px] font-normal leading-none text-black text-opacity-40`}
              >
                {`${value?.length}/${maxLength}`}
              </p>
            ) : null}
          </div>
        </div>
      ) : (
        <div className="relative">
          <div
            className={`flex flex-row items-center overflow-hidden rounded-md border-[1px] border-opacity-60 bg-white px-3 
            ${error ? "border-red-500" : focused ? "border-black" : null}
            `}
          >
            <div>{icon ? icon : null}</div>

            {prefix ? (
              <div className="mr-[1px] text-center text-sm font-normal leading-none text-black text-opacity-60">
                {prefix}
              </div>
            ) : null}

            <input
              className={`min-h-[46px] w-full text-sm text-black text-opacity-60 placeholder:font-light placeholder:text-gray-500/75 focus:outline-none ${className}`}
              maxLength={maxLength}
              onBlur={() => setFocused(false)}
              onFocus={() => {
                if (onFocus) onFocus();
                setFocused(true);
              }}
              onChange={(e) =>
                onTextChange(
                  lowercaseOnly ? e.target.value.toLowerCase() : e.target.value,
                )
              }
              placeholder={placeholder || ""}
              value={value}
            />

            {loading ? <ActivityIndicator mode="light" size="small" /> : null}
          </div>

          {maxLength !== 1000 ? (
            <p
              className={`absolute bottom-2 right-2 text-[10px] font-normal leading-none text-black text-opacity-40`}
            >
              {`${value?.length}/${maxLength}`}
            </p>
          ) : null}
        </div>
      )}
    </div>
  );
}
