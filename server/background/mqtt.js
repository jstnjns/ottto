MqttService.on('clientConnected', function(client) {
  // console.log('MQTT client connected:', client.id);
  console.log('mqtt client:', client)
});


MqttService.subscribe('modules/+', function(topic, message, client) {
  var body = JSON.parse(message.toString())

  idMatches = topic.match(/[0-9]+/)
  id = idMatches && idMatches[0]

  if (!id || !body.values) return;

  Modules
    .findOne({ chip: id })
    .then(function(module) {
      ModuleUpdateService.update(module.id, body);
    });
});
