let jsonObject = {
  "title" : "Animal Crossing",
  "medium" : "Video Game",
  "year" : 2020,
  "characters" : ["Tom Nook", "K.K. Slider", "The Villager"]
};

console.log(jsonObject['title']);
console.log(jsonObject['medium']);
console.log(jsonObject['year']);

for (let i = 0; i < jsonObject['characters'].length; i++ ) {
  console.log(jsonObject['characters'][i]);
}
