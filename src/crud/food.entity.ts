import { Entity, Column, ObjectID, ObjectIdColumn } from "typeorm";

@Entity()
export class Food {
  @ObjectIdColumn()
  id: ObjectID;

  @Column({ length: 500 })
  name: string;

  @Column("text")
  ingredients: string;

  @Column("tinytext")
  emoji: string;

  @Column("decimal", { precision: 5, scale: 2 })
  price: number;
}
