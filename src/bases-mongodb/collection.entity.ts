import { Entity, Column, ObjectID, ObjectIdColumn } from "typeorm";

@Entity()
export class Collection {
  @ObjectIdColumn()
  id: ObjectID;

  @Column({ length: 500 })
  name: string;

  @Column("text")
  description: string;

  @Column("tinytext")
  emoji: string;

  @Column("bool")
  status: boolean;
}
