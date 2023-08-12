const {S3Client,PutObjectCommand}=require("@aws-sdk/client-s3")
const uploadtos3=async (data,filenme)=>{
    const s3clieint= await new S3Client({
         credentials: {
             accessKeyId:`${process.env.IAM_USER_KEY}`,
             secretAccessKey:`${process.env.IAM_SECREATE_KEY}`,
         },
         region:"us-west-2"
     })
     const upload= await new PutObjectCommand({
         
         Bucket:"expenseprojectsat",
         Key: filenme,
         Body: data,
         ACL: 'public-read',
     },)
    const url= await s3clieint.send(upload)
    console.log(url)
    return url
     
     
     }
     module.exports={uploadtos3}
    
