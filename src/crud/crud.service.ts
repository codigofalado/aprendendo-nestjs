import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Food } from "./food.entity";
import { FoodRepository } from "./food.repository";
import { CreateFoodDto } from "./create-food.dto";

@Injectable()
export class CrudService {
  constructor(
    @InjectRepository(Food, "MongoDBConn")
    private readonly foodRepository: FoodRepository
  ) {}

  // Retorna uma comida
  findOne(id: string): Promise<Food | undefined> {
    return this.foodRepository.findOne(id);
  }

  // Retorna todas as comidas
  findAll(): Promise<Food[]> {
    return this.foodRepository.find();
  }

  // Salva a Comida
  async save(data: CreateFoodDto) {
    return await this.foodRepository.createFood(data);
  }

  // Deleta a Comida
  async delete(data: Food) {
    return await this.foodRepository.remove(data);
  }

  returnToday(): string {
    let today = new Date();
    return today.toLocaleDateString();
  }
}
