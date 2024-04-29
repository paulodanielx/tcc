import {z} from "zod"
import { prisma } from "../../lib/prisma"
import { FastifyInstance } from "fastify"

export async function createCP(app: FastifyInstance){
  app.post('/cp', async (request, reply) => {
    const createCPBody = z.object({
      cep: z.string(),
      rua: z.string(),
      bairro: z.string(),
      numero: z.number(),
      orgId: z.string()
    })  
       
    const {cep, rua, bairro, numero, orgId} = createCPBody.parse(request.body) 

    const collectPoint = await prisma.collectPoint.create({
      data:{
        cep, rua, bairro, numero, orgId
      }
    })

    return reply.status(201).send({collectPointId: collectPoint.id})
    
  })
}


