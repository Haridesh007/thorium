let axios = require("axios")

let memeCreater=async function(req,res){
    try{
        let meme = req.query.template_id
        let text0=req.query.text0
        let text1=req.query.text1
        let options={
            method:"post",
            url:`https://api.imgflip.com/caption_image?template_id=${meme}&text0=${text0}&text1=${text1}&username=chewie12345&password=meme@123`

        
        }
        let result = await axios(options)
        console.log(result)
        let data = result.data
        res.send({mesg:data,status:true})
        


    }catch(eror){
        console.log(error)
        res.status(500).send({status:false,msg:"server error"})
    }
}
module.exports.memeCreater = memeCreater