export default function cleanSummary(summary: string): string {
  let tagSwitch: 0 | 1 = 1;
  let outputString = "";
  if (typeof summary != "string") {
    return outputString;
  }
  for (const char of summary) {
    if (char === "<") {
      tagSwitch = 0;
    } else if (char === ">") {
      tagSwitch = 1;
    } else if (tagSwitch === 1) {
      outputString += char;
    }
  }
  return outputString;
}
