import { Router } from "express";
import { sample_foods, sample_tags } from "../data";
import asyncHandler from "express-async-handler";
import { FoodModel } from "../models/food.model";

const router = Router();

//create Food
router.get(
  "/seed",
  asyncHandler(async (req, res) => {
    const foodCount = await FoodModel.countDocuments();
    if (foodCount > 0) {
      res.send("send is already done");
      return;
    }
    await FoodModel.create(sample_foods);
    res.send("seed Is Done!");
  })
);

//get api for All foods
router.get("/",asyncHandler(
    async (req, res) => {
    const foods = await FoodModel.find();
    res.send(foods);
  })
);

//get api for search food
router.get("/search/:searchTerm",asyncHandler( 
    async (req, res) => {
    const searchRegex = new RegExp(req.params.searchTerm,'i')
      const foods = await FoodModel.find({name: {$regex:searchRegex}})
    res.send(foods);
  }));


//get api for All tags
router.get("/tag", asyncHandler(
async (req, res) => {   
    const tags = await FoodModel.aggregate([
        {
            $unwind:'$tags'
        },
        {
            $group:{
                _id:'$tags',
                count:{$sum:1}
            }
        },
        {
            $project:{
                _id:0,
                name:'$_id',
                count: '$count'
            }
        }
    ]).sort({count:-1});

    const all = {
        name:'All',
        count:await FoodModel.countDocuments()
    }
  tags.unshift(all)
  res.send(tags);
}));

//get api for food by tag
router.get("/tag/:tagName", asyncHandler(
 async (req, res) => {
  const foods = await FoodModel.find({tags:req.params.tagName})
  res.send(foods);
}));

//get api for food by id
router.get("/:foodId", 
  async (req, res) => {
  const foods =  await FoodModel.findById(req.params.foodId)
  res.send(foods);
});

export default router;