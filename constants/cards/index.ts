// Define the interface for a WWE player card
export interface WWEPlayerCard {
  id: number;
  name: string;
  rank: number;
  weight: string;
  height: string;
  imageUrl: string;
}

// Define the array of WWE player cards
export const wwePlayers: WWEPlayerCard[] = [
  {
    id: 1,
    name: "Stone Cold",
    rank: 1,
    weight: "252 lbs",
    height: "6'2\"",
    imageUrl: "https://example.com/stone_cold.jpg",
  },
  {
    id: 2,
    name: "The Undertaker",
    rank: 2,
    weight: "309 lbs",
    height: "6'10\"",
    imageUrl: "https://example.com/the_undertaker.jpg",
  },
  {
    id: 3,
    name: "John Cena",
    rank: 3,
    weight: "250 lbs",
    height: "6'1\"",
    imageUrl: "https://example.com/john_cena.jpg",
  },
  {
    id: 4,
    name: "The Rock",
    rank: 4,
    weight: "260 lbs",
    height: "6'5\"",
    imageUrl: "https://example.com/the_rock.jpg",
  },
  {
    id: 5,
    name: "Shawn Michaels",
    rank: 5,
    weight: "225 lbs",
    height: "6'1\"",
    imageUrl: "https://example.com/shawn_michaels.jpg",
  },
  {
    id: 6,
    name: "Triple H",
    rank: 6,
    weight: "255 lbs",
    height: "6'4\"",
    imageUrl: "https://example.com/triple_h.jpg",
  },
  {
    id: 7,
    name: "Edge",
    rank: 7,
    weight: "241 lbs",
    height: "6'4\"",
    imageUrl: "https://example.com/edge.jpg",
  },
  {
    id: 8,
    name: "Brock Lesnar",
    rank: 8,
    weight: "285 lbs",
    height: "6'3\"",
    imageUrl: "https://example.com/brock_lesnar.jpg",
  },
  {
    id: 9,
    name: "Randy Orton",
    rank: 9,
    weight: "250 lbs",
    height: "6'5\"",
    imageUrl: "https://example.com/randy_orton.jpg",
  },
  {
    id: 10,
    name: "Dave Bautista",
    rank: 10,
    weight: "290 lbs",
    height: "6'6\"",
    imageUrl: "https://example.com/dave_bautista.jpg",
  },
  // Add more player cards as needed
];
