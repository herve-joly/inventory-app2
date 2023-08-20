const express = require("express");
const router = express.Router();
const { Item } = require("../models");

// Middleware

// GET All
router.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});

// GET 1 item
router.get("/:id", async (req, res, next) => {
  try {
    const item = await Item.findByPk(req.params.id);
    res.send(item);
  } catch (error) {
    res.send(404);
    next(error);
  }
});

// ADD item
router.post("/", async (req, res, next) => {
  try {
    const item = await Item.create(req.body);
    if (!item) {
      throw new Error("Item not created");
    } else res.sendStatus(201);
  } catch (error) {
    next(error);
  }
});

// DELETE 1 item
router.delete("/:id", async (req, res, next) => {
  try {
    const item = await Item.findByPk(req.params.id);
    item.destroy();
    res.json(`${item["title"]} was deleted!`);
  } catch (error) {
    res.sendStatus(404);
    next(error);
  }
});

// UPDATE item
router.put("/:id", async (req, res, next) => {
  try {
    const item = await Item.findByPk(req.params.id);
    if (!item) {
      res.sendStatus(404);
    } else {
      const item = await Item.findByPk(req.params.id);
      item.update(req.body);
      res.json(`${item["title"]} was updated!`);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
