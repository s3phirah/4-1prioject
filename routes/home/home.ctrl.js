"use strict";

const home = (req, res) => {
    res.render("home/index");
};

const signin = (req, res) => {
    res.render("home/signin");
};

const tensor = (req, res) => {
    res.render("home/tensor");
};


const coffee = (req, res) => {
    res.render("home/coffee");
};


const recommend = (req, res) => {
    res.render("home/recommend");
};

const Espresso = (req, res) => {
    res.render("home/Espresso");
};

const Menu = (req, res) => {
    res.render("home/menu");
};

const introduction = (req, res) => {
    res.render("home/introduction");
};


module.exports = {
    home,
    signin,
    tensor,
    recommend,
    coffee,
    Espresso,
    Menu,
    introduction,
};

