import React from 'react';


const Layout:React.FC = ({children}) => (
  <div className="w-screen h-screen bg-green-100">
    {children}
  </div>
);

export default Layout;
