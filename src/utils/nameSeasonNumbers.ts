function nameSeasonNumbers(seasonNum: number, episodeNum: number): string {
  return "S" + toTwoDigits(seasonNum) + "E" + toTwoDigits(episodeNum);
}

function toTwoDigits(input: number): string {
  return input < 10 ? `0${input}` : `${input}`;
}

export default nameSeasonNumbers;
