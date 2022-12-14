import Confession from '../modules/Confessions.js'

import asyncHandler from 'express-async-handler'

/**
 * @desc   Fetch all Confessions
 * @route  GET /api/v1/confession
 * @access Public
 */
export const allConfessions = asyncHandler( async (req, res, next) => {

  const pageSize = 10;
  const page = Number(req.query.pageNumber) || 1

  const category = req.query.category ? 
  {
    category: {
      $regex: req.query.category,
      $options: 'i',
    }
  }:
  {}

  const count = await Confession.countDocuments({ ...category })

  const confessions = await Confession.find({ ...category })
    .limit(pageSize)
    .skip(pageSize * (page - 1))
    .sort({ createdAt: -1 })
  
  res.status(200).json({
    success: true,
    count: count,
    data: confessions
  })

})

/**
 * @desc   Fetch Singe Confessions
 * @route  GET /api/v1/confession
 * @access Public
 */
export const getConfession = asyncHandler( async (req, res, next) => {
  await Confession.findByIdAndUpdate({ _id: req.params.id }, {
    $inc :{ views: 1 }
  }, { new: true });

  const confession = await Confession.findByIdAndUpdate({ _id: req.params.id })

  res.status(200).json({ 
    success: true,
    data: confession
  })
})

/**
 * @desc   Create Confessions
 * @route  GET /api/v1/confession
 * @access Public
 */
export const createConfession = asyncHandler( async (req, res, next) => {
  req.body.confession_id = Math.random().toString(36).substr(2, 10)
  await Confession.create(req.body)

  res.status(200).json({
    success: true,
    data: "Your Confession has been submitted"
  })
})