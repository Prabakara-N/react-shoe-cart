const shoes = [
  {
    id: 1,
    title: "Air Max AP",
    image:
      "https://res.cloudinary.com/daxmjqsy2/image/upload/v1679393675/blue-nike_bbosil.jpg",
    description:
      "Designed for comfortable wear for sports and street style, NIKE FOOTWEAR is always fun to wear. Upgrade in style with a wide range from the world’s leading and much-loved sports brand, NIKE.",
    price: 129,
    originalPrize: 149,
    offers: "12% offer",
    rating: 4.2,
    category: "nike",
  },
  {
    id: 2,
    title: "NK DOWNSHIFTER",
    image:
      "https://res.cloudinary.com/daxmjqsy2/image/upload/v1679393717/black-nike_d8vqtn.jpg",
    description:
      "Designed for comfortable wear for sports and street style, NIKE FOOTWEAR is always fun to wear. Upgrade in style with a wide range from the world’s leading and much-loved sports brand, NIKE.",
    price: 149,
    originalPrize: 159,
    offers: "10% offer",
    rating: 4.4,

    category: "Nike",
  },
  {
    id: 3,
    title: "REVOLUTION 6 NN",
    image:
      "https://res.cloudinary.com/daxmjqsy2/image/upload/v1679393921/nike_red_vowraj.jpg",
    description:
      "Designed for comfortable wear for sports and street style, NIKE FOOTWEAR is always fun to wear. Upgrade in style with a wide range from the world’s leading and much-loved sports brand, NIKE.",
    price: 109,
    originalPrize: 139,
    offers: "25% offer",
    rating: 4.1,

    category: "Nike",
  },
  {
    id: 4,
    title: "REACT PEGASUS 4",
    image:
      "https://res.cloudinary.com/daxmjqsy2/image/upload/v1679394144/nike_k0aizf.jpg",
    description:
      "Designed for comfortable wear for sports and street style, NIKE FOOTWEAR is always fun to wear. Upgrade in style with a wide range from the world’s leading and much-loved sports brand, NIKE.",
    price: 169,
    originalPrize: 175,
    offers: "15% offer",
    rating: 4.7,

    category: "Nike",
  },
  {
    id: 5,
    title: "AIR ZOOM PEGASUS 39",
    image:
      "https://res.cloudinary.com/daxmjqsy2/image/upload/v1679394202/nike-yellow_ejmyvm.jpg",
    description:
      "Designed for comfortable wear for sports and street style, NIKE FOOTWEAR is always fun to wear. Upgrade in style with a wide range from the world’s leading and much-loved sports brand, NIKE.",
    price: 110,
    originalPrize: 134,
    offers: "12% offer",
    rating: 4.1,

    category: "Nike",
  },
  {
    id: 6,
    title: "NK Flex Run 11",
    image:
      "https://res.cloudinary.com/daxmjqsy2/image/upload/v1679394272/nike_casual_v2wbtl.jpg",
    description:
      "Designed for comfortable wear for sports and street style, NIKE FOOTWEAR is always fun to wear. Upgrade in style with a wide range from the world’s leading and much-loved sports brand, NIKE.",
    price: 120,
    originalPrize: 144,
    offers: "18% offer",
    rating: 4.4,
    category: "Nike",
  },
  {
    id: 7,
    title: "WalkWagon M",
    image:
      "https://res.cloudinary.com/daxmjqsy2/image/upload/v1679395151/adidas-y-bg_bua2wm.jpg",
    description:
      "Designed for comfortable wear for sports and street style, NIKE FOOTWEAR is always fun to wear. Upgrade in style with a wide range from the world’s leading and much-loved sports brand, NIKE.",
    price: 1200,
    originalPrize: 1499,
    offers: "20% offer",
    rating: 4.2,

    category: "Adidas",
  },
  {
    id: 8,
    title: "RUNFALCON",
    image:
      "https://res.cloudinary.com/daxmjqsy2/image/upload/v1679395129/adidas_green_macjed.jpg",
    description:
      "Designed for comfortable wear for sports and street style, NIKE FOOTWEAR is always fun to wear. Upgrade in style with a wide range from the world’s leading and much-loved sports brand, NIKE.",
    price: 129,
    originalPrize: 149,
    offers: "19% offer",
    rating: 4.3,

    category: "Adidas",
  },
  {
    id: 9,
    title: "NK Tanjun",
    image:
      "https://res.cloudinary.com/daxmjqsy2/image/upload/v1676973028/cld-sample-5.jpg",
    description:
      "Designed for comfortable wear for sports and street style, NIKE FOOTWEAR is always fun to wear. Upgrade in style with a wide range from the world’s leading and much-loved sports brand, NIKE.",
    price: 115,
    originalPrize: 123,
    offers: "14% offer",
    rating: 4.2,

    category: "Nike",
  },
  {
    id: 10,
    title: "Air Zoom Vomero",
    image:
      "https://res.cloudinary.com/daxmjqsy2/image/upload/v1679452973/adidas_z2chkv.jpg",
    description:
      "Designed for comfortable wear for sports and street style, NIKE FOOTWEAR is always fun to wear. Upgrade in style with a wide range from the world’s leading and much-loved sports brand, NIKE.",
    price: 111,
    originalPrize: 123,
    offers: "18% offer",
    rating: 4.4,

    category: "Adidas",
  },
  {
    id: 11,
    title: "ADIZERO BOSTON",
    image:
      "https://res.cloudinary.com/daxmjqsy2/image/upload/v1679393768/adidas-pink-blue_cbuujh.jpg",
    description:
      "Designed for comfortable wear for sports and street style, NIKE FOOTWEAR is always fun to wear. Upgrade in style with a wide range from the world’s leading and much-loved sports brand, NIKE.",
    price: 125,
    originalPrize: 149,
    offers: "23% offer",
    rating: 4.6,
    category: "Adidas",
  },
  {
    id: 12,
    title: "Softride Clean V2",
    image:
      "https://res.cloudinary.com/daxmjqsy2/image/upload/v1679395240/puma-2_wxmdp3.jpg",
    description:
      "Designed for comfortable wear for sports and street style, NIKE FOOTWEAR is always fun to wear. Upgrade in style with a wide range from the world’s leading and much-loved sports brand, NIKE.",
    price: 129,
    originalPrize: 149,
    offers: "17%",
    rating: 4.4,
    category: "Puma offer",
  },
  {
    id: 13,
    title: "RayRun M",
    image:
      "https://res.cloudinary.com/daxmjqsy2/image/upload/v1679394215/adidas_pink_ja0fgi.jpg",
    description:
      "Designed for comfortable wear for sports and street style, NIKE FOOTWEAR is always fun to wear. Upgrade in style with a wide range from the world’s leading and much-loved sports brand, NIKE.",
    price: 120,
    originalPrize: 149,
    offers: "20% offer",
    rating: 4.1,
    category: "Adidas",
  },
  {
    id: 14,
    title: "NK Legend Essential ",
    image:
      "https://res.cloudinary.com/daxmjqsy2/image/upload/v1679394170/nike-casual_fj5w6e.jpg",
    description:
      "Designed for comfortable wear for sports and street style, NIKE FOOTWEAR is always fun to wear. Upgrade in style with a wide range from the world’s leading and much-loved sports brand, NIKE.",
    price: 105,
    originalPrize: 114,
    offers: "20% offer",
    rating: 4.5,
    category: "Nike",
  },
  {
    id: 15,
    title: "Deuce Badminton",
    image:
      "https://res.cloudinary.com/daxmjqsy2/image/upload/v1679394124/puma-red-black_zkmams.jpg",
    description:
      "Designed for comfortable wear for sports and street style, NIKE FOOTWEAR is always fun to wear. Upgrade in style with a wide range from the world’s leading and much-loved sports brand, NIKE.",
    price: 100,
    originalPrize: 119,
    offers: "19% offer",
    rating: 4.2,

    category: "Puma",
  },
  {
    id: 16,
    title: "Fire run",
    image:
      "https://res.cloudinary.com/daxmjqsy2/image/upload/v1679394080/puma_red_s9b7ex.jpg",
    description:
      "Designed for comfortable wear for sports and street style, NIKE FOOTWEAR is always fun to wear. Upgrade in style with a wide range from the world’s leading and much-loved sports brand, NIKE.",
    price: 149,
    originalPrize: 169,
    offers: "22% offer",
    rating: 4.8,
    category: "Puma",
  },
  {
    id: 17,
    title: "Rebound JOY Casuals",
    image:
      "https://res.cloudinary.com/daxmjqsy2/image/upload/v1679394058/puma-white_zx60mg.jpg",
    description:
      "Designed for comfortable wear for sports and street style, NIKE FOOTWEAR is always fun to wear. Upgrade in style with a wide range from the world’s leading and much-loved sports brand, NIKE.",
    price: 110,
    originalPrize: 124,
    offers: "10% offer",
    rating: 4.4,
    category: "Puma",
  },
  {
    id: 18,
    title: "Puma",
    image:
      "https://res.cloudinary.com/daxmjqsy2/image/upload/v1679393859/adidas_gray_udvhj9.jpg",
    description:
      "Designed for comfortable wear for sports and street style, NIKE FOOTWEAR is always fun to wear. Upgrade in style with a wide range from the world’s leading and much-loved sports brand, NIKE.",
    price: 120,
    originalPrize: 149,
    offers: "20% offer",
    rating: 4.2,
    category: "Puma",
  },
  {
    id: 19,
    title: "Softride Premier one8",
    image:
      "https://res.cloudinary.com/daxmjqsy2/image/upload/v1679394042/puma-gray_qg6jqk.jpg",
    description:
      "Designed for comfortable wear for sports and street style, NIKE FOOTWEAR is always fun to wear. Upgrade in style with a wide range from the world’s leading and much-loved sports brand, NIKE.",
    price: 124,
    originalPrize: 149,
    offers: "13% offer",
    rating: 4.3,
    category: "Puma",
  },
  {
    id: 20,
    title: "GALAXY 6",
    image:
      "https://res.cloudinary.com/daxmjqsy2/image/upload/v1679393987/adidas-black_zguvgm.jpg",
    description:
      "Designed for comfortable wear for sports and street style, NIKE FOOTWEAR is always fun to wear. Upgrade in style with a wide range from the world’s leading and much-loved sports brand, NIKE.",
    price: 120,
    originalPrize: 139,
    offers: "11% offer",
    rating: 4.1,
    category: "Adidas",
  },
  {
    id: 21,
    title: "RENEW RETALIATION",
    image:
      "https://res.cloudinary.com/daxmjqsy2/image/upload/v1679393883/nike-l-green_mfhtab.jpg",
    description:
      "Designed for comfortable wear for sports and street style, NIKE FOOTWEAR is always fun to wear. Upgrade in style with a wide range from the world’s leading and much-loved sports brand, NIKE.",
    price: 129,
    originalPrize: 169,
    offers: "20% offer",
    rating: 4.6,
    category: "Nike",
  },
  {
    id: 22,
    title: "Adiglide M",
    image:
      "https://res.cloudinary.com/daxmjqsy2/image/upload/v1679453062/adidas-pro_rcdgok.jpg",
    description:
      "Designed for comfortable wear for sports and street style, NIKE FOOTWEAR is always fun to wear. Upgrade in style with a wide range from the world’s leading and much-loved sports brand, NIKE.",
    price: 111,
    originalPrize: 129,
    offers: "15% offer",
    rating: 4.3,
    category: "Adidas",
  },
  {
    id: 23,
    title: "Supertec Sneakers",
    image:
      "https://res.cloudinary.com/daxmjqsy2/image/upload/v1679394236/puma_bzrory.jpg",
    description:
      "Designed for comfortable wear for sports and street style, NIKE FOOTWEAR is always fun to wear. Upgrade in style with a wide range from the world’s leading and much-loved sports brand, NIKE.",
    price: 133,
    originalPrize: 159,
    offers: "19% offer",
    rating: 4.1,

    category: "Puma",
  },
  {
    id: 24,
    title: "Eternity Nitro",
    image:
      "https://res.cloudinary.com/daxmjqsy2/image/upload/v1679395213/puma_iguacw.jpg",
    description:
      "Designed for comfortable wear for sports and street style, NIKE FOOTWEAR is always fun to wear. Upgrade in style with a wide range from the world’s leading and much-loved sports brand, NIKE.",
    price: 130,
    originalPrize: 140,
    offers: "10% offer",
    rating: 4.5,

    category: "Puma",
  },
  {
    id: 25,
    title: "SHUFFLE X 1DER",
    image:
      "https://res.cloudinary.com/daxmjqsy2/image/upload/v1679453027/puma-3_hqool2.jpg",
    description:
      "Designed for comfortable wear for sports and street style, NIKE FOOTWEAR is always fun to wear. Upgrade in style with a wide range from the world’s leading and much-loved sports brand, NIKE.",
    price: 119,
    originalPrize: 134,
    offers: "16% offer",
    rating: 4.3,
    category: "Puma",
  },
];

export default shoes;
