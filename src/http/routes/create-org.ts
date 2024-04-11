import {z} from "zod"
import { prisma } from "../../lib/prisma"
import { FastifyInstance } from "fastify"

export async function createOrg(app: FastifyInstance){
  app.post('/org', async (request, reply) => {
    const createOrgBody = z.object({
      nome: z.string(),
      cnpj: z.string()
    }) 
    
    const {nome, cnpj} = createOrgBody.parse(request.body)

    const org = await prisma.org.create({
      data:{
       nome, cnpj
      }
    }) 
      return reply.status(201).send({orgId: org.id})
  })
}


