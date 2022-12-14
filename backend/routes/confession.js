import express from 'express'
const router = express.Router()

import { allConfessions, createConfession, getConfession } from '../controllers/confession.js'

router.route('/')
  .get(allConfessions)
  .post(createConfession)

router.route('/:id')
  .get(getConfession)


export default router