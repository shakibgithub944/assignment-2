"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_controller_1 = __importDefault(require("./product.controller"));
const order_controller_1 = __importDefault(require("../order/order.controller"));
const router = express_1.default.Router();
// Product routes start with /products
router.post('/products', product_controller_1.default.createProduct);
router.get('/products', product_controller_1.default.getAllProducts);
router.get('/products/:productId', product_controller_1.default.getProductById);
router.put('/products/:productId', product_controller_1.default.updateProductById);
router.delete('/products/:productId', product_controller_1.default.deleteProductById);
// product routes end
router.post('/orders', order_controller_1.default.createOrder);
router.get('/orders', order_controller_1.default.getAllOrders);
exports.default = router;
