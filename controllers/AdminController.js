
class AdminController{
    adminView(req,res){
        console.log(req.session.user.username);
        let username=req.session.user.username;
        res.render('admin',{username})
    }
}

module.exports=new AdminController();