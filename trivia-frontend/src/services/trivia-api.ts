import { Category } from "../TriviaContextProvider/TriviaContextProvider";
export interface CategoryResponse {
  trivia_categories: Category[];
}
export interface GetQuestionsRequestParams {
  category: number;
  difficulty: string;
}

export interface QuestionsResponse {
  response_code: number;
  results: any;
}

export class TriviaAPI {
  public static async getCategories(): Promise<CategoryResponse> {
    const response = await fetch("https://opentdb.com/api_category.php");
    return await response.json();
  }

  public static async getQuestions(
    data: GetQuestionsRequestParams
  ): Promise<QuestionsResponse> {
      if (data.category !== 0) {
          const response = await fetch(
            `https://opentdb.com/api.php?amount=10&category=${data.category}&difficulty=${data.difficulty}&type=multiple`
          );
          return await response.json();
      } else { 
          const response = await fetch(
            `https://opentdb.com/api.php?amount=10&difficulty=${data.difficulty}&type=multiple`
          );
          return await response.json();
      }
    
  }
}
