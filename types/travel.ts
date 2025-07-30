export type Travel = {
  type: "Travel";
  location: string;
  title: string;
  description: string;
  images: readonly string[];
  date: string;
};

export const travels = [
  {
    type: "Travel",
    location: "El Nido, Philippines",
    title: "Island Paradise",
    description: "Exploring the pristine beaches and lagoons of El Nido",
    images: [
      "/travel/el-nido/IMG_3117.JPG",
      "/travel/el-nido/IMG_3442.JPG",
      "/travel/el-nido/IMG_3454.JPG",
      "/travel/el-nido/IMG_3469.JPG"
    ],
    date: "2024-07-29"
  },
  {
    type: "Travel", 
    location: "Hong Kong",
    title: "First time out of the country!",
    description: "Experiencing the vibrant culture and skyline of Hong Kong",
    images: [
      "/travel/hong-kong/IMG_4995.JPG",
      "/travel/hong-kong/IMG_5020.jpeg",
      "/travel/hong-kong/IMG_5043.JPG",
      "/travel/hong-kong/IMG_5086.JPG",
      "/travel/hong-kong/IMG_5120.JPG",
      "/travel/hong-kong/IMG_5121.JPG",
      "/travel/hong-kong/IMG_5240.JPG",
      "/travel/hong-kong/IMG_5320.JPG",
      "/travel/hong-kong/IMG_5322.JPG",
      "/travel/hong-kong/IMG_5339.JPG",
      "/travel/hong-kong/IMG_5524.JPG",
      "/travel/hong-kong/IMG_5527.JPG",
      "/travel/hong-kong/IMG_5538.JPG",
      "/travel/hong-kong/IMG_5541.JPG",
      "/travel/hong-kong/IMG_6068.JPG"
    ],
    date: "2024-03-10"
  }
] as const;
