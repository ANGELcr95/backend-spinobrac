import server from "./app"; // corro el servidor con express

const PORT = process.env.PORT || 3000
server.listen(PORT)
console.log('server i port 3000')