const movies = [
  {
    adult: false,
    backdrop_path: "/azIbQpeKKNF9r85lBSRrNnMK0Si.jpg",
    genre_ids: [12, 28, 878],
    id: 1891,
    original_language: "en",
    original_title: "The Empire Strikes Back",
    overview:
      "The epic saga continues as Luke Skywalker, in hopes of defeating the evil Galactic Empire, learns the ways of the Jedi from aging master Yoda. But Darth Vader is more determined than ever to capture Luke. Meanwhile, rebel leader Princess Leia, cocky Han Solo, Chewbacca, and droids C-3PO and R2-D2 are thrown into various stages of capture, betrayal and despair.",
    popularity: 27.449,
    poster_path: "/2mObg4LWxo4BicFUykGm6oauxHt.jpg",
    release_date: "1980-05-20",
    title: "The Empire Strikes Back",
    video: false,
    vote_average: 8.4,
    vote_count: 13486,
  },
  {
    adult: false,
    backdrop_path: "/dVr11o9or7AS8AMPfwjSpEU83iU.jpg",
    genre_ids: [18, 10752],
    id: 423,
    original_language: "en",
    original_title: "The Pianist",
    overview:
      "The true story of pianist Władysław Szpilman's experiences in Warsaw during the Nazi occupation. When the Jews of the city find themselves forced into a ghetto, Szpilman finds work playing in a café; and when his family is deported in 1942, he stays behind, works for a while as a laborer, and eventually goes into hiding in the ruins of the war-torn city.",
    popularity: 31.91,
    poster_path: "/2hFvxCCWrTmCYwfy7yum0GKRi3Y.jpg",
    release_date: "2002-09-17",
    title: "The Pianist",
    video: false,
    vote_average: 8.4,
    vote_count: 6760,
  },
  {
    adult: false,
    backdrop_path: "/fRGxZuo7jJUWQsVg9PREb98Aclp.jpg",
    genre_ids: [18, 10402],
    id: 244786,
    original_language: "en",
    original_title: "Whiplash",
    overview:
      "Under the direction of a ruthless instructor, a talented young drummer begins to pursue perfection at any cost, even his humanity.",
    popularity: 52.14,
    poster_path: "/oPxnRhyAIzJKGUEdSiwTJQBa3NM.jpg",
    release_date: "2014-10-10",
    title: "Whiplash",
    video: false,
    vote_average: 8.4,
    vote_count: 11525,
  },
  {
    adult: false,
    backdrop_path: "/pcDc2WJAYGJTTvRSEIpRZwM3Ola.jpg",
    genre_ids: [28, 12, 14, 878],
    id: 791373,
    original_language: "en",
    original_title: "Zack Snyder's Justice League",
    overview:
      "Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.",
    popularity: 485.113,
    poster_path: "/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg",
    release_date: "2021-03-18",
    title: "Zack Snyder's Justice League",
    video: false,
    vote_average: 8.4,
    vote_count: 6768,
  },
  {
    adult: false,
    backdrop_path: "/o4Thn9ooTZAZOYrlbWgVB20weSf.jpg",
    genre_ids: [18],
    id: 73,
    original_language: "en",
    original_title: "American History X",
    overview:
      "Derek Vineyard is paroled after serving 3 years in prison for killing two African-American men. Through his brother, Danny Vineyard's narration, we learn that before going to prison, Derek was a skinhead and the leader of a violent white supremacist gang that committed acts of racial crime throughout L.A. and his actions greatly influenced Danny. Reformed and fresh out of prison, Derek severs contact with the gang and becomes determined to keep Danny from going down the same violent path as he did.",
    popularity: 41.778,
    poster_path: "/c2gsmSQ2Cqv8zosqKOCwRS0GFBS.jpg",
    release_date: "1998-07-01",
    title: "American History X",
    video: false,
    vote_average: 8.4,
    vote_count: 9077,
  },
  {
    adult: false,
    backdrop_path: "/vRQnzOn4HjIMX4LBq9nHhFXbsSu.jpg",
    genre_ids: [12, 14, 28],
    id: 120,
    original_language: "en",
    original_title: "The Lord of the Rings: The Fellowship of the Ring",
    overview:
      "Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed to protect the ringbearer and make sure that the ring arrives at its final destination: Mt. Doom, the only place where it can be destroyed.",
    popularity: 110.356,
    poster_path: "/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    release_date: "2001-12-18",
    title: "The Lord of the Rings: The Fellowship of the Ring",
    video: false,
    vote_average: 8.4,
    vote_count: 19923,
  },
  {
    adult: false,
    backdrop_path: "/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    genre_ids: [12, 18, 878],
    id: 157336,
    original_language: "en",
    original_title: "Interstellar",
    overview:
      "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
    popularity: 120.634,
    poster_path: "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    release_date: "2014-11-05",
    title: "Interstellar",
    video: false,
    vote_average: 8.3,
    vote_count: 26950,
  },
  {
    adult: false,
    backdrop_path: "/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
    genre_ids: [28, 878, 12],
    id: 27205,
    original_language: "en",
    original_title: "Inception",
    overview:
      "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\", the implantation of another person's idea into a target's subconscious.",
    popularity: 162.259,
    poster_path: "/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    release_date: "2010-07-15",
    title: "Inception",
    video: false,
    vote_average: 8.3,
    vote_count: 30136,
  },
  {
    adult: false,
    backdrop_path: "/nS4picOwj15APKzJeBCk6EBcMG5.jpg",
    genre_ids: [12, 14, 28],
    id: 121,
    original_language: "en",
    original_title: "The Lord of the Rings: The Two Towers",
    overview:
      "Frodo and Sam are trekking to Mordor to destroy the One Ring of Power while Gimli, Legolas and Aragorn search for the orc-captured Merry and Pippin. All along, nefarious wizard Saruman awaits the Fellowship members at the Orthanc Tower in Isengard.",
    popularity: 85.761,
    poster_path: "/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg",
    release_date: "2002-12-18",
    title: "The Lord of the Rings: The Two Towers",
    video: false,
    vote_average: 8.3,
    vote_count: 17222,
  },
  {
    adult: false,
    backdrop_path: "/i5H7zusQGsysGQ8i6P361Vnr0n2.jpg",
    genre_ids: [80, 9648, 53],
    id: 807,
    original_language: "en",
    original_title: "Se7en",
    overview:
      'Two homicide detectives are on a desperate hunt for a serial killer whose crimes are based on the "seven deadly sins" in this dark and haunting film that takes viewers from the tortured remains of one victim to the next. The seasoned Det. Sommerset researches each sin in an effort to get inside the killer\'s mind, while his novice partner, Mills, scoffs at his efforts to unravel the case.',
    popularity: 46.655,
    poster_path: "/69Sns8WoET6CfaYlIkHbla4l7nC.jpg",
    release_date: "1995-09-22",
    title: "Se7en",
    video: false,
    vote_average: 8.3,
    vote_count: 15976,
  },
  {
    adult: false,
    backdrop_path: "/mfwq2nMBzArzQ7Y9RKE8SKeeTkg.jpg",
    genre_ids: [80, 18, 53, 27],
    id: 274,
    original_language: "en",
    original_title: "The Silence of the Lambs",
    overview:
      "Clarice Starling is a top student at the FBI's training academy. Jack Crawford wants Clarice to interview Dr. Hannibal Lecter, a brilliant psychiatrist who is also a violent psychopath, serving life behind bars for various acts of murder and cannibalism. Crawford believes that Lecter may have insight into a case and that Starling, as an attractive young woman, may be just the bait to draw him out.",
    popularity: 14.493,
    poster_path: "/rplLJ2hPcOQmkFhTqUte0MkEaO2.jpg",
    release_date: "1991-02-01",
    title: "The Silence of the Lambs",
    video: false,
    vote_average: 8.3,
    vote_count: 12530,
  },
  {
    adult: false,
    backdrop_path: "/jRJrQ72VLyEnVsvwfep8Xjlvu8c.jpg",
    genre_ids: [80, 18, 28],
    id: 101,
    original_language: "en",
    original_title: "Léon: The Professional",
    overview:
      "Léon, the top hit man in New York, has earned a rep as an effective \"cleaner\". But when his next-door neighbors are wiped out by a loose-cannon DEA agent, he becomes the unwilling custodian of 12-year-old Mathilda. Before long, Mathilda's thoughts turn to revenge, and she considers following in Léon's footsteps.",
    popularity: 45.025,
    poster_path: "/wHqGb8J6tXBVwjqWooGMtNEjs2A.jpg",
    release_date: "1994-09-14",
    title: "Léon: The Professional",
    video: false,
    vote_average: 8.3,
    vote_count: 11405,
  },
  {
    adult: false,
    backdrop_path: "/tJRToZBfb52NhF6SMGAe0bWQc6z.jpg",
    genre_ids: [18],
    id: 207,
    original_language: "en",
    original_title: "Dead Poets Society",
    overview:
      "At an elite, old-fashioned boarding school in New England, a passionate English teacher inspires his students to rebel against convention and seize the potential of every day, courting the disdain of the stern headmaster.",
    popularity: 25.062,
    poster_path: "/ai40gM7SUaGA6fthvsd87o8IQq4.jpg",
    release_date: "1989-06-02",
    title: "Dead Poets Society",
    video: false,
    vote_average: 8.3,
    vote_count: 8578,
  },
  {
    adult: false,
    backdrop_path: "/fq3wyOs1RHyz2yfzsb4sck7aWRG.jpg",
    genre_ids: [12, 35, 878, 10751],
    id: 105,
    original_language: "en",
    original_title: "Back to the Future",
    overview:
      "Eighties teenager Marty McFly is accidentally sent back in time to 1955, inadvertently disrupting his parents' first meeting and attracting his mother's romantic interest. Marty must repair the damage to history by rekindling his parents' romance and - with the help of his eccentric inventor friend Doc Brown - return to 1985.",
    popularity: 56.365,
    poster_path: "/7lyBcpYB0Qt8gYhXYaEZUNlNQAv.jpg",
    release_date: "1985-07-03",
    title: "Back to the Future",
    video: false,
    vote_average: 8.3,
    vote_count: 15731,
  },
  {
    adult: false,
    backdrop_path: "/9Qs9oyn4iE8QtQjGZ0Hp2WyYNXT.jpg",
    genre_ids: [18, 10752],
    id: 28,
    original_language: "en",
    original_title: "Apocalypse Now",
    overview:
      'At the height of the Vietnam war, Captain Benjamin Willard is sent on a dangerous mission that, officially, "does not exist, nor will it ever exist." His goal is to locate - and eliminate - a mysterious Green Beret Colonel named Walter Kurtz, who has been leading his personal army on illegal guerrilla missions into enemy territory.',
    popularity: 30.714,
    poster_path: "/gQB8Y5RCMkv2zwzFHbUJX3kAhvA.jpg",
    release_date: "1979-08-15",
    title: "Apocalypse Now",
    video: false,
    vote_average: 8.3,
    vote_count: 6112,
  },
  {
    adult: false,
    backdrop_path: "/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
    genre_ids: [12, 878, 28],
    id: 299534,
    original_language: "en",
    original_title: "Avengers: Endgame",
    overview:
      "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
    popularity: 218.075,
    poster_path: "/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    release_date: "2019-04-24",
    title: "Avengers: Endgame",
    video: false,
    vote_average: 8.3,
    vote_count: 19393,
  },
  {
    adult: false,
    backdrop_path: "/hKNGaQFzg4RxyMWIGGnYGW5b2Xh.jpg",
    genre_ids: [18, 53, 9648, 28],
    id: 670,
    original_language: "ko",
    original_title: "올드보이",
    overview:
      "With no clue how he came to be imprisoned, drugged and tortured for 15 years, a desperate businessman seeks revenge on his captors.",
    popularity: 28.144,
    poster_path: "/pWDtjs568ZfOTMbURQBYuT4Qxka.jpg",
    release_date: "2003-11-21",
    title: "Oldboy",
    video: false,
    vote_average: 8.3,
    vote_count: 6195,
  },
  {
    adult: false,
    backdrop_path: "/lmZFxXgJE3vgrciwuDib0N8CfQo.jpg",
    genre_ids: [12, 28, 878],
    id: 299536,
    original_language: "en",
    original_title: "Avengers: Infinity War",
    overview:
      "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
    popularity: 317.107,
    poster_path: "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    release_date: "2018-04-25",
    title: "Avengers: Infinity War",
    video: false,
    vote_average: 8.3,
    vote_count: 22979,
  },
  {
    adult: false,
    backdrop_path: "/bGksau9GGu0uJ8DJQ8DYc9JW5LM.jpg",
    genre_ids: [18, 35],
    id: 77338,
    original_language: "fr",
    original_title: "Intouchables",
    overview:
      "A true story of two men who should never have met – a quadriplegic aristocrat who was injured in a paragliding accident and a young man from the projects.",
    popularity: 82.489,
    poster_path: "/ttx4GQl0azO6NJFWj4XNZCQOY7S.jpg",
    release_date: "2011-11-02",
    title: "The Intouchables",
    video: false,
    vote_average: 8.3,
    vote_count: 13928,
  },
  {
    adult: false,
    backdrop_path: "/wXsQvli6tWqja51pYxXNG1LFIGV.jpg",
    genre_ids: [10751, 16, 18],
    id: 8587,
    original_language: "en",
    original_title: "The Lion King",
    overview:
      "A young lion prince is cast out of his pride by his cruel uncle, who claims he killed his father. While the uncle rules with an iron paw, the prince grows up beyond the Savannah, living by a philosophy: No worries for the rest of your days. But when his past comes to haunt him, the young prince must decide his fate: Will he remain an outcast or face his demons and become what he needs to be?",
    popularity: 143.093,
    poster_path: "/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
    release_date: "1994-06-23",
    title: "The Lion King",
    video: false,
    vote_average: 8.3,
    vote_count: 14557,
  },
];
