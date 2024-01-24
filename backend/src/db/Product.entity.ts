//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("Product")
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
Name: string;

@Column({nullable: true})
Description: string;

@Column({nullable: true})
Price: string;

@Column({nullable: true})
Manufacturer: string;

@Column({nullable: true})
Id: string;


}