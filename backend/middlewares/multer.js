import cloudinary from '../config/cloudinary.js'
import multer from 'multer'
import streamifier from 'streamifier'

const storage = multer.memoryStorage()
const upload = multer({ storage })

export const uploadToCloudinary = (fieldName) => {
  return (req, res, next) => {
    if (!req.file) return next()

    const stream = cloudinary.uploader.upload_stream(
      { folder: 'doctors' },
      (error, result) => {
        if (error) return next(error)
        req.file.path = result.secure_url
        next()
      }
    )

    streamifier.createReadStream(req.file.buffer).pipe(stream)
  }
}

export default upload
