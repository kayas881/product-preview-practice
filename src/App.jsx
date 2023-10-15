import React from "react";
import Image from "./assets/components/Image";
import Description from "./assets/components/Description";
const App = () => {
  return (
    <div className="md:flex bg-Cream justify-center h-screen max-md:flex-col max-md:items-start ">
      <Image />
      <Description />
    </div>
  );
};

export default App;
