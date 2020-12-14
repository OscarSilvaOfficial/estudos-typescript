import env from 'dotenv'
env.config()

const lib = {
  EMAIL: process.env.EMAIL,
  SENHA: process.env.SENHA,
  BASE: process.env.BASE
}

export default lib 