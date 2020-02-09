import { Injectable } from "@nestjs/common";
import { Monkey } from "./monkey.entity";
import { MonkeyRepository } from "./monkey.repository";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class BasesMysqlService {
  constructor(
    @InjectRepository(Monkey)
    private readonly monkeyRepository: MonkeyRepository
  ) {}
  findAll(): Promise<Monkey[]> {
    return this.monkeyRepository.find();
  }
  findOne(monkey: number): Promise<Monkey> {
    return this.monkeyRepository.findOne(monkey);
  }
}
