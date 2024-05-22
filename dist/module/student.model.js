"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentModel = void 0;
const mongoose_1 = require("mongoose");
const validator_1 = __importDefault(require("validator"));
const userNameSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: true,
    },
    middleName: {
        type: String,
    },
    lastName: {
        type: String,
        required: true,
    },
});
const guardianSchema = new mongoose_1.Schema({
    fatherName: {
        type: String,
        required: true,
    },
    fatherOccupation: {
        type: String,
        required: true,
    },
    fatherContactNo: {
        type: String,
        required: true,
    },
    motherName: {
        type: String,
        required: true,
    },
    motherOccupation: {
        type: String,
        required: true,
    },
    motherContactNo: {
        type: String,
        required: true,
    },
});
const localGuradianSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    occupation: {
        type: String,
        required: true,
    },
    contactNo: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
});
const studentSchema = new mongoose_1.Schema({
    id: { type: String },
    name: userNameSchema,
    gender: {
        type: String,
        enum: ['male', 'female'],
        required: true,
    },
    dateOfBirth: { type: String },
    email: {
        type: String, required: true, validate(value) {
            if (!validator_1.default.isEmail(value)) {
                throw new Error('Invalid Email');
            }
        },
    },
    contactNo: { type: String, required: true },
    emergencyContactNo: { type: String, required: true },
    bloogGroup: {
        type: String,
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        required: true,
    },
    presentAddress: { type: String, required: true },
    permanentAddres: { type: String, required: true },
    guardian: guardianSchema,
    localGuardian: localGuradianSchema,
    profileImg: { type: String },
    isActive: ['active', 'blocked'],
});
// Argument of type '{ name: { firstName: string; lastName: string; middleName?: string | undefined; };
// gender: "male" | "female"; email: string; contactNo: string; emergencyContactNo: string; bloodGroup: "A+" | ... 6 more ... | "O-"; ... 7 more ...; profileImg ?: string | undefined; }' is not assignable to parameter of type 'Student'.
//   Property 'permanentAddres' is missing in type '{ name: { firstName: string; lastName: string; middleName?: string | undefined; }; gender: "male" | "female"; email: string; contactNo: string; emergencyContactNo: string; bloodGroup: "A+" | ... 6 more ... | "O-"; ... 7 more ...; profileImg?: string | undefined; }' but required in type 'Student'.ts(2345)
exports.StudentModel = (0, mongoose_1.model)('Student', studentSchema);
