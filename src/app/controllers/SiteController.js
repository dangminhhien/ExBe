
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
    edit (req, res){
        res.render('edit');
    }
    tasks (req, res){
        res.render('tasks');
    }
    
}

module.exports = new SiteController();