import React from "react";
import list from "../../public/list.json";
function freebook() {
  const filterData=list.filter((data) => data.category === "free");
  console.log(filterData);
  return (
    <>
    <div>
      <h1>Free Offered Courses </h1>
    </div>
    </>
  );
}

export default freebook;
