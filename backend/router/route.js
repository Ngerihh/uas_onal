import { Router } from "express";
const router = Router();

/**import all controllers */
import * as controller from '../controllers/appController.js';
import Auth, { localVariabels } from "../middlerware/auth.js";

/**POST Method */
router.route('/register').post(controller.register);
router.route('/registerMail').post();//send the email
router.route('/authenticate').post((req, res) => res.end());// authenticate user
router.route('/login').post(controller.verifyUser,  controller.login);//login in app



/**GET Methods*/
router.route('/user/username').get(controller.getUser);// user with username
router.route('/generateOTP').get(controller.verifyUser,  localVariabels, controller.generateOTP);
router.route('/verifyOTP').get(controller.verifyOTP);
router.route('/createResetSession').get(controller.createResetSession);


/**PUT Method */
router.route('/updateuser').put( Auth, controller.updateUser);
router.route('/resetPassword').put(controller.verifyUser, controller.resetPassword);


export default router;