"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.home);
router.get("/signin", ctrl.signin);
router.get("/tensor", ctrl.tensor);
router.get("/recommend", ctrl.recommend);
router.get("/coffee", ctrl.coffee);
router.get("/Espresso", ctrl.Espresso);
router.get("/menu", ctrl.Menu);
router.get("/introduction", ctrl.introduction);
module.exports = router;