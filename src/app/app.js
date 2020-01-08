import { Machine, interpret, assign, spawn, send } from "xstate";

// copy following code into https://xstate.js.org/viz/ statechart panel
// to generate interactive chart
export const sc = {
  id: "ME PRESENTING",
  initial: "monolog",
  states: {
    monolog: {
      onDone: "dialog",
      initial: "Explaining What Statechart Is",
      states: {
        "Explaining What Statechart Is": {
          on: { FINISH: "Explaining Why To Use It" },
          type: "parallel",
          states: {
            "Showing How Chart Looks": {},
            "Offer Code Preview": {
              initial: "Hiding How Code Looks",
              states: {
                "Hiding How Code Looks": {
                  on: { TOGGLE: "Showing How Code Looks" }
                },
                "Showing How Code Looks": {
                  on: { TOGGLE: "Hiding How Code Looks" }
                }
              }
            }
          }
        },
        "Explaining Why To Use It": {
          initial: "Exemplifying Problem",
          states: {
            "Exemplifying Problem": {
              on: { GET_CONCLUSION: "statingArguments" }
            },
            statingArguments: {
              on: { SHOW_SOLUTION: "#solution" }
            }
          }
        },
        "Showing How To Use It": {
          id: "solution",
          on: {
            END_SLIDES: "finalNote"
          }
        },
        finalNote: { type: "final" }
      }
    },
    dialog: {
      after: {
        3000: "Saying Goodbye"
      }
    },
    "Saying Goodbye": { type: "final" }
  }
};
const statechartPresentation = Machine(sc);
