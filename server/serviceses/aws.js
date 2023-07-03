const {S3Client,PutObjectCommand}=require("@aws-sdk/client-s3")
const uploadtos3=async (data,filenme)=>{
    const s3clieint= await new S3Client({
         credentials: {
             accessKeyId:"AKIARQHUE2MPZVDE6O4G",
             secretAccessKey:"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",
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
    
