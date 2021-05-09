export interface UserCourseEmotionInfo {
    id: Number,
    userId: Number,
    courseId: Number,
    img: String,
    happy: Number,
    surprised: Number,
    sad: Number,
    calm: Number,
    fear: Number,
    disgusted: Number,
    angry: Number,
    confused: Number
  }
  
  export class UserCourseEmotion implements UserCourseEmotionInfo{
    id = 0;
    userId = 0;
    courseId = 0;
    img = '';
    happy = 0;
    surprised = 0;
    sad = 0;
    calm = 0;
    fear = 0;
    disgusted = 0;
    angry = 0;
    confused = 0;
  }