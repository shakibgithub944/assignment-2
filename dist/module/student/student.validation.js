"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateStudent = void 0;
const zod_1 = require("zod");
// UserName Schema
const userNameSchema = zod_1.z.object({
    firstName: zod_1.z.string().min(1, { message: 'First name is required' }),
    middleName: zod_1.z.string().optional(),
    lastName: zod_1.z.string().min(1, { message: 'Last name is required' }),
});
// Guardian Schema
const guardianSchema = zod_1.z.object({
    fatherName: zod_1.z.string().min(1, { message: "Father's name is required" }),
    fatherOccupation: zod_1.z.string().min(1, { message: "Father's occupation is required" }),
    fatherContactNo: zod_1.z.string().min(1, { message: "Father's contact number is required" }),
    motherName: zod_1.z.string().min(1, { message: "Mother's name is required" }),
    motherOccupation: zod_1.z.string().min(1, { message: "Mother's occupation is required" }),
    motherContactNo: zod_1.z.string().min(1, { message: "Mother's contact number is required" }),
});
// LocalGuardian Schema
const localGuardianSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, { message: "Local guardian's name is required" }),
    occupation: zod_1.z.string().min(1, { message: "Local guardian's occupation is required" }),
    contactNo: zod_1.z.string().min(1, { message: "Local guardian's contact number is required" }),
    address: zod_1.z.string().min(1, { message: "Local guardian's address is required" }),
});
// Student Schema
const studentSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    name: userNameSchema,
    gender: zod_1.z.enum(['male', 'female'], { message: 'Gender is required' }),
    dateOfBirth: zod_1.z.string().optional(),
    email: zod_1.z.string().min(1, { message: 'Email is required' }).email('Invalid email address'),
    contactNo: zod_1.z.string().min(1, { message: 'Contact number is required' }),
    emergencyContactNo: zod_1.z.string().min(1, { message: 'Emergency contact number is required' }),
    bloodGroup: zod_1.z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
    presentAddress: zod_1.z.string().min(1, { message: 'Present address is required' }),
    permanentAddress: zod_1.z.string().min(1, { message: 'Permanent address is required' }),
    guardian: guardianSchema,
    localGuardian: localGuardianSchema,
    profileImg: zod_1.z.string().optional(),
    isActive: zod_1.z.enum(['active', 'blocked']),
});
exports.validateStudent = studentSchema.parse.bind(studentSchema);
