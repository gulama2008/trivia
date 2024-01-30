import { url } from "./games-service";

export interface Question {
  id: number;
  question: string;
  correntAnswer: string;
  incorrentAnswer: string[];
  submittedAnswer: string;
  failureStatus: boolean;
  gameId: number;
}

export interface NewQuestionParams {
  question: string;
  correntAnswer: string;
  incorrentAnswer: string[];
  submittedAnswer: string;
  failureStatus: boolean;
  gameId: number;
}

export interface UpdateQuestionParams {
  submittedAnswer: string;
  failureStatus: boolean;
}

export class QuestionService {
  public static async get(): Promise<Question[]> {
    const response = await fetch(`${url}/questions`);
    return await response.json();
  }

  public static async getById(id: number): Promise<Question> {
    const response = await fetch(`${url}/questions/${id}`);
    if (!response.ok) {
      throw new Error(`Could not find question with id ${id}`);
    }
    return await response.json();
  }

  public static async createQuestion(
    data: NewQuestionParams
  ): Promise<NewQuestionParams> {
    const response = await fetch(`${url}/questions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Could not create question");
    }
    return response.json();
  }

  public static async getByFailureStatus(): Promise<Question[]> {
    const response = await fetch(`${url}/questions/failed`);
    if (!response.ok) {
      throw new Error(`Could not find questions with status "failed"`);
    }
    return await response.json();
  }

  public static async updateQuestion(id: number, data: UpdateQuestionParams) {
    const response = await fetch(`${url}/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Could not update");
    }
  }
}
