export interface UserInfo {
    id: Number,
    dni: String,
    firstName: String,
    lastName: String,
    age: String,
    grade: Number,
    parentR: String,
    parentId: String,
    userType: String,
    check: Boolean,
    button: Boolean
  }
  
  export class User implements UserInfo{
      id = 0;
      dni = '';
      firstName = '';
      lastName = '';
      age = '';
      grade = 0;
      parentR = '';
      parentId = '';
      userType = '';
      check = false;
      button = false;
  }