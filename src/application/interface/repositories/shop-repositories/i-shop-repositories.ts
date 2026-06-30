import { Shop } from "../../../../domain/entities/shop/shop.entity";

export interface ShopRepository{

    create(data: {name: string,file: File,address: string,manager_name: string,phone: number}): Promise<Shop>;

}