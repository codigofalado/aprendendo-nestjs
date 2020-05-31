import { IsNotEmpty } from "class-validator";
export class CreateFoodDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  ingredients: string;
  @IsNotEmpty()
  emoji: string;
  @IsNotEmpty()
  price: number;
}
