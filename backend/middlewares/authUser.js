import jwt from 'jsonwebtoken'

const authUser = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || req.headers.token

    if (!authHeader) {
      return res.status(401).json({
        success: false,
        message: 'Not Authorized! Token missing.'
      })
    }

    const token = authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : authHeader

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    //  Automatically set userId in req.body
    if (!req.body) req.body = {}
    req.body.userId = decoded.id

    next()
  } catch (error) {
    console.log("Auth Error:", error)
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({
        success: false,
        message: 'Invalid token'
      })
    }
    res.status(500).json({ success: false, message: error.message })
  }
}

export default authUser
