import React from "react";

type Props = {
  children: React.ReactNode;
};

const layout = async (props: Props) => {
// conditional check 
  return (
   <div>
       {props.children}
   </div>
  )
};

export default layout;