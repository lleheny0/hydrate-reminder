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
  "https://static.wikia.nocookie.net/fanon/images/6/65/Saurolophus_drinking-LBT2.webp",
  "https://static.wikia.nocookie.net/the-land-before-time-dinopedia/images/5/53/Mr_Clubtail_drinking.webp",
  "https://static.wikia.nocookie.net/spongebob/images/2/2c/Tea_at_the_Treedome_174.png",
  "https://i.imgflip.com/24u0v8.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO5GPZc-lbkQtFA_1B6Elp9lvUnCUW88WzHw&s",
  "https://media.tenor.com/os1SsnDLvSUAAAAe/pikachu-drinking.png",
  "https://image.lexica.art/full_webp/27ff0524-e286-43ff-b84e-02fae1d9e603",
  "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg",
  "https://images.stockcake.com/public/b/a/4/ba483125-a815-4a61-bba9-381bb61784b0_medium/glass-of-water-stockcake.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ERpJGoI29YhuSBwlpdquc1mGDe1vgYabRw&s",
  "https://image.shutterstock.com/image-photo/water-pouring-into-glass-on-260nw-2498098055.jpg",
  "https://previews.123rf.com/images/zzzz17/zzzz172303/zzzz17230300039/199680666-simple-yet-powerful-beauty-of-water-featuring-a-glass-of-water-sitting-on-a-table-the-glass-is.jpg",
  "https://ih1.redbubble.net/image.3458192271.3244/st,small,507x507-pad,600x600,f8f8f8.jpg",
  "https://i.pinimg.com/564x/f3/c1/94/f3c194e13e84dfb68fab1e0187c50210.jpg",
  "https://thumb.ac-illust.com/c0/c051920660bd2ae03b14cbce46a88843_w.jpeg",
  "https://thumb.ac-illust.com/6c/6c5f7b22428407401529ae2773565a63_w.jpeg",
  "https://thumb.ac-illust.com/ee/ee45906804012b73564a3793c856c365_w.jpeg",
  "https://t.pimg.jp/054/489/549/1/54489549.jpg",
  "https://t.pimg.jp/063/518/608/1/63518608.jpg",
  "https://thumb.ac-illust.com/fe/fee2a8e838d91cb55b153eedbb092d55_w.jpeg",
  "https://img.freepik.com/premium-vector/plastic-bottle-character_444196-11440.jpg",
  "https://media.istockphoto.com/id/2148113249/vector/1753_groovy_water.jpg?s=2048x2048&w=is&k=20&c=lxRTjRAZR5FZ7g-kKdeQ_XXdf2YnnnIPA62R8IwwwJU=",
  "https://loveincorporated.blob.core.windows.net/contentimages/gallery/1c118c01-2b83-4603-bb08-c641966bae4a-glass-water.jpg",
  "https://i.pinimg.com/736x/cd/71/cc/cd71cc574c44a60ecf23e4f745cbf322.jpg",
  "https://quench.culligan.com/wp-content/uploads/2020/07/Why-Does-Ice-Water-Taste-So-Good.jpg",
  "https://nuunlife.com/cdn/shop/articles/unnamed_1d924992-9e0d-4b09-a43d-22e377f4c076.jpg",
  "https://emergencyice.com/wp-content/uploads/2020/06/ice-water.jpg",
  "https://media.tenor.com/_EIwwojuieQAAAAe/patrick-star-spongebob.png",
];

window.onload = () => {
  document.querySelector("#image").src =
    urls[Math.floor(Math.random() * urls.length)];
};
