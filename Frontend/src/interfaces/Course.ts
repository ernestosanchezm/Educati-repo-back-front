export interface CourseInfo {
    id: Number,
    name: String,
    grade: Number,
    teacherId: String,
    note: String,
  }
  
  export class Course implements CourseInfo{
      id = 0;
      name = '';
      grade = 0;
      teacherId = '';
      note = '';
  }