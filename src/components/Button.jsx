import React from "react";

function Button({ children, className = "", ...props }) {
  return (
    <button
      className={"cursor-pointer w-[17rem] h-[2.8125rem] flex justify-center items-center rounded-[1.875rem] bg-[#F79030] " +
        "text-white text-[1.25rem] font-semibold " +
        className}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
