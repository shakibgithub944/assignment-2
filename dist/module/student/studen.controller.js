"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const studen_service_1 = __importDefault(require("./studen.service")); // Add missing import statement
const createStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const student = req.body.student;
        const result = yield (0, studen_service_1.default)(student);
        res.status(201).json({ success: true, message: 'Student data create successfully', data: result });
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.default = createStudent;
