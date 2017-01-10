var mqlight = require('mqlight');
var uuid = require('node-uuid');

var opts = {};
opts.service = 'https://mqlight-lookup-prod01.messagehub.services.us-south.bluemix.net/Lookup?serviceId=d603a325dsdsd-de66-414f-sdssssd-4f8fb0df1baf';
opts.user = 'ssss';
opts.password = 'ssss';
opts.id = 'NODE_WORKER_' + uuid.v4().substring(0, 7);

var mqlightClient = mqlight.createClient(opts, function (err) {
  if (err) {
    console.error('Connection to ' + opts.service + ' using client-id ' +
      mqlightClient.id + ' failed: ' + err)
  } else {
    console.log('Connected to ' + opts.service + ' using client-id ' +
      mqlightClient.id)
  }
    for(var i = 0;i< 40 ; i++ ){
        mqlightClient.send('MQLight', 'Hello: '+i, function (err,data) {
      console.log(data);
    });
    }
 
});

mqlightClient.on('error', function (err) {
  console.error(err)
})
