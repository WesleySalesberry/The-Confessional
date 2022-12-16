import Confession from '../modules/Confessions.js'

import asyncHandler from 'express-async-handler'

/**
 * @desc   Get confessions ether by searching or category
 *          default will return all item
 * @route  GET /api/v1/confession
 * @access Public
 */
export const allConfessions = asyncHandler( async (req, res, next) => {
  const { search, category, pageNumber } = req.query
  const pageSize = 10;
  const page = Number(pageNumber) || 1

  let query;

  if(category){
    query = {
        category: {
          $regex: req.query.category,
          $options: 'i',
        }
      }
  }else if(search){
    query = {
      $text:
        {
          $search: req.query.search,
          $caseSensitive: false
        }
      }
  }else {
    query = {}
  }

  const count = await Confession.countDocuments({ ...query })

  const confessions = await Confession.find({ ...query })
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