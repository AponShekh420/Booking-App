import React from "react";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className="max-w-[1345px] w-10/12 m-auto">
      {children}
    </div>
  )
};

export default Wrapper;
