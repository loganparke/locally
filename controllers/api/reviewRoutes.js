const router = require("express").Router();
const { rmSync } = require("fs");
const { User, Business, Review, Catagory } = require("../../models");

router.get("/", (req, res) => {});

router.get("/:id", (req, res) => {});

router.post("/", (req, res) => {});

router.put("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});

module.exports = router;
