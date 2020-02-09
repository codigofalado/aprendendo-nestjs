import { Monkey } from "./monkey.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Monkey)
export class MonkeyRepository extends Repository<Monkey> {}
