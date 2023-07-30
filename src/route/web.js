import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
let router = express.Router();

let initWebRoutes =(app)=>{
    router.get('/',homeController.getHomePage);
    router.get('/sanpham',homeController.getsanphamPage);
    router.get('/admin',homeController.getadminPage);
    router.post('/post-crud',homeController.postCRUD);
    router.get('/get-crud',homeController.homegetcrud)
    router.get('/edit-crud',homeController.geteditcrud)
    router.post('/put-crud',homeController.putcrud)
    router.get('/delete-crud',homeController.deletecrud)

    router.post('/api/login',userController.handleLogin)
    return app.use("/",router);
}
export default initWebRoutes;