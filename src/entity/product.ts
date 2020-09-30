import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
  } from "typeorm";
  import * as _ from 'lodash';

 @Entity({synchronize: true, name:'products'})
  export class Products {
  
    constructor(object?: Object) {
      _.assign(this, object);
    }
  
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ nullable: false })
    nombre: string;
  
  
    @Column({ default: false })
    sku: string;

    @Column({ default: false })
    description: string;
    
    @Column({ default: false })
    codigo: number;
  
  };