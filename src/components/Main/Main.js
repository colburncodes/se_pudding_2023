import React from "react";
import Introduction from "./Introduction/Introduction";
import { Goals } from "../Goals/Goals";
import { Chart } from "../Chart/Chart";

export function Main() {
  return (
    <>
      <Introduction />
      <main className="main">
        <div className="main__container">
          <section className="main__graph main__graph-one" id="racechart">
            <div className="graph__descrition-container">
              <h2 className="graph__title">Race :</h2>
              <p className="graph__description">
                It's important to understand that race is a complex topic, and
                there is no single definition that can accurately capture the
                experiences and identities of all individuals. However, in a
                speed dating setting, it can be helpful to have a basic
                understanding of the racial backgrounds and cultures of the
                people you may meet. You may encounter individuals of Asian,
                African, Latino, European, or other races.
              </p>
            </div>
          </section>

          <section className="main__graph main__graph-two" id="selfgrading">
            <h2 className="graph__title">Self Grading :</h2>
            <div className="graph__descrition-container">
              <p className="graph__description">
                It's important to understand that race is a complex topic, and
                there is no single definition that can accurately capture the
                experiences and identities of all individuals. However, in a
                speed dating setting, it can be helpful to have a basic
                understanding of the racial backgrounds and cultures of the
                people you may meet. You may encounter individuals of Asian,
                African, Latino, European, or other races.
              </p>
            </div>
            {/* <Goals /> */}
          </section>

          <section className="main__graph main__graph-three" id="attribute">
            <div className="graph__descrition-container">
              <h2 className="graph__title">Atrribute:</h2>
              <p className="graph__description">
                It's important to understand that race is a complex topic, and
                there is no single definition that can accurately capture the
                experiences and identities of all individuals. However, in a
                speed dating setting, it can be helpful to have a basic
                understanding of the racial backgrounds and cultures of the
                people you may meet. You may encounter individuals of Asian,
                African, Latino, European, or other races.
              </p>
            </div>
          </section>

          <section className="main__graph main__graph-four" id="age">
            <h2 className="graph__title">Age :</h2>
            <div className="graph__descrition-container">
              <p className="graph__description">
                It's important to understand that race is a complex topic, and
                there is no single definition that can accurately capture the
                experiences and identities of all individuals. However, in a
                speed dating setting, it can be helpful to have a basic
                understanding of the racial backgrounds and cultures of the
                people you may meet. You may encounter individuals of Asian,
                African, Latino, European, or other races.
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
