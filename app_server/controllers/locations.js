module.exports.homeLists = function(req,res){
  res.render('locations-list',{title:'Homelist'});
};

module.exports.locationInfo = function(req,res){
  res.render('location-info',{title:"LocationInfo"});
};

module.exports.addReview = function(req,res){
  res.render('location-review-form',{title:"Add Review"});
};
