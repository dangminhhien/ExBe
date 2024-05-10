
class  SiteController{
    index (req, res){
        res.render('login');
    }
    home (req, res){
        res.render('home');
    }
    back (req, res){
        res.render('back');
    }
    

}

module.exports = new SiteController();