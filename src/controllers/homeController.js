import { json } from "body-parser";
import db from "../models/index";
import CRUD from "../services/CRUD";
import user from "../models/user";

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    return res.render("homePage.ejs", {
      data: JSON.stringify(data),
    });
  } catch (e) {
    console.log(e);
  }
};
let getsanphamPage = (req, res) => {
  return res.render("sanpham/sanphamPage.ejs");
};
let getadminPage = (rep, res) => {
  return res.render("admin.ejs");
};
let postCRUD = async (req, res) => {
  let message = await CRUD.createNewUser(req.body);
  console.log(message);
  return res.send("postcrud");
};

let homegetcrud = async (req, res) => {
  let data = await CRUD.getAlluser();
  // console.log("-----------------");
  // console.log(data);
  // console.log("-----------------");
  return res.render("getCRUD_data.ejs", {
    dataTable: data,
  });
};

let geteditcrud = async (req, res) => {
  let userid = req.query.id;

  if (userid) {
    let userData = await CRUD.getUserById(userid);

    //let userdata
    return res.render("editCRUD.ejs",{
      userData:userData
    });
  } else {
    return res.send("user not found");
  }
};
let putcrud = async (req,res)=>{

  let data=req.body;
  let allUser = await CRUD.updateUserData(data);
  return res.render("getCRUD_data.ejs", {
    dataTable: allUser,
  });

};
let deletecrud = async (req,res) =>{
  let id = req.query.id;
  let result = await CRUD.deleteUserById(id);
  
  if (result && result.success) {
    return res.send('Delete success!');
  } else {
    return res.send('User not found!'); 
  }
}
 
module.exports = {
  getHomePage: getHomePage,
  getsanphamPage: getsanphamPage,
  getadminPage: getadminPage,
  postCRUD: postCRUD,
  homegetcrud: homegetcrud,
  geteditcrud: geteditcrud,
  putcrud:putcrud,
  deletecrud:deletecrud
};
