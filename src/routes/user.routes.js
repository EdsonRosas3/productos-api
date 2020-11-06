import {Router} from 'express'
const router = Router()
import * as userController from '../controllers/user.controller'
import{authJwt,verifySigup} from '../middlewares'

router.post('/',[
    authJwt.verifyToken,
    authJwt.isAdmin,
    verifySigup.checkRolesExisted
],userController.createUser);

export default router;