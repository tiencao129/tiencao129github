import db from "../models/index";
import user from "../models/user";
import bcrypt from "bcryptjs";

let handleUserLogin = (email, password) => {
  return new Promise(async (resole, reject) => {
    try {
      let userData = {};

      let isExist = await checkUserEmail(email);
      if (isExist) {
        let user = await db.User.findOne({
            attributes: ['email','roleid','password'],
          where: { email: email },
          raw:true,
        });
        if (user) {
          let check = await bcrypt.compareSync(password, user.password);
          if (check) {
            userData.errorCode = 0;
            userData.errMessage = `ok`;
            delete user.password;
            userData.user = user;
          }
          else{
            userData.errorCode = 3;
            userData.errMessage = `wrong password`;
          }
        } else {
          userData.errorCode = 2;
          userData.errMessage = `user's not found`;
        }
        
      } else {
        userData.errorCode = 1;
        userData.errMessage = `your's email isn't  correct. plz try other email`;
        
      }
      resole(userData);
    } catch (e) {
      reject(e);
    }
  });
};

let checkUserEmail = (userEmail) => {
  return new Promise(async (resole, reject) => {
    try {
      let user = await db.User.findOne({
        where: { email: userEmail },
      });
      if (user) {
        resole(true);
      } else {
        resole(false);
      }
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  handleUserLogin: handleUserLogin,
};
