import prismaClient from "../prisma";

class CreateCustomerService{
    async execute(){
        console.log('ROTA OK');

        return { ok: true }
    }
}

export {CreateCustomerService}