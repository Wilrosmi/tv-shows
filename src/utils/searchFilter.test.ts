import searchFilter from "./searchFilter";

const testEpisodes = [
  {
    id: 153327,
    url: "https://www.tvmaze.com/episodes/153327/game-of-thrones-5x07-the-gift",
    name: "The Gift",
    season: 5,
    number: 7,
    type: "regular",
    airdate: "2015-05-24",
    airtime: "21:00",
    airstamp: "2015-05-25T01:00:00+00:00",
    runtime: 60,
    rating: {
      average: 7.9,
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_landscape/11/27535.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/11/27535.jpg",
    },
    summary:
      "<p>Jon prepares for conflict. Sansa tries to talk to Theon. Brienne waits for a sign. Stannis remains stubborn. Jaime attempts to reconnect with family.</p><p><br><br></p>",
    _links: {
      self: {
        href: "https://api.tvmaze.com/episodes/153327",
      },
    },
  },
  {
    id: 155299,
    url: "https://www.tvmaze.com/episodes/155299/game-of-thrones-5x08-hardhome",
    name: "Hardhome",
    season: 5,
    number: 8,
    type: "regular",
    airdate: "2015-05-31",
    airtime: "21:00",
    airstamp: "2015-06-01T01:00:00+00:00",
    runtime: 60,
    rating: {
      average: 9.2,
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_landscape/11/28151.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/11/28151.jpg",
    },
    summary:
      "<p>Arya makes progress in her training. Sansa confronts an old friend. Cersei struggles. Jon travels.</p><p><br><br></p>",
    _links: {
      self: {
        href: "https://api.tvmaze.com/episodes/155299",
      },
    },
  },
  {
    id: 160040,
    url: "https://www.tvmaze.com/episodes/160040/game-of-thrones-5x09-the-dance-of-dragons",
    name: "The Dance of Dragons",
    season: 5,
    number: 9,
    type: "regular",
    airdate: "2015-06-07",
    airtime: "21:00",
    airstamp: "2015-06-08T01:00:00+00:00",
    runtime: 60,
    rating: {
      average: 7.9,
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_landscape/11/29160.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/11/29160.jpg",
    },
    summary:
      "<p>Stannis confronts a troubling decision. Jon returns to The Wall. Mace visits the Iron Bank. Arya encounters someone from her past. Dany reluctantly oversees a traditional celebration of athleticism.</p>",
    _links: {
      self: {
        href: "https://api.tvmaze.com/episodes/160040",
      },
    },
  },
  {
    id: 162186,
    url: "https://www.tvmaze.com/episodes/162186/game-of-thrones-5x10-mothers-mercy",
    name: "Mother's Mercy",
    season: 5,
    number: 10,
    type: "regular",
    airdate: "2015-06-14",
    airtime: "21:00",
    airstamp: "2015-06-15T01:00:00+00:00",
    runtime: 60,
    rating: {
      average: 7.9,
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_landscape/12/30012.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/12/30012.jpg",
    },
    summary:
      "<p>Cersei seeks forgiveness; Jon faces a new challenge; Arya plots to cross a name off her list; Tyrion sees a familiar face; and Daenerys finds herself surrounded by strangers.</p>",
    _links: {
      self: {
        href: "https://api.tvmaze.com/episodes/162186",
      },
    },
  },
];

const nameTest = [
  {
    id: 153327,
    url: "https://www.tvmaze.com/episodes/153327/game-of-thrones-5x07-the-gift",
    name: "The Gift",
    season: 5,
    number: 7,
    type: "regular",
    airdate: "2015-05-24",
    airtime: "21:00",
    airstamp: "2015-05-25T01:00:00+00:00",
    runtime: 60,
    rating: {
      average: 7.9,
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_landscape/11/27535.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/11/27535.jpg",
    },
    summary:
      "<p>Jon prepares for conflict. Sansa tries to talk to Theon. Brienne waits for a sign. Stannis remains stubborn. Jaime attempts to reconnect with family.</p><p><br><br></p>",
    _links: {
      self: {
        href: "https://api.tvmaze.com/episodes/153327",
      },
    },
  },
];

const summaryTest = [
  {
    id: 155299,
    url: "https://www.tvmaze.com/episodes/155299/game-of-thrones-5x08-hardhome",
    name: "Hardhome",
    season: 5,
    number: 8,
    type: "regular",
    airdate: "2015-05-31",
    airtime: "21:00",
    airstamp: "2015-06-01T01:00:00+00:00",
    runtime: 60,
    rating: {
      average: 9.2,
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_landscape/11/28151.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/11/28151.jpg",
    },
    summary:
      "<p>Arya makes progress in her training. Sansa confronts an old friend. Cersei struggles. Jon travels.</p><p><br><br></p>",
    _links: {
      self: {
        href: "https://api.tvmaze.com/episodes/155299",
      },
    },
  },
];

test("empty search term shows all episodes", () => {
  expect(searchFilter("", testEpisodes)).toStrictEqual(testEpisodes);
});

test("name match", () => {
  expect(searchFilter("gIf", testEpisodes)).toStrictEqual(nameTest);
});

test("summary match", () => {
  expect(searchFilter("progress", testEpisodes)).toStrictEqual(summaryTest);
});
