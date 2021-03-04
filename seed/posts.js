const db = require("../db/connection");
const Post = require("../models/post");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const posts = [
    {
      author: "Dan",
      title: "title 1",
      imgURL:
        "https://i.ibb.co/XkKm1pM/assorted-color-paint-brush-stroke-1672850.jpg",
      headline: "some headlinnnne",
      content: "dobers content",
    },
    {
      author: "Allison",
      title: "title 2",
      imgURL: "https://i.ibb.co/jJntzzb/painting-wallpaper-1070527.jpg",
      headline: "sweet headline!",
      content: "allison rocks",
    },
    {
      author: "Andy",
      title: "title 3",
      imgURL:
        "https://images.unsplash.com/photo-1577915509669-e8daeb28b498?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      headline: "andys headline!",
      content: "andys content",
    },
    {
      author: "Gracen",
      title: "my new title",
      imgURL:
        "https://i.ibb.co/bJrPBSQ/steve-johnson-n-WYz-Sj-Ac0e-E-unsplash-Cropped.jpg",
      headline: "headline 4",
      content: "contentttt",
    },
  ];

  await Post.insertMany(posts);
  console.log("Created posts!");
};
const run = async () => {
  await main();
  db.close();
};

run();
