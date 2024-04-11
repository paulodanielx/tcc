import {z} from "zod"
import { prisma } from "../../lib/prisma"
import { FastifyInstance } from "fastify"
 
export async function getEmployee(app: FastifyInstance){
  app.get('/employee/:employeeId', async (request, reply) => {
    const getEmployeeParams = z.object({
      employeeId: z.string().uuid()
    }) 
    
    const {employeeId} = getEmployeeParams.parse(request.params)

    const employee = await prisma.employee.findUnique({
      where:{
        id: employeeId,
      }
    })
      return reply.send({employee})
  })
} 


