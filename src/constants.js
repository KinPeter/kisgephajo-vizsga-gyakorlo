import hsz from "./questions/hsz_output.json";
import hi from "./questions/hi_output.json";

export const QuestionSets = {
  HSZ: {
    name: "Hajózási Szabályzat",
    storageKey: "pkhajo-hsz",
    imageFolder: "hsz",
    questions: hsz,
  },
  HI: {
    name: "Hajózási Ismeretek - Kisgéphajó",
    storageKey: "pkhajo-hi",
    imageFolder: "hi",
    questions: hi,
  },
};
