import type { Coffee } from "src/types/Coffee";

const RANDOM_COFFEE_URL =
  "https://random-data-api.com/api/coffee/random_coffee";

export class CoffeeService {
  public static async getCoffeeData(): Promise<Coffee> {
    const response = await fetch(RANDOM_COFFEE_URL);
    if (response.ok) {
      return (await response.json()) as Coffee;
    }
    throw new Error("Something went wrong");
  }
}
