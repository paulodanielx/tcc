import fastify from "fastify";
import { PrismaClient } from "@prisma/client";
import 'dotenv/config'
import { z } from "zod" 

const app = fastify ()

const prisma = new PrismaClient()

app.post('/org', async (request) => {
  const createOrgBody = z.object({
    nome: z.string(),
    cnpj: z.string()
  })

  const {nome, cnpj} = createOrgBody.parse(request.body)

  const org = await prisma.org.create({
    data:{
     nome, cnpj
    }
  } ) 
  return org
})

app.get('/org', ()=>{

})

 
const HOST = process.env.HOST
const PORT = process.env.PORT

app.listen({
  host: typeof HOST === 'string' ? HOST : '0.0.0.0',
  port: typeof Number(PORT) === 'string' ? Number(PORT) : 3333
}).then(() => {
  console.log(`Server is running on http://${HOST}:${PORT}`)
})