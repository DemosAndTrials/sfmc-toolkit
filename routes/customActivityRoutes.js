const mongoose = require('mongoose');
const CaConfig = mongoose.model('custom_activity_config');

module.exports = app => {

  // create config
  app.post('/ca/create', async (req, res) => {
    console.log("/ca/create " + JSON.stringify(req.user));

    const {
      configKey,
      configType,
      configUseJwt,
      configName,
      configDescription,
      configSmallImageUrl,
      configBigImageUrl,
      configIsConfigured,
      configConfigOnDrop,
      // custom splits here
      configEditUrl,
      // splits here
      configEditHeight,
      configEditWidth,
      // schema here
    } = req.body;

    const config = new CaConfig({
      key: configKey,
      type: configType,
      useJwt: configUseJwt,
      name: configName,
      description: configDescription,
      smallImageUrl: configSmallImageUrl,
      bigImageUrl: configBigImageUrl,
      isConfigured: configIsConfigured,
      configOnDrop: configConfigOnDrop,
      // custom splits here
      //splits,
      editUrl: configEditUrl,
      // wizard steps here
      //steps,
      editHeight: configEditHeight,
      editWidth: configEditWidth,
      // schema here
      //schemaArgs,
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

  // get list of configs
  app.get('/ca/list', async (req, res) => {
    //console.log(req.body);
    const configs = await CaConfig.find({});
    //console.log(configs);
    res.send(configs);
  });

  // delete config
  app.post('/ca/delete/:id', async (req, res) => {
    //console.log("/ca/delete " + req.params.id);
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(400).json(false);
    const result = await CaConfig.findByIdAndRemove(id);
    //console.log(result);
    res.send(result);
  });

};