import {Router} from 'express'
import * as authController from '../controllers/auth.controller'
const router = Router()
import {verifySigup} from '../middlewares'

router.post('/signup',[verifySigup.checkDuplicateUserNameOrEmail, verifySigup.checkRolesExisted],authController.signup);
router.post('/signin',authController.signin);

export default router;