import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Monkey } from "./monkey.entity";
import { Repository } from "typeorm";

@Injectable()
export class BasesMysqlService {
  constructor(
    @InjectRepository(Monkey)
    private readonly monkeyRepository: Repository<Monkey>
  ) {}
  findAll(): Promise<Monkey[]> {
    return this.monkeyRepository.find();
  }
  findOne(monkey: number): Promise<Monkey> {
    return this.monkeyRepository.findOne(monkey);
  }
}
