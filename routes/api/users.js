const express= require('express');
const router= express.Router();


//@route    Get api/user/test
//@desc     Test post route
//@acess    Public
router.get('/test',(req,res)=>{
res.json({
    msg:"User works "
})
})

module.exports=router;