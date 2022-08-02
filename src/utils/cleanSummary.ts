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

function cleanSummary(summary: string): string {
  return "hello";
}

export default cleanSummary;
