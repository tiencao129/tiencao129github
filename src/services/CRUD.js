import bcrypt from "bcryptjs";
import db from "../models";
 import { raw } from "body-parser";
 import { where } from "sequelize";
import user from "../models/user";
const salt = bcrypt.genSaltSync(10);

let createNewUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashUserPasswordFromBrcypt = await hashUserPassword(data.password);
      await db.User.create({
        name: data.name,
        password: hashUserPasswordFromBrcypt,
        email: data.email,
        phone: data.phone,
        roleid: data.roleid === "1" ? true : false,
      });
      resolve("create user success");
    } catch (e) {
      reject(e);
    }
  });
};

let hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPassword = await bcrypt.hashSync(password, salt);
      resolve(hashPassword);
    } catch (e) {
      reject(e);
    }
  });
};
let getAlluser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let users = db.User.findAll({
        raw: true,
      });

      resolve(users);
    } catch (e) {
      reject(e);
    }
  });
};
let getUserById = (userid) => {
    return new Promise ( async(resolve,reject)=>{
        try {
            let user = await db.User.findOne({
                where: {id: userid},
                raw:true
            })
            if (user) {
                resolve(user)
            } else {
                resolve({})
                
            }
            
        } catch (e) {
            reject(e);
        }
    
    })

}
let updateUserData = (data) =>{
    return new Promise ( async(resolve,reject)=>{
        try {
            let user = await db.User.findOne({
                where:{id:data.id}
            })
         if (user) {
            user.email=data.email;
            user.name=data.name;
            user.phone=data.phone;
            await user.save();
            let allUser = await db.User.findAll();
            resolve(allUser);
            
         } else {
            resolve();
         }
           
            
        } catch (e) {
            console.log(e);
        }
    
    })

}
let deleteUserById = (id) =>{
    return new Promise( async(resolve,reject)=>{
        try {
            let user = await db.User.findOne({
                where:{id:id}
            })
            if (!user) {
                resolve({success: false, message: 'User not found!'});
                return;
              }
        
              await user.destroy();
              
              resolve({success: true});
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
  createNewUser: createNewUser,
  getAlluser: getAlluser,
  getUserById:getUserById,
  updateUserData:updateUserData,
  deleteUserById:deleteUserById
};
