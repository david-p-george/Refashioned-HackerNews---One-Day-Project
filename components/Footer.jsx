import React from "react";

// This component is just for displaying my name. I could have just added this as a div in Layout component though.
const Footer = () => {
  return (
    <div className="mt-5 w-full h-fit flex bg-redCrayola rounded-lg flex justify-center items-center">
      <p className="font-semibold text-2xl font-ptSans pt-8 pb-8">
        Built by @david-p-george
      </p>
    </div>
  );
};

export default Footer;
