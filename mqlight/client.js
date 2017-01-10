var mqlight = require('mqlight');
var uuid = require('node-uuid');




var opts = {};
opts.service = 'https://mqlight-lookup-prod01.messagehub.services.us-south.bluemix.net/Lookup?serviceId=s-de66-414f-dsdsds-4f8fb0df1baf';
opts.user = 'dssds';
opts.password = 'dssd';
opts.id = 'NODE_WORKER_' + uuid.v4().substring(0, 7);

var mqlightClient = mqlight.createClient(opts, function (err) {
  if (err) {
    console.error('Connection to ' + opts.service + ' using client-id ' +
      mqlightClient.id + ' failed: ' + err)
  } else {
    console.log('Connected to ' + opts.service + ' using client-id ' +
      mqlightClient.id)
  }

  mqlightClient.on('message', function(data){
    console.log(data);
  });
 //function doHonour(data){console.log(new Date().getTime()+'Received : '+data);}
  var subOpts = { credit: 1, autoConfirm: false, qos: 1 };
  mqlightClient.subscribe('MQLight', function (err) {
    if (err) {
      console.error('Failed to subscribe: ' + err)
    } else {
      console.log('Subscribed')
    }
  })
})

mqlightClient.on('error', function (err) {
  console.error(err)
})
