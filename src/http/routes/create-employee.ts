import {z} from "zod"
import { prisma } from "../../lib/prisma"
import { FastifyInstance } from "fastify"

export async function createEmployee(app: FastifyInstance){
  app.post('/employee', async (request, reply) => {
    const createEmployeeBody = z.object({
      nome: z.string(),
      cpf: z.string(),
      orgId: z.string()
    })     
    const {nome, cpf, orgId} = createEmployeeBody.parse(request.body)
  
    const employee = await prisma.employee.create({
      data:{
       nome, cpf, orgId
      }
    }) 

      
      return reply.status(201).send({employeeId: employee.id})
  })
}


