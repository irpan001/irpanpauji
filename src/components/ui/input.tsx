import React from "react";

export type InputProps = {
  label?: string;
  error?: string | null;
  className?: string;
} & React.ComponentProps<"input">;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", id, name, ...rest }, ref) => {
    const inputId = id ?? name ?? undefined;

    return (
      <div className="flex flex-col gap-2 w-full min-w-0">
        {label && (
          <label htmlFor={inputId} className="text-base font-semibold text-base-white">
            {label}
          </label>
        )}

        <input
          id={inputId}
          name={name}
          ref={ref}
          {...rest}
          className={
            `h-14 w-full min-w-0 rounded-2xl border p-4 text-neutral-200 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-200 ` +
            (error
              ? "border-red-500 focus:border-red-500"
              : "border-neutral-400 hover:border-primary-200 focus:border-primary-200") +
            " " +
            className
          }
        />

        {error && <div role="alert" className="text-sm text-red-400 mt-1">{error}</div>}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
