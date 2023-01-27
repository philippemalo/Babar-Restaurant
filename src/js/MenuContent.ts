interface MenuItem {
  title: string;
  description?: string;
  price: string;
  imagePortrait: string;
  imageLandscape: string;
}
const MenuContent: MenuItem[] = [
  {
    title: "Olives, zaatar et citron",
    description: "",
    price: "7",
    imagePortrait: "/foodPics/tomato_portrait.jpg",
    imageLandscape: "/foodPics/tomato_landscape.jpg",
  },
  {
    title: "Trio de trempettes*",
    description: "Hummus, Mutabbal, Mouhamara",
    price: "28",
    imagePortrait: "/foodPics/tomato_portrait.jpg",
    imageLandscape: "/foodPics/tomato_landscape.jpg",
  },
  {
    title: "Hummus",
    description: "Purée de pois chiche, huile d'olive et citron",
    price: "13",
    imagePortrait: "/foodPics/tomato_portrait.jpg",
    imageLandscape: "/foodPics/tomato_landscape.jpg",
  },
  {
    title: "Mutabbal*",
    description: "Purée d'aubergine grillée, yogourt et grenade",
    price: "13",
    imagePortrait: "/foodPics/tomato_portrait.jpg",
    imageLandscape: "/foodPics/tomato_landscape.jpg",
  },
  {
    title: "Muhammara*",
    description:
      "Purée de poivron rouge et noix de Grenoble, mélasse de grenade",
    price: "13",
    imagePortrait: "/foodPics/tomato_portrait.jpg",
    imageLandscape: "/foodPics/tomato_landscape.jpg",
  },
  {
    title: "Kefta d'agneau",
    description: "Fromage feta, concombre et sauce au yogourt",
    price: "19",
    imagePortrait: "/foodPics/tomato_portrait.jpg",
    imageLandscape: "/foodPics/tomato_landscape.jpg",
  },
  {
    title: "Hummus All Dressed",
    description:
      "Filet mignon sept épices, sauce yogourt, grenade et pousse de coriandre",
    price: "28",
    imagePortrait: "/foodPics/tomato_portrait.jpg",
    imageLandscape: "/foodPics/tomato_landscape.jpg",
  },
  {
    title: "Choux de Bruxelles",
    description:
      "Raisins, sirop d'érable, noix de Grenoble et yogourt à la menthe",
    price: "15",
    imagePortrait: "/foodPics/tomato_portrait.jpg",
    imageLandscape: "/foodPics/tomato_landscape.jpg",
  },
  {
    title: "Halloumi sur charbon",
    description:
      "Fenouil, céleri, datte, vinaigrette au babeurre, miel et piment d'Alep",
    price: "21",
    imagePortrait: "/foodPics/tomato_portrait.jpg",
    imageLandscape: "/foodPics/tomato_landscape.jpg",
  },
  {
    title: "Kibbeh Nayeh",
    description: "Boeuf, agneau, boulgour, oignon, menthe et pita au sumac",
    price: "24",
    imagePortrait: "/foodPics/tomato_portrait.jpg",
    imageLandscape: "/foodPics/tomato_landscape.jpg",
  },
  {
    title: "Pieuvre sur charbon",
    description: "Hummus de pois jaune, tomate, huile d'olive et persil",
    price: "28",
    imagePortrait: "/foodPics/tomato_portrait.jpg",
    imageLandscape: "/foodPics/tomato_landscape.jpg",
  },
  {
    title: "Côtelettes d'agneau",
    description:
      "Croûte de fines herbes, riz frit, légumes rôtis et glace de viande",
    price: "55",
    imagePortrait: "/foodPics/tomato_portrait.jpg",
    imageLandscape: "/foodPics/tomato_landscape.jpg",
  },
  {
    title: "Filet mignon",
    description:
      "Marinade sept épices, patate à l'ail, légumes marinés et taboulé",
    price: "63",
    imagePortrait: "/foodPics/tomato_portrait.jpg",
    imageLandscape: "/foodPics/tomato_landscape.jpg",
  },
  {
    title: "*Extra crudités",
    description: "",
    price: "7",
    imagePortrait: "/foodPics/tomato_portrait.jpg",
    imageLandscape: "/foodPics/tomato_landscape.jpg",
  },
  {
    title: "Patates à l'ail (mon ami)",
    description: "",
    price: "10",
    imagePortrait: "/foodPics/tomato_portrait.jpg",
    imageLandscape: "/foodPics/tomato_landscape.jpg",
  },
  {
    title: "Carottes au harissa",
    description: "Labneh et miel au sumac",
    price: "15",
    imagePortrait: "/foodPics/tomato_portrait.jpg",
    imageLandscape: "/foodPics/tomato_landscape.jpg",
  },
  {
    title: "Bahis à l'oignon",
    description: "Sauce Tarator et salsa verde",
    price: "14",
    imagePortrait: "/foodPics/tomato_portrait.jpg",
    imageLandscape: "/foodPics/tomato_landscape.jpg",
  },
  {
    title: "Falafels",
    description: "Taboulé et sauce à l'ail",
    price: "14",
    imagePortrait: "/foodPics/tomato_portrait.jpg",
    imageLandscape: "/foodPics/tomato_landscape.jpg",
  },
  {
    title: "Mujaddara",
    description:
      "Riz frit, vermicelle de blé, légumes rôtis, sauce au yogourt et noix",
    price: "20",
    imagePortrait: "/foodPics/tomato_portrait.jpg",
    imageLandscape: "/foodPics/tomato_landscape.jpg",
  },
  {
    title: "Choux-Fleurs frits",
    description: "Mélange d'épices, sauce à l'ail et citron",
    price: "16",
    imagePortrait: "/foodPics/tomato_portrait.jpg",
    imageLandscape: "/foodPics/tomato_landscape.jpg",
  },
  {
    title: "Salade Fattouch",
    description:
      "Laitue, poivron, concombre, tomate, persil, menthe, pita sumac et zaatar",
    price: "22",
    imagePortrait: "/foodPics/tomato_portrait.jpg",
    imageLandscape: "/foodPics/tomato_landscape.jpg",
  },
  {
    title: "Salade de tomate",
    description:
      "Poivron, concombre, oignon, citron, huile d'olive et fromage feta",
    price: "20",
    imagePortrait: "/foodPics/tomato_portrait.jpg",
    imageLandscape: "/foodPics/tomato_landscape.jpg",
  },
  {
    title: "Dumplings",
    description:
      "Boeuf, agneau, sauce yogourt, beurre au piment d'Alep, noix de pin, grenade et coriandre",
    price: "28",
    imagePortrait: "/foodPics/tomato_portrait.jpg",
    imageLandscape: "/foodPics/tomato_landscape.jpg",
  },
  {
    title: "Crevettes géantes",
    description: "Marinade sumac et ail, chimichurri",
    price: "28",
    imagePortrait: "/foodPics/tomato_portrait.jpg",
    imageLandscape: "/foodPics/tomato_landscape.jpg",
  },
  {
    title: "Shish Taouk",
    description:
      "Poitrine de poulet marinée au yogourt, pomme de terre, légumes marinés et taboulé",
    price: "34",
    imagePortrait: "/foodPics/tomato_portrait.jpg",
    imageLandscape: "/foodPics/tomato_landscape.jpg",
  },
  {
    title: "Morue",
    description:
      "Riz frit, légumes rôtis, sauce romesco, fromage feta et mélange de noix",
    price: "28",
    imagePortrait: "/foodPics/tomato_portrait.jpg",
    imageLandscape: "/foodPics/tomato_landscape.jpg",
  },
  {
    title: "Assiette du Grill à Michel",
    description:
      "Shish Taouk, filet mignon, agneau, riz frit, patate à l'ail et légumes rôtis sur charbon (Pour 4 personnes)",
    price: "150",
    imagePortrait: "/foodPics/tomato_portrait.jpg",
    imageLandscape: "/foodPics/tomato_landscape.jpg",
  },
];

export default MenuContent;
