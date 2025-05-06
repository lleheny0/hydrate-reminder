const urls = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTou3hpFUORkSiVYEZy-Tr5sBz-dsvvcut9wg&s",
  "https://pm1.aminoapps.com/7501/b4e00bf3eb3a159023d44849115ee09a6ec062bdr1-1242-1212v2_hq.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrayk5vuOf5yUvNeWKsjflmmyjLL6p6UU8OA&s",
  "https://i.ytimg.com/vi/ngupYNNt2rU/mqdefault.jpg",
  "https://i.pinimg.com/736x/f9/4d/87/f94d87c0e4799c2b68d2a9f1e0e6b84f.jpg",
  "https://drinkoptimum.com/wp-content/uploads/Blog-Images-35.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTryl1CEe5knDAFfdiWrpIGDPm8zjnzFSl1MA&s",
  "https://c02.purpledshub.com/uploads/sites/41/2015/09/GettyImages-535639761-ba2bcf0.jpg",
  "https://d9-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/styles/full_width/public/thumbnails/image/drinking-water.jpg",
  "https://thewholeu.uw.edu/wp-content/uploads/water.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTciJSt76D5K8s5IMkOuGplujvrvX5QpjbfLg&s",
];

window.onload = () => {
  document.querySelector("#image").src =
    urls[Math.floor(Math.random() * urls.length)];
};
