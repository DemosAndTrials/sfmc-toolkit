


module.exports = app => {

    app.post('/ca/create', async (req, res) => {
        console.log(req.body);
        res.send([{'result':'OK'}]);
        //res.send(req.user);
      });

      app.get('/ca/list', async (req, res) => {
        console.log(req.body);
        
        res.send([{'name':'test'}]);
      });

};