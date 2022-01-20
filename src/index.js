const messages = ['David', 'Laura', 'Tatiana', 'Felipe', 'Andre']

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)]
  console.log(message)
}

module.exports = { randomMsg }