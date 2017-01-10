var mqtt = require('mqtt'), url = require('url');

var mqtt_url = url.parse(process.env.CLOUDMQTT_URL || 'm13.cloudmqtt.com');
var url = "mqtt://" + mqtt_url.host;

var options = {
  port: 15150,
  clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),
  username: 'xsss',
  password: 'xsss',
};


var client = mqtt.connect("mqtt://m13.cloudmqtt.com", options);
client.on('connect', function() {
  client.subscribe('otp', function() {
    client.on('message', function(topic, message, packet) {
      console.log("Received '" + message + "' on '" + topic + "'");
    });
  });
});