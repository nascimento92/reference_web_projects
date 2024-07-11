import prismaClient from "../prisma";

class listCustomerService{
    async execute(){
        const customers = await prismaClient.customer.findMany();
        return customers;
    }
}

export{listCustomerService}