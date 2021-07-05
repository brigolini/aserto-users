import React from 'react';


const Layout: React.FC = ({children}) => (
  <div className="w-screen h-screen">
    <div className="p-2 flex justify-center">
      {children}
    </div>
  </div>
);

export default Layout;
