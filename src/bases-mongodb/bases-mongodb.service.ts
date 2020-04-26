import { Injectable } from "@nestjs/common";
import { Collection } from "./collection.entity";
import { CollectionRepository } from "./collection.repository";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class BasesMongodbService {
  constructor(
    @InjectRepository(Collection, "MongoDBConn")
    private readonly collectionRepository: CollectionRepository
  ) {}
  findAll(): Promise<Collection[]> {
    return this.collectionRepository.find();
  }
  findOne(collection: string): Promise<Collection> {
    return this.collectionRepository.findOne(collection);
  }
}
