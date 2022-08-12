import cleanSummary from "./cleanSummary";

const singleTagsBefore =
  "<p>Lord Eddard Stark, ruler of the North, is summoned to court by his old friend, King Robert Baratheon, to serve as the King's Hand. Eddard reluctantly agrees after learning of a possible threat to the King's life. Eddard's bastard son Jon Snow must make a painful decision about his own future, while in the distant east Viserys Targaryen plots to reclaim his father's throne, usurped by Robert, by selling his sister in marriage.</p>";

const singleTagsAfter =
  "Lord Eddard Stark, ruler of the North, is summoned to court by his old friend, King Robert Baratheon, to serve as the King's Hand. Eddard reluctantly agrees after learning of a possible threat to the King's life. Eddard's bastard son Jon Snow must make a painful decision about his own future, while in the distant east Viserys Targaryen plots to reclaim his father's throne, usurped by Robert, by selling his sister in marriage.";

const multipleTagsBefore =
  "<p>Jon prepares for conflict. Sansa tries to talk to Theon. Brienne waits for a sign. Stannis remains stubborn. Jaime attempts to reconnect with family.</p><p><br><br></p>";

const multipleTagsAfter =
  "Jon prepares for conflict. Sansa tries to talk to Theon. Brienne waits for a sign. Stannis remains stubborn. Jaime attempts to reconnect with family.";

test("removes single tags", () => {
  expect(cleanSummary(singleTagsBefore)).toBe(singleTagsAfter);
});

test("removes multiple tags", () => {
  expect(cleanSummary(multipleTagsBefore)).toBe(multipleTagsAfter);
});
