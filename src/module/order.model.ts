import { Schema, model } from 'mongoose';
import {
    Guardian,
    LocalGuardian,
    Student,
    UserName,
} from './order/order.interface';
import validator from 'validator';


const userNameSchema = new Schema<UserName>({
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

const guardianSchema = new Schema<Guardian>({
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

const localGuradianSchema = new Schema<LocalGuardian>({
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

const studentSchema = new Schema<Student>({
    id: { type: String },
    name: userNameSchema,
    gender: {
        type: String,
        enum: ['male', 'female'],
        required: true,
    },
    dateOfBirth: { type: String },
    email: {
        type: String, required: true, validate(value: string) {
            if (!validator.isEmail(value)) {
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
})

// Argument of type '{ name: { firstName: string; lastName: string; middleName?: string | undefined; };
// gender: "male" | "female"; email: string; contactNo: string; emergencyContactNo: string; bloodGroup: "A+" | ... 6 more ... | "O-"; ... 7 more ...; profileImg ?: string | undefined; }' is not assignable to parameter of type 'Student'.
//   Property 'permanentAddres' is missing in type '{ name: { firstName: string; lastName: string; middleName?: string | undefined; }; gender: "male" | "female"; email: string; contactNo: string; emergencyContactNo: string; bloodGroup: "A+" | ... 6 more ... | "O-"; ... 7 more ...; profileImg?: string | undefined; }' but required in type 'Student'.ts(2345)
export const StudentModel = model<Student>('Student', studentSchema);