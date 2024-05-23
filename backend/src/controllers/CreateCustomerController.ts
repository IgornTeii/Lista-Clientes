import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerService } from "../services/CreateCustomerService";

class CreateCustomerController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        
        const customerController = new CreateCustomerService()

        const customer = await customerController.execute()

        reply.send(customer)
    }
}

export {CreateCustomerController}