import fastify from "fastify";
import 'dotenv/config'
import { createOrg } from "./routes/create-org";
import { createEmployee } from "./routes/create-employee";
import { createCP } from "./routes/create-cp";
import { getOrg } from "./routes/get-org";
import { getEmployee } from "./routes/get-employee";
import { createBatch } from "./routes/create-batch";

const app = fastify ()
  
app.register(createOrg)
app.register(createEmployee)
app.register(createCP)
app.register(getOrg)
app.register(getEmployee)
app.register(createBatch)
 
const HOST = process.env.HOST
const PORT = process.env.PORT

app.listen({
  host: typeof HOST === 'string' ? HOST : '0.0.0.0',
  port: typeof Number(PORT) === 'string' ? Number(PORT) : 3333
}).then(() => {
  console.log(`Server is running on http://${HOST}:${PORT}`)
})