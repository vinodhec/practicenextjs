import React from "react";

function page() {
  return (
    <div className="p-4">
      <h1 className="font-bold text-xl">Contact us</h1>
      <form>
        <input type="text" name="name"></input>
        <input type="email" name="email"></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default page;
