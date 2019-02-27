const mongoose = require('mongoose');
const CaConfig = mongoose.model('custom_activity_config');


module.exports = app => {

    app.post('/ca/create', async (req, res) => {
        console.log("/ca/create " + JSON.stringify(req.user));

        const { configName, configKey, configType, configDescription, configIsConfigured } = req.body;

        const config = new CaConfig({
          name:configName,
          key:configKey,
          type: configType,
          description:configDescription,
          isConfigured: configIsConfigured,
          _user: req.user.id
        });

    
        try {
          await config.save();
          console.log(config);
          res.send(config);
        } catch (err) {
          console.log(err);
          res.status(422).send(err);
        }
      });

      app.get('/ca/list', async (req, res) => {
        console.log(req.body);
        
        res.send([{'name':'test'}]);
      });

};