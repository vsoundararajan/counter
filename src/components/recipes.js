const recipes = [
  {
    id: 1,
    name: "Venn Pongal",
    servings: 3,
    cookTime: "1:45",
    instructions: [
      "Mix moong and ric equal amount",
      "Mix pepper and Salt",
      "Boil and eat"
    ],
    ingredients: [
      {id:1, name: "Rice", amount: "1 Kg"},
      {id:2, name: "Moong dhal", amount: ".75kg"},
      {id:3, name: "Pepper", amount: "100gms"},
      {id:4, name: "Salt", amount: "to taste"},
      {id:5, name: "Ghee", amount: "depending upon how fat u are"}
    ]
  },
  {
    id: 2,
    name: "Sarkarai Pongal",
    servings: 3,
    cookTime: "0:45",
    instructions: [
      "Mix moong and ric equal amount",
      "Mix Jaggery and pinch of Salt",
      "Boil and eat"
    ],
    ingredients: [
      {id:1, name: "Rice", amount: "1 pound"},
      {id:2, name: "Moong dhal", amount: "1/2 pound"},
      {id:3, name:"Salt", amount: "to taste"},
      {id:4, name:"Jaggery", amount: "to taste"},
      {id:5, name:"Ghee", amount: "200ml"}
    ]
  },
  {
    id: 3,
    name: "Paayasam",
    servings: 5,
    cookTime: "3:45",
    instructions: [
      "Blah Blah Blah",
      "again Blah Blah blah",
      "After all the blahs eat it"
    ],
    ingredients: [
      {id:1, name: "Vermicelli", amount: "1/2kg"},
      {id:2, name:  "Milk", amount: "500ml"},
      {id:3, name: "Sugar", amount: ".25kg"},
      {id:4, name: "Cashews", amount: "250gms"},
      {id:5, name: "Ghee", amount: "250ml"},
    ]
  },
 {
   id: 4,
   name: "Pazha Paniyaaram",
   servings: 5,
   cookTime: "3:45",
   instructions: [
     "Blah Blah Blah",
     "again Blah Blah blah",
     "After all the blahs eat it"
   ],
   ingredients: [{
       id: 1,
       name: "Banana",
       amount: "1/2kg"
     },
     {
       id: 2,
       name: "Sugar",
       amount: "500ml"
     },
     {
       id: 3,
       name: "Coconut",
       amount: ".25kg"
     },
     {
       id: 4,
       name: "Wheat flour",
       amount: "250gms"
     },
     {
       id: 5,
       name: "Ghee",
       amount: "250ml"
     },
   ]
 }
];  

export default recipes;
