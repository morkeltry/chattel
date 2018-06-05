const WebSocket = require('ws')
const PORT = 8989;
const wss = new WebSocket.Server({ port: PORT })

const users = []

const broadcast = (data, ws) => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN && client !== ws) {
      client.send(JSON.stringify(data))
    }
  })
}

console.log('Listening on ',PORT);
wss.on('connection', (ws) => {
  console.log('Got connection.');
  let index
  ws.on('message', (message) => {
    const data = JSON.parse(message)
    console.log('received: ',data.type);
    switch (data.type) {
      case 'ADD_USER': {
        index = users.length
        users.push({ name: data.name, id: index + 1 })
        ws.send(JSON.stringify({
          type: 'USERS_LIST',
          users
        }))
        broadcast({
          type: 'USERS_LIST',
          users
        }, ws)
        break
      }
      case 'ADD_MESSAGE':
        broadcast({
          type: 'ADD_MESSAGE',
          message: data.message,
          author: data.author
        }, ws)
        break
      default:
        break
    }
  })

  ws.on('close', () => {
    let leftChannel = users.splice(index, 1)
      console.log('Connection closed. Bye bye ',JSON.stringify(leftChannel));
    broadcast({
      type: 'USERS_LIST',
      users
    }, ws)
  })
});
