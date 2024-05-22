"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const product_route_1 = __importDefault(require("./module/product/product.route"));
// parser
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/api', product_route_1.default);
app.get('/', (req, res) => {
    const a = 'Hello World!';
    res.send(a);
});
exports.default = app;
