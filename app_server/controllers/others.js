/* GET 'about us' page */
module.exports.about = function(req, res) {
  res.render('generic-text', {
    title: 'About Loc8r',
    content: ' in sollicitudin ante. Cras rhoncus accumsan rutrum. Sed aliquet ligula dui, eget laoreet turpis tempor vitae.'
  });
};

module.exports.angularApp = function(req, res){
res.render('layout', { title: 'Loc8r' });
};
