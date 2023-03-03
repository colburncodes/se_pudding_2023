import React from "react";
import Introduction from "./Introduction/Introduction";
import { RadarChart } from "../../components/Chart/RadarChart";
import { QualitiesChart } from "../../components/Chart/QualitiesChart";
import {SelfGradingChart} from "../../components/Chart/SelfGradingChart";
import { RaceChart } from "../../components/Chart/RaceChart";


export function Main() {
  return (
    <>
      <Introduction />
      <main className="main">
        <div className="main__container">

        <section className="main__graph main__last-three" id="age">
            <div className="graph__descrition-container focus_description-container">
              <h2 className="graph__title_bar-radar">
                Focus
              </h2>
              <p className="graph__description">
                For our analysis, we explored the responses to 3 survey questions:
              </p>

              <ul>
                <li className="focus__list">
                  <p className="graph__description">
                  What qualities are you looking for in a partner?

                  </p>
                </li>

                <li className="focus__list">
                  <p className="graph__description">
                  How do you grade yourself on those qualities?

                  </p>
                </li>

                <li className="focus__list">
                  <p className="graph__description">
                  What is your primary goal in participating in this event?

                  </p>
                </li>
              </ul>

              <p className="graph__description">
                Since at events #6-9 some of the questions were scaled differently, 
                we excluded these events and focused on 17 events. 
                These included 449 participants for our analysis.
              </p>

              <p className="graph__description">
                Each participant received a total of 0 to 14 matches through all of the events. 
                Most people received 0-2 matches. Only 32 people received 7 matches or more. 
                In fact, 84 people got no matches!!
              </p>
            </div>
            <div className="graph__bar-container graph__focus-container">
              <QualitiesChart />

              <p className="graph__description">
                We compared the responses to these 3 questions of two extreme groups:
                people with no matches (1.2% of participants) and people who received 7 matches or more (0.45%). 
               </p>
            </div>
          </section>

          <section className="main__graph main__graph_Demo-Race" id="racechart">

            <div className="Demo__container">
              <div className="graph__bar-container">
                <RaceChart />
              </div>
              <p className="graph__description">
                Average age was 26, with a range from 18-55. Most singles were college age. Gender was 50% male and 50% female.
              </p>
            </div>
           
            <div className="Race__container">
              <div className="graph__pie-container">
                <RaceChart />
              </div>
              <p className="graph__description">
                Race was grouped into 5 categories. Most participants were European/Caucasian-American (56%) or Asian (24%).
              </p>
            </div>
           
          </section>

          <section className="main__graph main__last-three" id="age">
            <div className="graph__descrition-container">
              <h2 className="graph__title_bar-radar">
                Qualities Looking for in a Partner:
              </h2>
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

          <section className="main__graph main__last-three" id="age">
            <div className="graph__descrition-container">
            <h2 className="graph__title_bar-radar">
              Self Grading
            </h2>
              <p className="graph__description">
              People graded themselves on a scale of 1-10 for these same qualities. 
                We would have thought that the high match group would have had higher scores for attractive or fun. 
                Surprisingly, people with no matches and high matches graded themselves similarly for all qualities, especially sincere. LOL!
              </p>
            </div>
            <div className="graph__bar-container">
            <SelfGradingChart />
            </div>
          </section>

          <section className="main__graph main__last-three" id="age">
            <div className="graph__descrition-container">
            <h2 className="graph__title_bar-radar">
              Primary Goal in Participating in this Event
            </h2>
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
