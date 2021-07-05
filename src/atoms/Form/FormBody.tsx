import React from "react";


const FormBody: React.FC = ({ children }) => (
  <div className="flex justify-between align-start rounded-md bg-gray-700 text-white p-4">
    {children}
  </div>
);
export default FormBody;
