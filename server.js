var FormData =  require('form-data');
const fetch =  require('node-fetch');
const io = require('socket.io')();

var data = null;
function makerequest(){
  var fm = new FormData(),
  pps='{"rid":"n","ord":"t","tel":"t","eti":"n"}'
  fm.append('rid','');fm.append('nam','');fm.append('eti','n')
  fm.append("s", "controller");fm.append("a", "findmobile");fm.append("dd", pps);
  fm.append("d", "orderin_fn");fm.append('m','l');fm.append('c','orders')

  fetch('http://worktimer.kitchencarelimited.com/server/',{method: 'post', body: fm})
  .then(res => res.json())
  .then(rd => { 
    console.log(rd);
    
    data = rd 
  })

}


io.on('connection', (client) => {
  client.on('subscribeToTimer', (interval) => {
    console.log('client is subscribing to timer with interval ', interval);


    setInterval(() => {
      makerequest();
      client.emit('timer', data);
    }, interval);
  });
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);