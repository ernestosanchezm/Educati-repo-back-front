export interface UserCourseNoteInfo {
    id: Number,
    userId: Number,
    courseId: Number,
    note: Number,
    comment: String
  }
  
  export class UserCourseNote implements UserCourseNoteInfo{
    id = 0;
    userId = 0;
    courseId = 0;
    note = 0;
    comment = '';
  }