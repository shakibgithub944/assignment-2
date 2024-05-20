import { Request, Response } from 'express';
import studentService from './order.service'; // Add missing import statement
// import studentSchema from './order.validation';
// https://github.com/shakibgithub944/assignment-2.git
const createStudent = async (req: Request, res: Response) => {
    try {
        const student = req.body.student;
        // zod validation schema
        // const validateStudent = studentSchema.parse(student);
        const result = await studentService(student);
        res.status(201).json({ success: true, message: 'Student data create successfully', data: result });
    } catch (error) {
        throw new Error(error as string);
    }
};
export default createStudent;