
import { Student } from "./order.interface";
import { StudentModel } from "../order.model";

const studentService = async (student: Student) => {
    const studentData = await StudentModel.create(student);
    return studentData;
};

export default studentService; // Export the studentService function