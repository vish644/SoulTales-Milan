import React from "react";

const Input = ({
  label,
  placeholder,
  subDescription,
  type = "text",
  options = [],
  name,
  register,
  rules = {},
  error,
}) => {
  if (type === "checkbox") {
    return (
      <div className="flex flex-col gap-2">
        {label && <label className="text-sm">{label}</label>}
        {subDescription && (
          <p className="text-xs text-white/60">{subDescription}</p>
        )}
        <div className="flex flex-col gap-2">
          {options.map((option, index) => (
            <label
              key={index}
              className="flex items-center gap-2 text-sm cursor-pointer"
            >
              <input
                type="checkbox"
                value={option}
                className="accent-white"
                {...register(name, rules)}
              />
              {option}
            </label>
          ))}
        </div>
        {error && <p className="text-xs text-red-400">{error.message}</p>}
      </div>
    );
  }

  if (type === "textarea") {
    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label htmlFor={name} className="text-sm">
            {label}
          </label>
        )}
        {subDescription && (
          <p className="text-xs text-white/60">{subDescription}</p>
        )}
        <textarea
          id={name}
          placeholder={placeholder}
          rows={4}
          className="bg-transparent border-b border-white/20 text-sm py-2 outline-none"
          {...register(name, rules)}
        />
        {error && <p className="text-xs text-red-400">{error.message}</p>}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={name} className="text-sm">
          {label}
        </label>
      )}
      {subDescription && (
        <p className="text-xs text-white/60 ">{subDescription}</p>
      )}
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        className="bg-transparent border-b border-white/20 text-sm py-2 outline-none"
        {...register(name, rules)}
      />
      {error && <p className="text-xs text-red-400">{error.message}</p>}
    </div>
  );
};

export default Input;
