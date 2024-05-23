import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerService } from "../services/CreateCustomerService";

class CreateCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { name, email } = request.body as { name: string; email: string };

    const customerController = new CreateCustomerService();
    const customer = await customerController.execute({ name, email });

    reply.send(customer);
  }
}

export { CreateCustomerController };
