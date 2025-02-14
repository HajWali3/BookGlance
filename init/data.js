const { ObjectId } = require("mongodb");

const sampleBooks = [
  {
    _id: new ObjectId(), // Assign a unique ID
    title: "The Heirs of the Prophet",
    author: "Wilferd Madelung",
    genre: "Islamic History",
    summary:
      "An analysis of leadership succession in early Islam, focusing on the conflicts that shaped the Muslim world.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGHXkjeWxYKy5CxQUhM1N0-Y0jqjedZm_2gw&s",
    description:
      "An in-depth historical study of the political and religious succession following the Prophet Muhammad.",
  },
  {
    _id: new ObjectId(), // Assign a unique ID
    title: "Beyond Good and Evil",
    author: "Friedrich Nietzsche",
    genre: "Philosophy",
    summary:
      "A critique of traditional morality and a call for a new approach to values and human potential.",
    image: "https://m.media-amazon.com/images/I/61e4sD41Z4L.jpg",
    description:
      "A powerful critique of morality, society, and human nature, pushing for a reevaluation of values.",
  },
];

const chapters = [
  // Chapters for "The Heirs of the Prophet"
  {
    _id: new ObjectId(),
    book_id: sampleBooks[0]._id, // Reference to "The Heirs of the Prophet"
    chapter_number: 1,
    title: "The Succession Crisis",
    summary:
      "Explores the immediate challenges after the Prophet Muhammad’s passing, including disputes over leadership.",
  },
  {
    _id: new ObjectId(),
    book_id: sampleBooks[0]._id,
    chapter_number: 2,
    title: "The Caliphate of Abu Bakr",
    summary:
      "Examines Abu Bakr's rule, his consolidation of power, and challenges like the Ridda Wars.",
  },
  {
    _id: new ObjectId(),
    book_id: sampleBooks[0]._id,
    chapter_number: 3,
    title: "Ali and the Struggle for Legitimacy",
    summary:
      "Discusses Imam Ali’s role in early Islam, his claims to leadership, and the tensions with the Umayyads.",
  },

  // Chapters for "Beyond Good and Evil"
  {
    _id: new ObjectId(),
    book_id: sampleBooks[1]._id, // Reference to "Beyond Good and Evil"
    chapter_number: 1,
    title: "On the Prejudices of Philosophers",
    summary:
      "Challenges traditional philosophical assumptions and introduces the idea of perspectivism.",
  },
  {
    _id: new ObjectId(),
    book_id: sampleBooks[1]._id,
    chapter_number: 2,
    title: "The Free Spirit",
    summary:
      "Explores intellectual independence and the dangers of dogmatic thinking.",
  },
  {
    _id: new ObjectId(),
    book_id: sampleBooks[1]._id,
    chapter_number: 3,
    title: "What is Noble?",
    summary:
      "Discusses Nietzsche’s concept of the ‘will to power’ and critiques herd morality.",
  },
];

module.exports = { data: sampleBooks, chapters };

// const sampleBooks = [
//   {
//     title: "The Alchemist",
//     author: "Paulo Coelho",
//     genre: "Fiction",
//     summary: "",
//     chapters: [
//       {
//         chapter_number: 1,
//         title: "Atticus Defends Tom Robinson",
//         summary:
//           "A journey of self-discovery following a shepherd named Santiago who dreams of finding a hidden treasure in Egypt.",
//       },
//     ],
//     image:
//       "https://media.bookcorner.shop/uploads/original/5c72542c9496b1550996524.jpg",
//     description:
//       "A journey of self-discovery following a shepherd named Santiago who dreams of finding a hidden treasure in Egypt.",
//   },

//   {
//     title: "Sapiens: A Brief History of Humankind",
//     author: "Yuval Noah Harari",
//     genre: "History",
//     image:
//       "https://www.libertybooks.com/image/cache/01%20ZEESHAN/1-100/Sapiens-A-Brief-History-of-Humankind-640x996.jpg?q6",
//     description:
//       "Explores the history and impact of Homo sapiens from ancient times to the modern era.",
//   },
//   {
//     title: "Atomic Habits",
//     author: "James Clear",
//     genre: "Self-Help",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlirQ-wtEQgiS1clKlSklkrmd-KKYQa8LzDg&s",
//     description:
//       "A guide to building good habits and breaking bad ones using small incremental changes.",
//   },
//   {
//     title: "1984",
//     author: "George Orwell",
//     genre: "Dystopian",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-KQeoyF-SAaosRqIUajzShZmywWIxWiAy3A&s",
//     description:
//       "A chilling depiction of a totalitarian society under constant surveillance and control.",
//   },
//   {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     genre: "Classic",
//     image: "https://readings.com.pk/images/books/9780099549482.jpg",
//     description:
//       "A novel about racial injustice and childhood in the Deep South, seen through the eyes of a young girl.",
//   },
//   {
//     title: "The Subtle Art of Not Giving a F*ck",
//     author: "Mark Manson",
//     genre: "Self-Help",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPo-ZIP_4DT4caOeafbIcfNVDQBiW2iLYneg&s",
//     description:
//       "A counterintuitive approach to living a good life by focusing on what truly matters.",
//   },
//   {
//     title: "The Catcher in the Rye",
//     author: "J.D. Salinger",
//     genre: "Classic",
//     image:
//       "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1398034300i/5107.jpg",
//     description:
//       "A rebellious teenager's journey through New York City, questioning society and adulthood.",
//   },
//   {
//     title: "Rich Dad Poor Dad",
//     author: "Robert Kiyosaki",
//     genre: "Finance",
//     image: "https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg",
//     description:
//       "A personal finance book comparing two different mindsets towards money and wealth-building.",
//   },
//   {
//     title: "The Power of Now",
//     author: "Eckhart Tolle",
//     genre: "Spirituality",
//     image: "https://m.media-amazon.com/images/I/61Ij8nLooNL.jpg",
//     description:
//       "A guide to mindfulness and living in the present moment to achieve peace and happiness.",
//   },
//   {
//     title: "The Hobbit",
//     author: "J.R.R. Tolkien",
//     genre: "Fantasy",
//     image:
//       "https://m.media-amazon.com/images/M/MV5BMTcwNTE4MTUxMl5BMl5BanBnXkFtZTcwMDIyODM4OA@@._V1_FMjpg_UX1000_.jpg",
//     description:
//       "The adventurous tale of Bilbo Baggins as he embarks on a journey to reclaim a lost treasure.",
//   },
// ];

// module.exports = { data: sampleBooks };
