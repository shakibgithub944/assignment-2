import { z } from 'zod';

// UserName Schema
const userNameSchema = z.object({
    firstName: z.string().min(1, { message: 'First name is required' }),
    middleName: z.string().optional(),
    lastName: z.string().min(1, { message: 'Last name is required' }),
});

// Guardian Schema
const guardianSchema = z.object({
    fatherName: z.string().min(1, { message: "Father's name is required" }),
    fatherOccupation: z.string().min(1, { message: "Father's occupation is required" }),
    fatherContactNo: z.string().min(1, { message: "Father's contact number is required" }),
    motherName: z.string().min(1, { message: "Mother's name is required" }),
    motherOccupation: z.string().min(1, { message: "Mother's occupation is required" }),
    motherContactNo: z.string().min(1, { message: "Mother's contact number is required" }),
});

// LocalGuardian Schema
const localGuardianSchema = z.object({
    name: z.string().min(1, { message: "Local guardian's name is required" }),
    occupation: z.string().min(1, { message: "Local guardian's occupation is required" }),
    contactNo: z.string().min(1, { message: "Local guardian's contact number is required" }),
    address: z.string().min(1, { message: "Local guardian's address is required" }),
});

// Student Schema
const studentSchema = z.object({
    id: z.string().optional(),
    name: userNameSchema,
    gender: z.enum(['male', 'female'], { message: 'Gender is required' }),
    dateOfBirth: z.string().optional(),
    email: z.string().min(1, { message: 'Email is required' }).email('Invalid email address'),
    contactNo: z.string().min(1, { message: 'Contact number is required' }),
    emergencyContactNo: z.string().min(1, { message: 'Emergency contact number is required' }).optional(),
    bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
    presentAddress: z.string().min(1, { message: 'Present address is required' }),
    permanentAddress: z.string().min(1, { message: 'Permanent address is required' }),
    guardian: guardianSchema,
    localGuardian: localGuardianSchema,
    profileImg: z.string().optional(),
    isActive: z.enum(['active', 'blocked']),
});

export default studentSchema;