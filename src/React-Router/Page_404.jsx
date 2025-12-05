import React from "react";
import { Link } from "react-router";

const Page_404 = () => {
  return (
    <div className="col-start-2 col-span-3 flex flex-col text-4xl items-center">
      <img
        src="https://support.heberjahiz.com/hc/article_attachments/21013076295570"
        alt="404 Page Not Found"
        className="w-[700px] select-none"
      />
      <Link
        to="/"
        className="hover:bg-gray-200 px-4 py-3 transition-colors duration-300 rounded-lg "
      >
        🔙 Go Back
      </Link>
    </div>
  );
};

export default Page_404;
