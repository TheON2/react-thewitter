const AWS = require('aws-sdk');
const sharp = require('sharp');

const s3 = new AWS.S3();

exports.handler = async (event,context,callback) => {
  const Bucket = event.Records[0].s3.bucket.name; // thewitter-s3
  const Key = decodeURIComponent(event.Records[0].s3.object.key); // original/123123123_abc.png 한글파일명에 대비하여 디코드해준다
  console.log(Bucket , key);
  const filename = Key.split('/')[Key.split('/').length-1];
  const ext = Key.split('.')[Key.split('.').length-1].toLowerCase(); // 확장자가 대문자일경우를 대비하여 모두 소문자로 변환해준다.
  const requiredFormat = ext === 'jpg' ? 'jpeg' : ext; // sharp는 jpg 파일일 경우 확장자를 jpeg로 변경해주어야한다.
  console.log('filename',filename,'ext',ext);

  try{
    const s3Object = await s3.getObject({ Bucket , Key }).promise();
    console.log('original',s3Object.Body.length); // s3에서 들고온 이미지의 크기 측정
    const resizedImage = await sharp(s3Object.Body)
      .resize(400,400, { fit: 'inside' }) // 400 x 400 사이즈로 리사이징 하고 빈틈없이 채워진 이미지로 변환
      .toFormat(requiredFormat)// 파일의 확장자 전송
      .toBuffer();
    await s3.putObject({
      Bucket,
      Key: `thumb/${filename}`,
      Body: resizedImage,
    }).promise(); // s3의 섬네일 폴더에 리사이징 된 파일 전송
    console.log('put',resizedImage.length);
    return calllback(null, `thumb/${filename}`); // 전송 성공
  }catch (err){
    console.err(err);
    return callback(err); // passport의 done과 비슷한 역할을함
  }
}