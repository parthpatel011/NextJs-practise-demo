"use server"
import { deleteProduct } from "@/prisma-db";
import { revalidatePath } from "next/cache";
export async function removeProduct(id:number){
    await deleteProduct(id);
    revalidatePath("/product-db");
}