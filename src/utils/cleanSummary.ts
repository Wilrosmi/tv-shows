/*
Maybe create a helper function to combine the two for loops
define cleanSummary
    input: summary - string
    output - string

    let indexStart = 0;
    let indexEnd = length of summary;
    for i from 0 to length of summary: 
        if (summary[i] is ">" && summary[i + 1] != "<") {
            indexStart = i + 1
        }
    for i from length of summary to 0: 
        if (summary[i] is "<" && summary[i-1] != ">") {
            indexEnd = i - 1
        }
    return summary between indexStart and indexEnd

*/

export default function cleanSummary(summary: string): string {
  let indexStart = 0;
  let indexEnd = summary.length;

  for (let i = 0; i < summary.length; i++) {
    if (summary[i] === ">" && summary[i + 1] !== "<") {
      indexStart = i + 1;
      break;
    }
  }
  for (let i = summary.length - 1; i >= 0; i--) {
    if (summary[i] === "<" && summary[i - 1] !== ">") {
      indexEnd = i;
      break;
    }
  }

  return summary.slice(indexStart, indexEnd);
}
