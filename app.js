require('dotenv').config()
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing");
const Listing_2 = require("./models/listing_2");
const Listing_3 = require("./models/listing_3");
const dbUrl=process.env.ATLAS_URL;
const path = require("path");
const ejsMate = require("ejs-mate");

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(dbUrl);
}
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
  res.send("hello");
});
app.get("/search", (req, res) => {
  res.render("listings/search.ejs");
});
app.post("/search", async (req, res) => {
  // res.send(req.body);
  if (req.body.listing.round == "Round 1") {
    let rank = req.body.listing.rank;
    let category = req.body.listing.category;
    let institute = req.body.listing.institute;
    if (institute != 0) {
      const listings = await Listing.find({
        Closing_Rank: { $gt: rank },
        Category: category,
        Institute: institute,
      }).sort({ Closing_Rank: 1 });
      res.render("listings/college_list.ejs", { listings });
    } else {
      const listings = await Listing.find({
        Closing_Rank: { $gt: rank },
        Category: category,
      }).sort({ Closing_Rank: 1 });
      res.render("listings/college_list.ejs", { listings });
    }
  } else if (req.body.listing.round == "Round 2") {
    let rank = req.body.listing.rank;
    let category = req.body.listing.category;
    let institute = req.body.listing.institute;

    if (institute != 0) {
      const listings = await Listing_2.find({
        Closing_Rank: { $gt: rank },
        Category: category,
        Institute: institute,
      }).sort({ Closing_Rank: 1 });
      res.render("listings/college_list.ejs", { listings });
    } else {
      const listings = await Listing_2.find({
        Closing_Rank: { $gt: rank },
        Category: category,
      }).sort({ Closing_Rank: 1 });
      res.render("listings/college_list.ejs", { listings });
    }
  } else if (req.body.listing.round == "Round 3") {
    let rank = req.body.listing.rank;
    let category = req.body.listing.category;
    let institute = req.body.listing.institute;

    if (institute != 0) {
      const listings = await Listing_3.find({
        Closing_Rank: { $gt: rank },
        Category: category,
        Institute: institute,
      }).sort({ Closing_Rank: 1 });
      res.render("listings/college_list.ejs", { listings });
    } else {
      const listings = await Listing_3.find({
        Closing_Rank: { $gt: rank },
        Category: category,
      }).sort({ Closing_Rank: 1 });
      res.render("listings/college_list.ejs", { listings });
    }
  }
});

app.listen(3000, (req, res) => {
  console.log("App is listing to port 3000");
});
