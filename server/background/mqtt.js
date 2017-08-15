MqttService.on('clientConnected', function(client) {
  console.log('Client connected:', client.id);
});


MqttService.subscribe('modules/+', function(topic, message, client) {
  var body = JSON.parse(message.toString())

  idMatches = topic.match(/[0-9]+/)
  id = idMatches && idMatches[0]

  if(!id) return;
  if(!body.values) return;

  ModulesService.update(id, body);
});
