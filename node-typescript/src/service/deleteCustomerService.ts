import prismaClient from "../prisma";

interface deleteCustomerProps{
    id:string
}

class deleteCustomerService{
    async execute({id}:deleteCustomerProps){
        if(!id){
            throw new Error("Id inválido!");
        }

        const findCustomer = await prismaClient.customer.findFirst({
            where:{
                id : id
            }
        });

        if(!findCustomer){
            throw new Error("Customer não localizado!");
        }

        await prismaClient.customer.delete({
            where:{
                id:findCustomer.id
            }
        });

        return {message:"Cliente excluído com sucesso!"};
    }
}

export{deleteCustomerService}