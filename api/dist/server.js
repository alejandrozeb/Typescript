"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
function default_1() {
    var app = express_1.default();
    app.get("/resultados/:equipo1/:equipo2", function (req, res) {
        res.send("resultados del " + req.params.equipo1 + " vs " + req.params.equipo2);
    });
    return app;
}
exports.default = default_1;
