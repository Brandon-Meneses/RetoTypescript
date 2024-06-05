"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Square_1 = require("./Square");
var shapes = [new Circle_1.Circle(), new Square_1.Square()];
shapes.forEach(function (shape) { return shape.draw(); });
