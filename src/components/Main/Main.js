import React from "react";
import Introduction from "./Introduction/Introduction.js";
export function Main() {
  return (
    <>
      <Introduction />
      <main className="main">
        <div className="main__container">
          <section className="main__graph-one">Section 1</section>
          <section className="main__graph-two">Section 2</section>
          <section className="main__graph-three">Section 3</section>
        </div>
      </main>
    </>
  );
}
