// import all images from assets/images directory
import img01 from "../all-images/cars-img/p1.jpg";
import img02 from "../all-images/cars-img/p2.jpg";
import img03 from "../all-images/cars-img/p3.jpg";
import img04 from "../all-images/cars-img/p4.jpg";
import img05 from "../all-images/cars-img/p5.jpg";
import img06 from "../all-images/cars-img/p6.jpg";
import img07 from "../all-images/cars-img/p7.jpg";
import img08 from "../all-images/cars-img/m1.jpg";
import img09 from "../all-images/cars-img/m2.jpg";
import img10 from "../all-images/cars-img/m3.jpg";
import img11 from "../all-images/cars-img/m4.jpg";
import img12 from "../all-images/cars-img/m5.jpg";
import img13 from "../all-images/cars-img/k1.jpg";
import img14 from "../all-images/cars-img/k2.jpg";
import img15 from "../all-images/cars-img/k3.jpg";
import img16 from "../all-images/cars-img/o1.jpg";
import img17 from "../all-images/cars-img/o2.jpg";
import img18 from "../all-images/cars-img/o3.jpg";
import img19 from "../all-images/cars-img/o4.jpg";




const carData = [
  {
    id: 1,
    brand: "Texal Oil",
    rating: 112,
    carName: "Turbo Power DI",
    imgUrl: img01,
    model: "to cars",
    price: "-",
    speed : "5L",
    gps: "Bandung-Indonesia",
    seatType: "Power-Turbo",
    automatic: "15W/40 CI4/SL",
    description:
      " *Gasoline & Diesel 15w-40 CI4/SL MOCAF melapisi Metal dan dengan Metal Bounding menjadikan Metal lebih kuat terhadap gesekan dan panas Extreme yang ada di sekitar kendaraan. ",
  },

  {
    id: 2,
    brand: "Texal Oil",
    rating: 112,
    carName: "Ranger Power G Race",
    imgUrl: img02,
    model: "to cars",
    price: "-",
    speed : "5L",
    gps: "Bandung-Indonesia",
    seatType: "Power-Turbo",
    automatic: "SAE 40/CF",
    description:
      " *SAE 40/CF MOCAF melapisi Metal dan dengan Metal Bounding menjadikan Metal lebih kuat terhadap gesekan dan panas Extreme yang ada di sekitar kendaraan. ",
  },


  {
    id: 3,
    brand: "Texal Oil",
    rating: 112,
    carName: "Magnum Ultra Power",
    imgUrl: img03,
    model: "to cars",
    price: "-",
    speed : "4L",
    gps: "Bandung-Indonesia",
    seatType: "Power-Turbo",
    automatic: "10w-40 SN/CI4",
    description:
      " *Gasoline & Diesel 10w-40 SN/CI4 MOCAF melapisi Metal dan dengan Metal Bounding menjadikan Metal lebih kuat terhadap gesekan dan panas Extreme yang ada di sekitar kendaraan. ",
  },


  {
    id: 4,
    brand: "Texal Oil",
    rating: 112,
    carName: "Impact Power Ranger 1",
    imgUrl: img04,
    model: "to cars",
    price: "-",
    speed : "4L",
    gps: "Bandung-Indonesia",
    seatType: "Power-Turbo",
    automatic: "20w-50 SL/CF",
    description:
      " *Gasoline & Diesel 20w-50 SL/CF MOCAF melapisi Metal dan dengan Metal Bounding menjadikan Metal lebih kuat terhadap gesekan dan panas Extreme yang ada di sekitar kendaraan. ",
  },


  {
    id: 5,
    brand: "Texal Oil",
    rating: 112,
    carName: "G Max 1",
    imgUrl: img05,
    model: "to cars",
    price: "-",
    speed : "4L",
    gps: "Bandung-Indonesia",
    seatType: "Power-Turbo",
    automatic: "0W/20 SN/CF",
    description:
      " *Gasoline & Diesel 0W/20 SN/CF MOCAF melapisi Metal dan dengan Metal Bounding menjadikan Metal lebih kuat terhadap gesekan dan panas Extreme yang ada di sekitar kendaraan. ",
  },


  {
    id: 6,
    brand: "Texal Oil",
    rating: 112,
    carName: "G Max 1 (blue)",
    imgUrl: img06,
    model: "to cars",
    price: "-",
    speed : "4L",
    gps: "Bandung-Indonesia",
    seatType: "Power-Turbo",
    automatic: "5W/30 SN/CF",
    description:
      " *Gasoline & Diesel 5W/30 SN/CF MOCAF melapisi Metal dan dengan Metal Bounding menjadikan Metal lebih kuat terhadap gesekan dan panas Extreme yang ada di sekitar kendaraan. ",
  },


  {
    id: 7,
    brand: "Texal Oil",
    rating: 112,
    carName: "Impact Power G Race 1",
    imgUrl: img07,
    model: "to cars",
    price: "-",
    speed : "4L",
    gps: "Bandung-Indonesia",
    seatType: "Power-Turbo",
    automatic: "15W/50 SM/CF",
    description:
      " *Gasoline & Diesel 15W/50 SM/CF MOCAF melapisi Metal dan dengan Metal Bounding menjadikan Metal lebih kuat terhadap gesekan dan panas Extreme yang ada di sekitar kendaraan. ",
  },

  {
    id: 8,
    brand: "Texal Oil",
    rating: 112,
    carName: "Power G Race Matic",
    imgUrl: img08,
    model: "motorcycle",
    price: "-",
    speed : "1L",
    gps: "Bandung-Indonesia",
    seatType: "power",
    automatic: "15w/30 SL Jaso Mb",
    description:
      " *15w/30 SL Jaso Mb MOCAF melapisi Metal dan dengan Metal Bounding menjadikan Metal lebih kuat terhadap gesekan dan panas Extreme yang ada di sekitar kendaraan. ",
  },

  {
    id: 9,
    brand: "Texal Oil",
    rating: 112,
    carName: "Power G Race GP 1",
    imgUrl: img09,
    model: "motorcycle",
    price: "-",
    speed : "1L",
    gps: "Bandung-Indonesia",
    seatType: "Power",
    automatic: "10w-40 SL Jaso MA2",
    description:
      " *10w-40 SL Jaso MA2 MOCAF melapisi Metal dan dengan Metal Bounding menjadikan Metal lebih kuat terhadap gesekan dan panas Extreme yang ada di sekitar kendaraan. ",
  },


  {
    id: 10,
    brand: "Texal Oil",
    rating: 112,
    carName: "Moto G Race 4t 3000",
    imgUrl: img10,
    model: "motorcycle",
    price: "-",
    speed : "1L",
    gps: "Bandung-Indonesia",
    seatType: "Power",
    automatic: "20w/50 F",
    description:
      " *20w/50 F SN/CI4 MOCAF melapisi Metal dan dengan Metal Bounding menjadikan Metal lebih kuat terhadap gesekan dan panas Extreme yang ada di sekitar kendaraan. ",
  },


  {
    id: 11,
    brand: "Texal Oil",
    rating: 112,
    carName: "Power G Race 2T Low Smoke",
    imgUrl: img11,
    model: "motorcycle",
    price: "-",
    speed : "0,7L",
    gps: "Bandung-Indonesia",
    seatType: "Power",
    automatic: "2T Low Smoke",
    description:
      " 2T Low Smoke MOCAF melapisi Metal dan dengan Metal Bounding menjadikan Metal lebih kuat terhadap gesekan dan panas Extreme yang ada di sekitar kendaraan. ",
  },


  {
    id: 12,
    brand: "Texal Oil",
    rating: 112,
    carName: "MTX - 1",
    imgUrl: img12,
    model: "motorcycle",
    price: "-",
    speed : "1L",
    gps: "Bandung-Indonesia",
    seatType: "Power",
    automatic: "0W/20 SN/CF",
    description:
      " *Gasoline & Diesel 0W/20 SN/CF MOCAF melapisi Metal dan dengan Metal Bounding menjadikan Metal lebih kuat terhadap gesekan dan panas Extreme yang ada di sekitar kendaraan. ",
  },


  {
    id: 13,
    brand: "Texal Oil",
    rating: 112,
    carName: "Power G Race Matic",
    imgUrl: img13,
    model: "motorcycle",
    price: "-",
    speed : "0,8L",
    gps: "Bandung-Indonesia",
    seatType: "Regular",
    automatic: "15w/30 SL Jaso Mb",
    description:
      " *Gasoline 15w/30 SL Jaso Mb MOCAF melapisi Metal dan dengan Metal Bounding menjadikan Metal lebih kuat terhadap gesekan dan panas Extreme yang ada di sekitar kendaraan. ",
  },


  {
    id: 14,
    brand: "Texal Oil",
    rating: 112,
    carName: " Power G Race GP 1",
    imgUrl: img14,
    model: "motorcycle",
    price: "-",
    speed : "0,8L",
    gps: "Bandung-Indonesia",
    seatType: "Regular",
    automatic: "20w/50 F",
    description:
      " 20w/50 F MOCAF melapisi Metal dan dengan Metal Bounding menjadikan Metal lebih kuat terhadap gesekan dan panas Extreme yang ada di sekitar kendaraan. ",
  },

  {
    id: 15,
    brand: "Texal Oil",
    rating: 112,
    carName: "Moto G Race 4t  3000",
    imgUrl: img15,
    model: "motorcycle",
    price: "-",
    speed : "0,8",
    gps: "Bandung-Indonesia",
    seatType: "Regular",
    automatic: "20w/50 F",
    description:
      " *G20w/50 F MOCAF melapisi Metal dan dengan Metal Bounding menjadikan Metal lebih kuat terhadap gesekan dan panas Extreme yang ada di sekitar kendaraan. ",
  },

  {
    id: 16,
    brand: "Texal Oil",
    rating: 112,
    carName: "Gear Oil",
    imgUrl: img16,
    model: "vehicle",
    price: "-",
    speed : "110ml",
    gps: "Bandung-Indonesia",
    seatType: "Lubricat",
    automatic: "Gear Oil-part",
    description:
      " Gear Oil-part from MOCAF melapisi Metal dan dengan Metal Bounding menjadikan Metal lebih kuat terhadap gesekan dan panas Extreme yang ada di sekitar kendaraan. ",
  },

  {
    id: 17,
    brand: "Texal Oil",
    rating: 112,
    carName: "Brake Fluid",
    imgUrl: img17,
    model: "vehicle",
    price: "-",
    speed : "300ml",
    gps: "Bandung-Indonesia",
    seatType: "lubricant",
    automatic: "Dot 3",
    description:
      " Brake Fluid-part Dot 3 for MOCAF melapisi Metal dan dengan Metal Bounding menjadikan Metal lebih kuat terhadap gesekan dan panas Extreme yang ada di sekitar kendaraan. ",
  },


  {
    id: 18,
    brand: "Texal Oil",
    rating: 112,
    carName: "Radiator Coolant",
    imgUrl: img18,
    model: "vehicle",
    price: "-",
    speed : "5L",
    gps: "Bandung-Indonesia",
    seatType: "Rc super coolant",
    automatic: "Col-max Rc super",
    description:
      "Cool Max Rc super coolant for MOCAF melapisi Metal dan dengan Metal Bounding menjadikan Metal lebih kuat terhadap gesekan dan panas Extreme  membuat mesin menjadi dingin yang ada di sekitar kendaraan. ",
  },

  {
    id: 19,
    brand: "Texal Oil",
    rating: 112,
    carName: "Shock Absorber",
    imgUrl: img19,
    model: "Vehicle",
    price: "-",
    speed : "130ml",
    gps: "Bandung-Indonesia",
    seatType: "Shock Absorber",
    automatic: "Shock Absorber-part",
    description:
      " Shock Absorber-part for MOCAF melapisi Metal dan dengan Metal Bounding menjadikan Metal lebih kuat terhadap gesekan dan goncangan Extreme yang ada di sekitar kendaraan. ",
  },



 ];

export default carData;
