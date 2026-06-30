import { Owner } from "../../../../domain/entities/owner/owner.entity";
import { OwnerRepository } from "../../../../application/interface/repositories/owner-repositories/i-owner-repository";
import { pool } from "../../../database/mysql";

export class MySQLOwnerRepositories implements OwnerRepository{

    async create(data: {email: string, password: string}) : Promise<Owner> {
        
        const [result] : any =  await pool.query('insert into owner (email, password) values (?, ?)',[data.email,data.password]);

        return new Owner(result.insertId,result.email,null);

    }

    async findByEmail(email: string): Promise<Owner | null> {
        
        const [rows] : any = await pool.query('select * from owner where email = ?',[email]);

        if(rows.length === 0) {
            return null;
        }

        const row = rows[0];

        return new Owner(row.id,row.email,row.password);

    }

    async findById(id: number): Promise<Owner | null> {
        
        const [row] : any = await pool.query('select * from owner where id = ?',[id]);

        if(row === undefined || row === null) return null;

        return new Owner(row.id,row.email,null);

    }

}