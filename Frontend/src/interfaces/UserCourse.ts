export interface UserCourseInfo {
    id: Number,
    userId: Number,
    courseId: Number,
  }
  
  export class UserCourse implements UserCourseInfo{
    id = 0;
    userId = 0;
    courseId = 0;
  }