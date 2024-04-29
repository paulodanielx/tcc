import { FastifyInstance } from "fastify";
import {z} from "zod";
import { prisma } from "../../lib/prisma";

export async function createBatch(app:FastifyInstance) {
  app.post('/batch', async (request, reply) =>{
    const createBatchBody = z.object({
      status: z.string(),
      peso: z.number(),
      reciclavel: z.boolean(),
      collectPointId: z.string()
    }) 

    const {status, peso, reciclavel, collectPointId} = createBatchBody.parse(request.body)

    const batch = await prisma.batch.create({
      data:{
        status, peso, reciclavel, collectPointId
      }
    })

    return reply.status(201).send({batch})

  })
  
}