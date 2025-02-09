const express = require('express');
const { check } = require('express-validator');

const patientsControllers = require('../controllers/patients-controllers');
const checkAuth = require('../middleware/check-auth');

const router = express.Router();
router.use(checkAuth);

router.get('/fetch/:pid', patientsControllers.getPatientById);

router.get('/fetchall', patientsControllers.getPatientsByUserId);

router.post(
  '/new',
  [
    check('first_name')
      .not()
      .isEmpty(),
    check('last_name')
      .not()
      .isEmpty(),
    check('age')
      .not()
      .isEmpty(),
    check('contact')
      .not()
      .isEmpty(),
    check('emergency_contact')
      .not()
      .isEmpty(),
    check('pre_existing_conditions')
      .not()
      .isEmpty(),
    check('symptoms')
      .not()
      .isEmpty(),
    check('diagnosis')
      .not()
      .isEmpty(),
    check('treatment')
      .not()
      .isEmpty(),
    check('medication')
      .not()
      .isEmpty(),
    check('comments')
      .not()
      .isEmpty()
  ],
  patientsControllers.createPatient
);

router.patch(
  '/update/:pid',
  [
    check('first_name')
      .not()
      .isEmpty(),
    check('last_name')
      .not()
      .isEmpty(),
    check('age')
      .not()
      .isEmpty(),
    check('contact')
      .not()
      .isEmpty(),
    check('emergency_contact')
      .not()
      .isEmpty(),
    check('pre_existing_conditions')
      .not()
      .isEmpty(),
    check('symptoms')
      .not()
      .isEmpty(),
    check('diagnosis')
      .not()
      .isEmpty(),
    check('treatment')
      .not()
      .isEmpty(),
    check('medication')
      .not()
      .isEmpty(),
    check('comments')
      .not()
      .isEmpty()
  ],
  patientsControllers.updatePatient
);

router.delete('/delete/:pid', patientsControllers.deletePatient);

module.exports = router;
