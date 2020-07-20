import AWS from 'aws-sdk'

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
})

const params = {
  Bucket: 'pocykani',
  Key: 'images/',
  ContentType: 'image/jpg'
}

export default s3.getSignedUrl('putObject', params, (err, url) => {
  return url
})