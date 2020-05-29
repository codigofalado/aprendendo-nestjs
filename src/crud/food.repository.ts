import { Food } from "./food.entity";
import { EntityRepository, Repository } from "typeorm";
import { CreateFoodDto } from "./create-food.dto";

@EntityRepository(Food)
export class FoodRepository extends Repository<Food> {
  createFood = async (foodDto: CreateFoodDto) => {
    return await this.save(foodDto);
  };
}
