import {z} from "zod"
import { prisma } from "../../lib/prisma"
import { FastifyInstance } from "fastify"
 
export async function getOrg(app: FastifyInstance){
  app.get('/org/:orgId', async (request, reply) => {
    const getOrgParams = z.object({
      orgId: z.string().uuid()
    }) 
    
    const {orgId} = getOrgParams.parse(request.params)

    const org = await prisma.org.findUnique({
      where:{
        id: orgId,
      }
    })
      return reply.send({org})
  })
} 


