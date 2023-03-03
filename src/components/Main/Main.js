import React from "react";
import Introduction from "./Introduction/Introduction";
import { RadarChart } from "../../components/Chart/RadarChart";
import { QualitiesChart } from "../../components/Chart/QualitiesChart";

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
                People graded themselves on a scale of 1-10 for these same qualities. 
                We would have thought that the high match group would have had higher scores for attractive or fun. 
                Surprisingly, people with no matches and high matches graded themselves similarly for all qualities, especially sincere. LOL!
              </p>
            </div>
          </section>

          <section className="main__graph main__graph-three" id="attribute">
            <h2 className="graph__title__primary-goal">
              Qualities Looking for in a Partner:
            </h2>
            <div className="graph__descrition-container">
              <p className="graph__description">
                People with more matches ranked attractive and intelligent as
                slightly more important than people with no matches. On the
                other hand, qualities that are difficult to see on a speed
                dating event such as sincere and ambitious were slightly more
                important to people with no matches. It could be that since it
                is difficult to see these qualities on a speed dating event,
                these singles did not find any matches. Well at least the no
                match and high match singles had one thing in common: they were
                both looking for fun!
              </p>
            </div>
            <div className="graph__bar-container">
              <QualitiesChart />
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

          <section className="main__graph main__graph-four" id="age">
            <h2 className="graph__title__primary-goal">
              Primary Goal in Participating in this Event
            </h2>
            <div className="graph__descrition-container">
              <p className="graph__description">
                People were asked “What is your primary goal in participating in
                this event?“ Interestingly, “Meet new people” and “Fun night
                out” were the most popular goals for people in both the no match
                and high match groups. But in the high match group, more people
                had a goal of a fun night out, 53%. Interestingly, "Get a date"
                and "Looking for a serious relationship", the two goals we would
                have thought would be common were not chosen by any
                participants.
              </p>
            </div>
            <div className="graph__chart-container">
              <RadarChart />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
