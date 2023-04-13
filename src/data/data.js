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
    category: "Nike",
  },
  {
    id: 2,
    title: "NK DOWNSHIFTER",
    image:
      "https://res.cloudinary.com/daxmjqsy2/image/upload/v1679393717/black-nike_d8vqtn.jpg",
    description:
      "With each step, Nike Air cushioning absorbs impact and immediately returns to its original shape to protect the body. These innovations allow any athlete to perform harder, while providing flawless comfort.",
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
      "Nike Air cushioning reduces the weight of the shoe without reducing performance. The lighter the shoe is, the less energy athletes put out during their performance. Athletes need the cushioning in their footwear to last, and Nike Air is designed to provide support throughout the life of the shoe.",
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
      "Tightly stretched tensile fibres are knitted inside a pressurised Nike Air unit, giving the Zoom Air cushioning its snappy responsiveness.",
    price: 169,
    originalPrize: 175,
    offers: "15% offer",
    rating: 4.7,

    category: "Nike",
  },
  {
    id: 5,
    title: "AIR ZOOM PEGASUS",
    image:
      "https://res.cloudinary.com/daxmjqsy2/image/upload/v1679394202/nike-yellow_ejmyvm.jpg",
    description:
      "Each time an athlete's foot touches down, the fibres compress to cushion the impact before quickly springing back to their original state, generating an explosive, powerful response off the ground.",
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
      "Whether elite athletes are racing or training, they look to Zoom Air for a fast, responsive ride and that snappy, quick-off-the-ground feel that helps optimise their quest for speed.",
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
      "Air delivers on our most daring dream: helping every athlete feel the unparalleled sensation of walking on air, while protecting the environment where we live and play. All Air soles contain at least 50% recycled materials, and are made with 100% renewable energy. Light on your feet. Lighter on waste.",
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
      "Max Air was Nike's first visual expression of Air technology. Inspired by the avant-garde, inside-out architecture of the Centre Pompidou in Paris, Hatfield gave birth to the Air Max by opening a literal window to the sole. It single handedly kick-started a revolution in the footwear industry.",
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
      "BMW M Motorsport has created outstanding automobiles with deafening engines, squealing tires, and lighting speeds, and these Drift Cat Decima motorsport shoes don just that, thanks to a slick silhouette, the marques infamous branding, as well as elements of racing technology.",
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
      "Upper & Design Engineered Mesh Upper For Extreme Breathability And Makes Product Light Weight, Flexible & Durable For Long Run. Additional Puff Effect At Collar For Better Gripping During Long Run & Acts As A Sweat Absorbentmidsole Springy Bounce Cushioning Ensures Comfort Through Even The Most Grueling Sessions. ",
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
      "Wide Fit. Inspired From The 22Yds Series. Upper : Synthetic Leather Upper,Perforated For Ventilation, Tpu Moulded Stripes For Support & Style. Midsole : Injectioneva Midsole For Lightweight Cushioning. Outsole : Aggressive Rubber Outsole, Speedgrip For Maximum Traction & Agility.",
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
      " Elegant Silhouette Designed To Up Your Racing Records, The Hustle Xt Is Decked With Mesh Upper To Keep Your Foot Airy For Long Hours. The Eva Midsole Makes It Light To Enhance Your Sprint Effortlessly. The Bold Puma Branding Across The Shoes Adds To The Style Spotlights.",
    price: 129,
    originalPrize: 149,
    offers: "17% offer",
    rating: 4.4,
    category: "Puma",
  },
  {
    id: 13,
    title: "RayRun M",
    image:
      "https://res.cloudinary.com/daxmjqsy2/image/upload/v1679394215/adidas_pink_ja0fgi.jpg",
    description:
      "Rubber Podsvisibility From Sideways Makes The Product An Eye Catcher. Outsole - Non Marking Rubber Outsole For Excellent Grip. The Rubber Patchoutsole Gives You Multidirectional Traction Through Different Conditions Andterrain. The Outsole Design Of This Shoe Minimizes Weight Shift And Providesgripping On Multiple Surfaces.",
    price: 120,
    originalPrize: 149,
    offers: "20% offer",
    rating: 4.1,
    category: "Adidas",
  },
  {
    id: 14,
    title: "The Nike Tanjun ",
    image:
      "https://res.cloudinary.com/daxmjqsy2/image/upload/v1679394170/nike-casual_fj5w6e.jpg",
    description:
      "The Nike Tanjun Men's Shoes A BEST-SELLING FAVORITE MADE BETTER. Forget the hype. The Nike Tanjun brings you simplicity at its best. Made with at least 20% recycled content, no detail is overlooked on this one.",
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
      " Lightweight. Airy. Comfortable. These are just words. This shoe is all you need. The upper materials are designed to stretch and form to your foot for a personalized feel that breaks in quickly.",
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
      "Crafted with fine technology and futuristic design, PUMA shoe is surely here to uplift your style and track games. Kick off on street and field in this shoe from the worlds leading and much loved sports brand, PUMA.",
    price: 149,
    originalPrize: 169,
    offers: "22% offer",
    rating: 4.8,
    category: "Puma",
  },
  {
    id: 17,
    title: "Rebound Casuals",
    image:
      "https://res.cloudinary.com/daxmjqsy2/image/upload/v1679394058/puma-white_zx60mg.jpg",
    description:
      "The ideal performance Running Shoes for those needing added stability and support. PUMA's runGUIDE technology encourages proper alignment, keeping the foot centred through each foot strike.",
    price: 110,
    originalPrize: 124,
    offers: "10% offer",
    rating: 4.4,
    category: "Puma",
  },
  {
    id: 18,
    title: "Neptune",
    image:
      "https://res.cloudinary.com/daxmjqsy2/image/upload/v1679393859/adidas_gray_udvhj9.jpg",
    description:
      "The mid foot wrap integrated into the engineered mesh upper offers secure lockdown to maximise comfort and stability, while the NITRO FOAM midsole provides superior lightweight cushioning.",
    price: 120,
    originalPrize: 149,
    offers: "20% offer",
    rating: 4.2,
    category: "Puma",
  },
  {
    id: 19,
    title: "Softride Premier",
    image:
      "https://res.cloudinary.com/daxmjqsy2/image/upload/v1679394042/puma-gray_qg6jqk.jpg",
    description:
      "The reflective branding and spoiler ensure high visibility in all conditions and the PUMAGRIP outsole means you don't have to worry about slipping when you hit your stride.",
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
      "Thick Lugs Provided In Bottombetter Cushioning And Comfort For All Day Long Wear. Rubber Provided At Heelpart For Slip Resistance. Extremely Light Weight Bottom . High Upscaled Heelarea Provides Better Resilience And Comfort While Walking.",
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
      "Foam midsole and outsole offer lightweight cushioning. Low-cut, padded collar looks sleek and feels great. Same fit and feel as original.When everyday runs are on the menu, the Nike Renew Ride 3 comes through with a smooth and soft ride. It's got a secure fit and cozy feel, geared for those looking looking to find their running potential.",
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
      "Upper & Design . Light Weight Flexible & Breathable Upper & Epm Lining. Hi Stretchable Slip-On Construction Provides Comfort With Grip. Pu Heelcounter Provides Stability At Heel Area.Midsole New Bottom Designed Specially For Walking With Cloudfoamtechnology Embedded In For Better Cushion. ",
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
      "PUMA's advanced technology providing superior responsiveness and cushioning in a lightweight packageDETAILS Low boot silhouette Engineered mesh upper with OPTIFIT adaptive fit system NITRO FOAM midsole PUMAGRIP rubber outsole for all-surface traction Lightweight.",
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
      "Our Supertec trainers feature a training-friendly mesh and EVA construction that won't sacrifice durability. This is not your average trainer: the heel clip features TPU accents for enhanced style.",
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
      "You can also rest assured you'll be comfortable while going about your day, as these trainers are fitted with SoftFoam+ sockliners that assure optimal comfort in every step. Hit the pavement in style with this new season trainer by PUMA.",
    price: 119,
    originalPrize: 134,
    offers: "16% offer",
    rating: 4.3,
    category: "Puma",
  },
];

export default shoes;
