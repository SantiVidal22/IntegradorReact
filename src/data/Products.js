export const products = [
    {
      id: 1,
      title: "Burguer Clasica",
      img: "https://res.cloudinary.com/dmloe0isx/image/upload/f_auto,q_auto/vdqp9fbcmhz4i2snrjlh",
      desc: "goodburguer",
      price: 850,
      category: 'Burguers',
    },

    {
      id: 2,
      title: "Burguer Oklahoma",
      img: "https://res.cloudinary.com/dmloe0isx/image/upload/f_auto,q_auto/vdqp9fbcmhz4i2snrjlh",
      desc: "goodburguer",
      price: 1200,
      category: 'Burguers',

    },

    {
      id: 3,
      title: "Chesseburguer con Bacon",
      img: "https://res.cloudinary.com/dmloe0isx/image/upload/f_auto,q_auto/vdqp9fbcmhz4i2snrjlh",
      desc: "goodburguer",
      price: 1150,
      category:  "Burguers",
    },

    {
      id: 4,
      title: "Mojito",
      img: "https://res.cloudinary.com/dmloe0isx/image/upload/f_auto,q_auto/cgnelaahcojojx4criok",
      desc: "goodburguer",
      price: 600,
      category: "DrinksAlcohol",
    },

    {
      id: 5,
      title: "Gin Tonic",
      img: "https://res.cloudinary.com/dmloe0isx/image/upload/f_auto,q_auto/hot60abmnxxuqfjsgok8",
      desc: "goodburguer",
      price: 1300,
      category: "DrinksAlcohol",
    
    },

    {
      id: 6,
      title: "Fernet",
      img: "https://res.cloudinary.com/dmloe0isx/image/upload/f_auto,q_auto/vxggswdjn3o2sddl0zwg",
      desc: "goodburguer",
      price: 1280,
      category: 'DrinksAlcohol',
      
    },

    {
      id: 7,
      title: "Bailays Frozen",
      img: "https://res.cloudinary.com/dmloe0isx/image/upload/f_auto,q_auto/fserajjuatcfm2blpysw",
      desc: "goodburguer",
      price: 1600,
      category:  "DrinksAlcohol",
    },

    {
      id: 8,
      title: "Agua",
      img: "https://res.cloudinary.com/dmloe0isx/image/upload/f_auto,q_auto/yaduicctrpgre7h8jas8",
      desc: "goodburguer",
      price: 400,
      category:  "Drinks0Alcohol",
    },

    {
      id: 9,
      title: "Whisky Red Label",
      img: "https://res.cloudinary.com/dmloe0isx/image/upload/f_auto,q_auto/f44vozyoji7eriumfa1b",
      desc: "goodburguer",
      price: 2800,
      category:  "DrinksAlcohol",
    },
  
    {
      id: 10,
      title: "Tequila",
      img: "https://res.cloudinary.com/dmloe0isx/image/upload/f_auto,q_auto/ybua7kxpd8du3eeozsrt",
      desc: "goodburguer",
      price: 1000,
      category: "DrinksAlcohol",
    },

    {
      id: 11,
      title: "Corona 710ml",
      img: "https://res.cloudinary.com/dmloe0isx/image/upload/f_auto,q_auto/kaqgca2gd9lzohigmcbp",
      desc: "goodburguer",
      price: 600,
      category:  "DrinksAlcohol", 
    },

    {
      id: 12,
      title: "Patagonia 710ml",
      img: "https://res.cloudinary.com/dmloe0isx/image/upload/f_auto,q_auto/n5gjwqea63rtbg6junid",
      desc: "goodburguer",
      price: 700,
      category:  "DrinksAlcohol", 
    },

    {
      id: 13,
      title: "Stella 710ml",
      img: "https://res.cloudinary.com/dmloe0isx/image/upload/f_auto,q_auto/lhuvmt56xishppljp6id",
      desc: "goodburguer",
      price: 660,
      category:  "DrinksAlcohol",
    },

    {
      id: 14,
      title: "Budweiser 710ml",
      img: "https://res.cloudinary.com/dmloe0isx/image/upload/f_auto,q_auto/wfedmjctqhzqwqfhhn5u",
      desc: "goodburguer",
      price: 700,
      category:  "DrinksAlcohol",   
    },
  
    {
      id: 15,
      title: "Pepsi Black",
      img: "https://res.cloudinary.com/dmloe0isx/image/upload/f_auto,q_auto/uy7fqn1nplig9i3zqlpa",
      desc: "goodburguer",
      price: 500,
      category: "Drinks0Alcohol",
    },
    {
      id: 16,
      title: "Batidos",
      img: "https://res.cloudinary.com/dmloe0isx/image/upload/f_auto,q_auto/l6axq76jflzgmevdf21b",
      desc: "goodburguer",
      price: 500,
      category: "Batidos",
    },
    {
      id: 17,
      title: "Papas Fritas",
      img: "https://res.cloudinary.com/dmloe0isx/image/upload/f_auto,q_auto/fq89fg95ma33n0hbvyww",
      desc: "goodburguer",
      price: 590,
      category: "Papas",
    },
    {
      id: 18,
      title: "Taquitos",
      img: "https://res.cloudinary.com/dmloe0isx/image/upload/f_auto,q_auto/bvgypchgcqg6ggw52ccm",
      desc: "goodburguer",
      price: 680,
      category: "Tacos",
    }
        
  ];

export const TotalProducts = products.length;

export const Products = products.reduce((acc, product) => {
  if (!acc[product.category]) {
    acc[product.category] = [];
  }

  acc[product.category] = [...acc[product.category], product];

  return acc;
}, {});
console.log(Products);