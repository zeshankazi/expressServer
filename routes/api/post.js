const express= require('express');
const router= express.Router();


//@route    Get api/post/test
//@desc     Test post route
//@acess    Public
router.get('/test',(req,res)=>{
res.json({
    msg:"Post works "
})
})

module.exports=router;