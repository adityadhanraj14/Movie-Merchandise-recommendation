const mongoose = require('mongoose');
const Movie = require('../models/Movie');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/movieStreamingApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const sampleMovies = [
  
  {
    title: "8 A.M. Metro",
    description: "A story about two strangers who meet on their daily commute and form an unexpected connection.",
    genre: "Drama",
    year: 2023,
    thumbnailURL: "https://example.com/8ammetro.jpg",
    videoURL: "http://localhost:3000/movies/8AMMetro.2023.mp4",
    metadata: {
      actors: ["Gulshan Devaiah", "Saiyami Kher"],
      director: "Raj Rachakonda",
      rating: 7.2
    }
  },
  {
    title: "127 Hours",
    description: "A mountain climber becomes trapped under a boulder while canyoneering alone near Moab, Utah and resorts to desperate measures to survive.",
    genre: "Biography/Drama",
    year: 2010,
    thumbnailURL: "https://example.com/127hours.jpg",
    videoURL: "http://localhost:3000/movies/127Hours.2010.mp4",
    metadata: {
      actors: ["James Franco", "Kate Mara", "Amber Tamblyn"],
      director: "Danny Boyle",
      rating: 7.6
    }
  },
  {
    title: "A Quiet Place",
    description: "In a post-apocalyptic world, a family is forced to live in silence while hiding from creatures that hunt by sound.",
    genre: "Horror/Thriller",
    year: 2018,
    thumbnailURL: "https://example.com/aquietplace.jpg",
    videoURL: "http://localhost:3000/movies/AQuietPlace.2018.mp4",
    metadata: {
      actors: ["Emily Blunt", "John Krasinski", "Millicent Simmonds"],
      director: "John Krasinski",
      rating: 7.5
    }
  },
  {
    title: "Aladdin",
    description: "A kind-hearted street urchin and a power-hungry Grand Vizier vie for a magic lamp that has the power to make their deepest wishes come true.",
    genre: "Fantasy/Adventure",
    year: 2019,
    thumbnailURL: "https://example.com/aladdin.jpg",
    videoURL: "http://localhost:3000/movies/Aladdin.2019.mp4",
    metadata: {
      actors: ["Will Smith", "Mena Massoud", "Naomi Scott"],
      director: "Guy Ritchie",
      rating: 6.9
    }
  },
  {
    title: "Anek",
    description: "An undercover cop is assigned to bring peace to the northeastern region of India.",
    genre: "Action/Drama",
    year: 2022,
    thumbnailURL: "https://example.com/anek.jpg",
    videoURL: "http://localhost:3000/movies/Anek.2022.mp4",
    metadata: {
      actors: ["Ayushmann Khurrana", "Andrea Kevichusa", "Manoj Pahwa"],
      director: "Anubhav Sinha",
      rating: 7.1
    }
  },
  {
    title: "Aquaman",
    description: "Arthur Curry learns that he is the heir to the underwater kingdom of Atlantis, and must step forward to lead his people and be a hero to the world.",
    genre: "Action/Adventure",
    year: 2018,
    thumbnailURL: "https://example.com/aquaman.jpg",
    videoURL: "http://localhost:3000/movies/Aquaman.2018.mp4",
    metadata: {
      actors: ["Jason Momoa", "Amber Heard", "Willem Dafoe"],
      director: "James Wan",
      rating: 6.8
    }
  },
  {
    title: "Baby Driver",
    description: "A talented young getaway driver relies on the beat of his personal soundtrack to be the best in the game.",
    genre: "Action/Crime",
    year: 2017,
    thumbnailURL: "https://example.com/babydriver.jpg",
    videoURL: "http://localhost:3000/movies/BabyDriver.2017.mp4",
    metadata: {
      actors: ["Ansel Elgort", "Jon Bernthal", "Jon Hamm"],
      director: "Edgar Wright",
      rating: 7.6
    }
  },
  {
    title: "Bahubali 2",
    description: "When Shiva, the son of Bahubali, learns about his heritage, he begins to look for answers.",
    genre: "Action/Drama",
    year: 2017,
    thumbnailURL: "https://example.com/bahubali2.jpg",
    videoURL: "http://localhost:3000/movies/Bahubali2.2017.mp4",
    metadata: {
      actors: ["Prabhas", "Rana Daggubati", "Anushka Shetty"],
      director: "S.S. Rajamouli",
      rating: 8.2
    }
  },
  {
    title: "Bahubali: The Beginning",
    description: "In ancient India, an adventurous and daring man becomes involved in a decades-old feud between two warring peoples.",
    genre: "Action/Drama",
    year: 2015,
    thumbnailURL: "https://example.com/bahubali1.jpg",
    videoURL: "http://localhost:3000/movies/Bahubali1.2015.mp4",
    metadata: {
      actors: ["Prabhas", "Rana Daggubati", "Tamannaah"],
      director: "S.S. Rajamouli",
      rating: 8.0
    }
  },
  {
    title: "Batman Begins",
    description: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.",
    genre: "Action/Adventure",
    year: 2005,
    thumbnailURL: "https://example.com/batmanbegins.jpg",
    videoURL: "http://localhost:3000/movies/BatmanBegins.2005.mp4",
    metadata: {
      actors: ["Christian Bale", "Michael Caine", "Katie Holmes"],
      director: "Christopher Nolan",
      rating: 8.2
    }
  },
  {
    title: "Bhool Bhulaiyaa 2",
    description: "When Ruhan, a fraud psychic, is brought in to deal with the return of Manjulika's spirit, he uncovers a conspiracy and a secret that has been buried for years.",
    genre: "Horror/Comedy",
    year: 2022,
    thumbnailURL: "https://example.com/bhoolbhulaiyaa2.jpg",
    videoURL: "http://localhost:3000/movies/BhoolBhulaiyaa2.2022.mp4",
    metadata: {
      actors: ["Kartik Aaryan", "Kiara Advani", "Tabu"],
      director: "Anees Bazmee",
      rating: 7.0
    }
  },
  {
    title: "Chandigarh Kare Aashiqui",
    description: "A body builder falls in love with a Zumba teacher, but their relationship faces unexpected challenges.",
    genre: "Romance/Drama",
    year: 2021,
    thumbnailURL: "https://example.com/chandigarh.jpg",
    videoURL: "http://localhost:3000/movies/ChandigarhKareAashiqui.2021.mp4",
    metadata: {
      actors: ["Ayushmann Khurrana", "Vaani Kapoor"],
      director: "Abhishek Kapoor",
      rating: 7.1
    }
  },
  {
    title: "Genius",
    description: "A story about a brilliant young man who must balance his academic pursuits with matters of the heart.",
    genre: "Drama",
    year: 2018,
    thumbnailURL: "https://example.com/genius.jpg",
    videoURL: "http://localhost:3000/movies/Genius.2018.mp4",
    metadata: {
      actors: ["Utkarsh Sharma", "Ishitha Chauhan"],
      director: "Anil Sharma",
      rating: 6.5
    }
  },
  {
    title: "Gods of Egypt",
    description: "A mortal hero must team up with the god Horus to save Egypt from Set, the merciless god of darkness.",
    genre: "Fantasy/Action",
    year: 2016,
    thumbnailURL: "https://example.com/godsofegypt.jpg",
    videoURL: "http://localhost:3000/movies/GodsOfEgypt.2016.mp4",
    metadata: {
      actors: ["Gerard Butler", "Nikolaj Coster-Waldau", "Brenton Thwaites"],
      director: "Alex Proyas",
      rating: 5.4
    }
  },
  {
    title: "Godzilla vs Kong",
    description: "The epic next chapter in the cinematic Monsterverse pits two of the greatest icons in motion picture history against one another - Godzilla and Kong.",
    genre: "Action/Sci-Fi",
    year: 2021,
    thumbnailURL: "https://example.com/godzillavskong.jpg",
    videoURL: "http://localhost:3000/movies/GodzillaVsKong.2021.mp4",
    metadata: {
      actors: ["Alexander Skarsgård", "Millie Bobby Brown", "Rebecca Hall"],
      director: "Adam Wingard",
      rating: 6.3
    }
  },
  {
    title: "Hamari Adhuri Kahani",
    description: "A woman finds herself torn between her husband and a man who truly loves her.",
    genre: "Romance/Drama",
    year: 2015,
    thumbnailURL: "https://example.com/hamariadhurikahani.jpg",
    videoURL: "http://localhost:3000/movies/HamariAdhuriKahani.2015.mp4",
    metadata: {
      actors: ["Emraan Hashmi", "Vidya Balan", "Rajkummar Rao"],
      director: "Mohit Suri",
      rating: 6.5
    }
  },
  {
    title: "K.G.F: Chapter 2",
    description: "In the blood-soaked Kolar Gold Fields, Rocky's name strikes fear into his foes. While his allies look up to him, the government sees him as a threat to law and order.",
    genre: "Action/Drama",
    year: 2022,
    thumbnailURL: "https://example.com/kgf2.jpg",
    videoURL: "http://localhost:3000/movies/KGF2.2022.mp4",
    metadata: {
      actors: ["Yash", "Sanjay Dutt", "Raveena Tandon"],
      director: "Prashanth Neel",
      rating: 8.4
    }
  },
  {
    title: "Kabir Singh",
    description: "A surgeon goes down a self-destructive path after his girlfriend is forced to marry someone else.",
    genre: "Romance/Drama",
    year: 2019,
    thumbnailURL: "https://example.com/kabirsingh.jpg",
    videoURL: "http://localhost:3000/movies/KabirSingh.2019.mp4",
    metadata: {
      actors: ["Shahid Kapoor", "Kiara Advani"],
      director: "Sandeep Reddy Vanga",
      rating: 7.1
    }
  },
  {
    title: "Khuda Haafiz",
    description: "A newly married man's search for his missing wife takes him on a dangerous journey.",
    genre: "Action/Thriller",
    year: 2020,
    thumbnailURL: "https://example.com/khudahaafiz.jpg",
    videoURL: "http://localhost:3000/movies/KhudaHaafiz.2020.mp4",
    metadata: {
      actors: ["Vidyut Jammwal", "Shivaleeka Oberoi"],
      director: "Faruk Kabir",
      rating: 7.0
    }
  },
  {
    title: "Maharaja",
    description: "A period drama about a brave warrior who fights for his kingdom and people.",
    genre: "Action/Historical",
    year: 2021,
    thumbnailURL: "https://example.com/maharaja.jpg",
    videoURL: "http://localhost:3000/movies/Maharaja.2021.mp4",
    metadata: {
      actors: ["Various Indian Actors"],
      director: "Indian Director",
      rating: 7.2
    }
  },
  {
    title: "Mary Kom",
    description: "The story of Indian boxer Mary Kom, who overcame all odds to become a world champion.",
    genre: "Biography/Sport",
    year: 2014,
    thumbnailURL: "https://example.com/marykom.jpg",
    videoURL: "http://localhost:3000/movies/MaryKom.2014.mp4",
    metadata: {
      actors: ["Priyanka Chopra", "Darshan Kumar"],
      director: "Omung Kumar",
      rating: 6.8
    }
  },
  {
    title: "Mimi",
    description: "A young woman agrees to be a surrogate mother but faces unexpected challenges.",
    genre: "Drama",
    year: 2021,
    thumbnailURL: "https://example.com/mimi.jpg",
    videoURL: "http://localhost:3000/movies/Mimi.2021.mp4",
    metadata: {
      actors: ["Kriti Sanon", "Pankaj Tripathi"],
      director: "Laxman Utekar",
      rating: 7.9
    }
  },
  {
    title: "Padmaavat",
    description: "Set in medieval Rajasthan, Queen Padmavati is married to a noble king and they live in a prosperous fortress with their subjects until an ambitious Sultan hears of Padmavati's beauty.",
    genre: "Drama/Historical",
    year: 2018,
    thumbnailURL: "https://example.com/padmaavat.jpg",
    videoURL: "http://localhost:3000/movies/Padmaavat.2018.mp4",
    metadata: {
      actors: ["Deepika Padukone", "Ranveer Singh", "Shahid Kapoor"],
      director: "Sanjay Leela Bhansali",
      rating: 7.0
    }
  },
  {
    title: "Pushpa: The Rise",
    description: "A laborer rises through the ranks of a red sandalwood smuggling syndicate, making enemies along the way.",
    genre: "Action/Crime",
    year: 2021,
    thumbnailURL: "https://example.com/pushpa.jpg",
    videoURL: "http://localhost:3000/movies/Pushpa.2021.mp4",
    metadata: {
      actors: ["Allu Arjun", "Rashmika Mandanna", "Fahadh Faasil"],
      director: "Sukumar",
      rating: 7.6
    }
  },
  {
    title: "Roohi",
    description: "Two friends are tasked with kidnapping a bride, but things get complicated when one of them falls in love with her.",
    genre: "Horror/Comedy",
    year: 2021,
    thumbnailURL: "https://example.com/roohi.jpg",
    videoURL: "http://localhost:3000/movies/Roohi.2021.mp4",
    metadata: {
      actors: ["Rajkummar Rao", "Janhvi Kapoor"],
      director: "Hardik Mehta",
      rating: 6.3
    }
  },
  {
    title: "Sam Bahadur",
    description: "The life story of Sam Manekshaw, India's first Field Marshal.",
    genre: "Biography/War",
    year: 2023,
    thumbnailURL: "https://example.com/sambahadur.jpg",
    videoURL: "http://localhost:3000/movies/SamBahadur.2023.mp4",
    metadata: {
      actors: ["Vicky Kaushal", "Sanya Malhotra", "Fatima Sana Shaikh"],
      director: "Meghna Gulzar",
      rating: 7.8
    }
  },
  {
    title: "Sanam Teri Kasam",
    description: "A love story between a young couple who face opposition from their families.",
    genre: "Romance/Drama",
    year: 2016,
    thumbnailURL: "https://example.com/sanamterikasam.jpg",
    videoURL: "http://localhost:3000/movies/SanamTeriKasam.2016.mp4",
    metadata: {
      actors: ["Harshvardhan Rane", "Mawra Hocane"],
      director: "Radhika Rao",
      rating: 7.4
    }
  },
  {
    title: "Shaitaan",
    description: "A supernatural thriller about a family dealing with dark forces.",
    genre: "Horror/Thriller",
    year: 2023,
    thumbnailURL: "https://example.com/shaitaan.jpg",
    videoURL: "http://localhost:3000/movies/Shaitaan.2023.mp4",
    metadata: {
      actors: ["Various Indian Actors"],
      director: "Indian Director",
      rating: 7.0
    }
  },
  {
    title: "Shershaah",
    description: "The life story of Captain Vikram Batra, who died while fighting in the Kargil War.",
    genre: "Biography/War",
    year: 2021,
    thumbnailURL: "https://example.com/shershaah.jpg",
    videoURL: "http://localhost:3000/movies/Shershaah.2021.mp4",
    metadata: {
      actors: ["Sidharth Malhotra", "Kiara Advani"],
      director: "Vishnuvardhan",
      rating: 8.4
    }
  },
  {
    title: "Shiddat",
    description: "A passionate love story about two couples whose paths cross each other.",
    genre: "Romance/Drama",
    year: 2021,
    thumbnailURL: "https://example.com/shiddat.jpg",
    videoURL: "http://localhost:3000/movies/Shiddat.2021.mp4",
    metadata: {
      actors: ["Sunny Kaushal", "Radhika Madan"],
      director: "Kunal Deshmukh",
      rating: 7.3
    }
  },
  {
    title: "Shrikanth",
    description: "A drama about a man's journey of self-discovery and redemption.",
    genre: "Drama",
    year: 2022,
    thumbnailURL: "https://example.com/shrikanth.jpg",
    videoURL: "http://localhost:3000/movies/Shrikanth.2022.mp4",
    metadata: {
      actors: ["Various Indian Actors"],
      director: "Indian Director",
      rating: 6.8
    }
  },
  {
    title: "Sita Ramam",
    description: "A love story set against the backdrop of war following the journey of Lieutenant Ram.",
    genre: "Romance/Drama",
    year: 2022,
    thumbnailURL: "https://example.com/sitaramam.jpg",
    videoURL: "http://localhost:3000/movies/SitaRamam.2022.mp4",
    metadata: {
      actors: ["Dulquer Salmaan", "Mrunal Thakur", "Rashmika Mandanna"],
      director: "Hanu Raghavapudi",
      rating: 8.0
    }
  },
  {
    title: "The Dark Knight",
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    genre: "Action/Crime",
    year: 2008,
    thumbnailURL: "https://example.com/darkknight.jpg",
    videoURL: "http://localhost:3000/movies/DarkKnight.2008.mp4",
    metadata: {
      actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
      director: "Christopher Nolan",
      rating: 9.0
    }
  },
  {
    title: "The Dark Knight Rises",
    description: "Eight years after the Joker's reign of anarchy, Batman must return to defend Gotham City against the enigmatic jewel thief Catwoman and the ruthless mercenary Bane.",
    genre: "Action/Adventure",
    year: 2012,
    thumbnailURL: "https://example.com/darkknightrises.jpg",
    videoURL: "http://localhost:3000/movies/DarkKnightRises.2012.mp4",
    metadata: {
      actors: ["Christian Bale", "Tom Hardy", "Anne Hathaway"],
      director: "Christopher Nolan",
      rating: 8.4
    }
  },
  {
    title: "The Kashmir Files",
    description: "A heart-wrenching narrative of the pain, suffering, struggle & trauma of Kashmiri Pandits, and a terrible truth that has remained hidden for 30 years.",
    genre: "Drama/Historical",
    year: 2022,
    thumbnailURL: "https://example.com/kashmirfiles.jpg",
    videoURL: "http://localhost:3000/movies/KashmirFiles.2022.mp4",
    metadata: {
      actors: ["Mithun Chakraborty", "Anupam Kher"],
      director: "Vivek Agnihotri",
      rating: 8.3
    }
  },
  {
    title: "The Kissing Booth 2",
    description: "After a romantic summer together, Noah is off to Harvard, and Elle heads back to high school for her senior year.",
    genre: "Romance/Comedy",
    year: 2020,
    thumbnailURL: "https://example.com/kissingbooth2.jpg",
    videoURL: "http://localhost:3000/movies/KissingBooth2.2020.mp4",
    metadata: {
      actors: ["Joey King", "Jacob Elordi", "Joel Courtney"],
      director: "Vince Marcello",
      rating: 5.8
    }
  },
  {
    title: "Titanic",
    description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
    genre: "Romance/Drama",
    year: 1997,
    thumbnailURL: "https://example.com/titanic.jpg",
    videoURL: "http://localhost:3000/movies/Titanic.1997.mp4",
    metadata: {
      actors: ["Leonardo DiCaprio", "Kate Winslet"],
      director: "James Cameron",
      rating: 7.9
    }
  },
  {
    title: "URI: The Surgical Strike",
    description: "Indian army special forces execute a covert operation to avenge the killing of fellow army men at their base by a terrorist group.",
    genre: "Action/War",
    year: 2019,
    thumbnailURL: "https://example.com/uri.jpg",
    videoURL: "http://localhost:3000/movies/URI.2019.mp4",
    metadata: {
      actors: ["Vicky Kaushal", "Yami Gautam"],
      director: "Aditya Dhar",
      rating: 8.2
    }
  },
  {
    title: "V",
    description: "A cop and a killer play a deadly game of cat and mouse.",
    genre: "Action/Thriller",
    year: 2020,
    thumbnailURL: "https://example.com/v.jpg",
    videoURL: "http://localhost:3000/movies/V.2020.mp4",
    metadata: {
      actors: ["Nani", "Sudheer Babu"],
      director: "Mohana Krishna Indraganti",
      rating: 6.3
    }
  },
  {
    title: "Veer-Zaara",
    description: "A tale of love, separation, courage and sacrifice.",
    genre: "Romance/Drama",
    year: 2004,
    thumbnailURL: "https://example.com/veerzaara.jpg",
    videoURL: "http://localhost:3000/movies/VeerZaara.2004.mp4",
    metadata: {
      actors: ["Shah Rukh Khan", "Preity Zinta", "Rani Mukerji"],
      director: "Yash Chopra",
      rating: 7.8
    }
  },
  {
    title: "Why Cheat India",
    description: "A conman runs an education scam that changes the lives of many students.",
    genre: "Drama/Crime",
    year: 2019,
    thumbnailURL: "https://example.com/whycheatindia.jpg",
    videoURL: "http://localhost:3000/movies/WhyCheatIndia.2019.mp4",
    metadata: {
      actors: ["Emraan Hashmi", "Shreya Dhanwanthary"],
      director: "Soumik Sen",
      rating: 6.0
    }
  },
  {
    title: "World Famous Lover",
    description: "A writer's life as he goes through multiple relationships.",
    genre: "Romance/Drama",
    year: 2020,
    thumbnailURL: "https://example.com/worldfamouslover.jpg",
    videoURL: "http://localhost:3000/movies/WorldFamousLover.2020.mp4",
    metadata: {
      actors: ["Vijay Deverakonda", "Raashi Khanna"],
      director: "Kranthi Madhav",
      rating: 5.2
    }
  },
  {
    title: "World War Z",
    description: "Former United Nations employee Gerry Lane traverses the world in a race against time to stop a zombie pandemic.",
    genre: "Action/Horror",
    year: 2013,
    thumbnailURL: "https://example.com/worldwarz.jpg",
    videoURL: "http://localhost:3000/movies/WorldWarZ.2013.mp4",
    metadata: {
      actors: ["Brad Pitt", "Mireille Enos"],
      director: "Marc Forster",
      rating: 7.0
    }
  },
  {
    title: "Yeh Saali Aashiqui",
    description: "A twisted love story that explores the dark side of obsession.",
    genre: "Thriller/Romance",
    year: 2019,
    thumbnailURL: "https://example.com/yehsaaliaashiqui.jpg",
    videoURL: "http://localhost:3000/movies/YehSaaliAashiqui.2019.mp4",
    metadata: {
      actors: ["Vardhan Puri", "Shivaleeka Oberoi"],
      director: "Cherag Ruparel",
      rating: 6.5
    }
  },
  {
    title: "2001: A Space Odyssey",
    description: "After discovering a mysterious artifact buried beneath the Lunar surface, mankind sets off on a quest to find its origins with help from intelligent supercomputer H.A.L. 9000.",
    genre: "Sci-Fi/Adventure",
    year: 1968,
    thumbnailURL: "https://example.com/2001spaceodyssey.jpg",
    videoURL: "http://localhost:3000/movies/2001SpaceOdyssey.1968.mp4",
    metadata: {
      actors: ["Keir Dullea", "Gary Lockwood"],
      director: "Stanley Kubrick",
      rating: 8.3
    }
  },
  {
    title: "Interstellar",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    genre: "Sci-Fi/Adventure",
    year: 2014,
    thumbnailURL: "https://example.com/interstellar.jpg",
    videoURL: "http://localhost:3000/movies/Interstellar.2014.mp4",
    metadata: {
      actors: ["Matthew McConaughey", "Anne Hathaway"],
      director: "Christopher Nolan",
      rating: 8.6
    }
  },
  {
    title: "The Incredible Hulk",
    description: "Bruce Banner, a scientist on the run from the U.S. Government, must find a cure for the monster he turns into whenever he loses his temper.",
    genre: "Action/Sci-Fi",
    year: 2008,
    thumbnailURL: "https://example.com/incrediblehulk.jpg",
    videoURL: "http://localhost:3000/movies/IncredibleHulk.2008.mp4",
    metadata: {
      actors: ["Edward Norton", "Liv Tyler"],
      director: "Louis Leterrier",
      rating: 6.6
    }
  },
  {
    title: "Thor: Ragnarok",
    description: "Thor must fight for survival and race against time to prevent the all-powerful Hela from destroying his home and the Asgardian civilization.",
    genre: "Action/Adventure",
    year: 2017,
    thumbnailURL: "https://example.com/thorragnarok.jpg",
    videoURL: "http://localhost:3000/movies/ThorRagnarok.2017.mp4",
    metadata: {
      actors: ["Chris Hemsworth", "Tom Hiddleston", "Cate Blanchett"],
      director: "Taika Waititi",
      rating: 7.9
    }
  },
  {
    title: "Captain America: Civil War",
    description: "Political involvement in the Avengers' affairs causes a rift between Captain America and Iron Man.",
    genre: "Action/Sci-Fi",
    year: 2016,
    thumbnailURL: "https://example.com/civilwar.jpg",
    videoURL: "http://localhost:3000/movies/CaptainAmericaCivilWar.2016.mp4",
    metadata: {
      actors: ["Chris Evans", "Robert Downey Jr.", "Scarlett Johansson"],
      director: "Anthony and Joe Russo",
      rating: 7.8
    }
  },
  {
    title: "Iron Man 3",
    description: "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
    genre: "Action/Sci-Fi",
    year: 2013,
    thumbnailURL: "https://example.com/ironman3.jpg",
    videoURL: "http://localhost:3000/movies/IronMan3.2013.mp4",
    metadata: {
      actors: ["Robert Downey Jr.", "Gwyneth Paltrow", "Guy Pearce"],
      director: "Shane Black",
      rating: 7.1
    }
  },
  {
    title: "Thor: The Dark World",
    description: "Thor must team up with Loki to save the Nine Realms from the Dark Elves led by the veng eful Malekith.",
    genre: "Action/Fantasy",
    year: 2013,
    thumbnailURL: "https://example.com/thordarkworld.jpg",
    videoURL: "http://localhost:3000/movies/ThorDarkWorld.2013.mp4",
    metadata: {
      actors: ["Chris Hemsworth", "Natalie Portman", "Tom Hiddleston"],
      director: "Alan Taylor",
      rating: 6.8
    }
  },
  {
    title: "Avengers: Age of Ultron",
    description: "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong.",
    genre: "Action/Sci-Fi",
    year: 2015,
    thumbnailURL: "https://example.com/ageofultron.jpg",
    videoURL: "http://localhost:3000/movies/AvengersAgeOfUltron.2015.mp4",
    metadata: {
      actors: ["Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"],
      director: "Joss Whedon",
      rating: 7.3
    }
  },
  {
    title: "Sanchi",
    description: "A historical drama about the ancient Buddhist monuments of Sanchi.",
    genre: "Historical/Drama",
    year: 2022,
    thumbnailURL: "https://example.com/sanchi.jpg",
    videoURL: "http://localhost:3000/movies/Sanchi.2022.mp4",
    metadata: {
      actors: ["Various Indian Actors"],
      director: "Indian Director",
      rating: 7.0
    }
  },
  {
    title: "Thunder",
    description: "An action-packed adventure about supernatural powers and destiny.",
    genre: "Action/Fantasy",
    year: 2023,
    thumbnailURL: "https://example.com/thunder.jpg",
    videoURL: "http://localhost:3000/movies/Thunder.2023.mp4",
    metadata: {
      actors: ["Various Actors"],
      director: "Action Director",
      rating: 6.8
    }
  },
  {
    title: "Ant-Man and the Wasp",
    description: "As Scott Lang balances being both a Super Hero and a father, Hope van Dyne and Dr. Hank Pym present an urgent new mission.",
    genre: "Action/Adventure",
    year: 2018,
    thumbnailURL: "https://example.com/antmanwasp.jpg",
    videoURL: "http://localhost:3000/movies/AntManAndTheWasp.2018.mp4",
    metadata: {
      actors: ["Paul Rudd", "Evangeline Lilly", "Michael Peña"],
      director: "Peyton Reed",
      rating: 7.0
    }
  },
  {
    title: "Spider-Man: Far From Home",
    description: "Following the events of Avengers: Endgame, Spider-Man must step up to take on new threats in a world that has changed forever.",
    genre: "Action/Adventure",
    year: 2019,
    thumbnailURL: "https://example.com/farfromhome.jpg",
    videoURL: "http://localhost:3000/movies/SpiderManFarFromHome.2019.mp4",
    metadata: {
      actors: ["Tom Holland", "Samuel L. Jackson", "Jake Gyllenhaal"],
      director: "Jon Watts",
      rating: 7.4
    }
  },
  {
    title: "Ant-Man",
    description: "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero.",
    genre: "Action/Adventure",
    year: 2015,
    thumbnailURL: "https://example.com/antman.jpg",
    videoURL: "http://localhost:3000/movies/AntMan.2015.mp4",
    metadata: {
      actors: ["Paul Rudd", "Michael Douglas", "Corey Stoll"],
      director: "Peyton Reed",
      rating: 7.3
    }
  },
  {
    title: "Spider-Man: No Way Home",
    description: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear.",
    genre: "Action/Adventure",
    year: 2021,
    thumbnailURL: "https://example.com/nowayhome.jpg",
    videoURL: "http://localhost:3000/movies/SpiderManNoWayHome.2021.mp4",
    metadata: {
      actors: ["Tom Holland", "Zendaya", "Benedict Cumberbatch"],
      director: "Jon Watts",
      rating: 8.2
    }
  },
  {
    title: "Avengers: Endgame",
    description: "After the devastating events of Infinity War, the universe is in ruins. The Avengers assemble once more to reverse Thanos' actions.",
    genre: "Action/Adventure",
    year: 2019,
    thumbnailURL: "https://example.com/endgame.jpg",
    videoURL: "http://localhost:3000/movies/AvengersEndgame.2019.mp4",
    metadata: {
      actors: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo"],
      director: "Anthony and Joe Russo",
      rating: 8.4
    }
  },
  {
    title: "Avengers: Infinity War",
    description: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation.",
    genre: "Action/Adventure",
    year: 2018,
    thumbnailURL: "https://example.com/infinitywar.jpg",
    videoURL: "http://localhost:3000/movies/AvengersInfinityWar.2018.mp4",
    metadata: {
      actors: ["Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"],
      director: "Anthony and Joe Russo",
      rating: 8.4
    }
  },
  {
    title: "The Avengers",
    description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki.",
    genre: "Action/Adventure",
    year: 2012,
    thumbnailURL: "https://example.com/avengers.jpg",
    videoURL: "http://localhost:3000/movies/TheAvengers.2012.mp4",
    metadata: {
      actors: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
      director: "Joss Whedon",
      rating: 8.0
    }
  },
  {
    title: "Black Panther: Wakanda Forever",
    description: "The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T'Challa.",
    genre: "Action/Adventure",
    year: 2022,
    thumbnailURL: "https://example.com/wakandaforever.jpg",
    videoURL: "http://localhost:3000/movies/BlackPantherWakandaForever.2022.mp4",
    metadata: {
      actors: ["Letitia Wright", "Lupita Nyong'o", "Danai Gurira"],
      director: "Ryan Coogler",
      rating: 6.7
    }
  },
  {
    title: "Captain America: The Winter Soldier",
    description: "As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger to battle a new threat from history.",
    genre: "Action/Adventure",
    year: 2014,
    thumbnailURL: "https://example.com/wintersoldier.jpg",
    videoURL: "http://localhost:3000/movies/CaptainAmericaWinterSoldier.2014.mp4",
    metadata: {
      actors: ["Chris Evans", "Scarlett Johansson", "Sebastian Stan"],
      director: "Anthony and Joe Russo",
      rating: 7.8
    }
  },
  {
    title: "Hulk",
    description: "Bruce Banner transforms into a raging green monster when he gets angry.",
    genre: "Action/Sci-Fi",
    year: 2003,
    thumbnailURL: "https://example.com/hulk.jpg",
    videoURL: "http://localhost:3000/movies/Hulk.2003.mp4",
    metadata: {
      actors: ["Eric Bana", "Jennifer Connelly", "Sam Elliott"],
      director: "Ang Lee",
      rating: 5.6
    }
  },
  {
    title: "The Amazing Spider-Man",
    description: "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
    genre: "Action/Adventure",
    year: 2012,
    thumbnailURL: "https://example.com/amazingspiderman.jpg",
    videoURL: "http://localhost:3000/movies/AmazingSpiderMan.2012.mp4",
    metadata: {
      actors: ["Andrew Garfield", "Emma Stone", "Rhys Ifans"],
      director: "Marc Webb",
      rating: 6.9
    }
  }
];

async function insertMovies() {
  try {
    await Movie.insertMany(sampleMovies);
    console.log('Sample movies inserted successfully');
  } catch (error) {
    console.error('Error inserting movies:', error);
  } finally {
    mongoose.connection.close();
  }
}

insertMovies();