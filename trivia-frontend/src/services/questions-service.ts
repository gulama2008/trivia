export interface Question {
  id: number;
  question: string;
  correntAnswer: string;
  incorrentAnswer: string[];
  submittedAnswer: string;
  failedOrNot: boolean;
  gameId: number;
}

export interface NewQuestionParams {
  question: string;
  correntAnswer: string;
  incorrentAnswer: string[];
  submittedAnswer: string;
  failedOrNot: boolean;
  gameId: number;
}

export class QuestionService {
  public static async get(): Promise<Question[]> {
    const response = await fetch("http://localhost:8080/questions");
    return await response.json();
  }

  public static async getById(id: number): Promise<Question> {
    const response = await fetch(`http://localhost:8080/questions/${id}`);
    if (!response.ok) {
      throw new Error(`Could not find question with id ${id}`);
    }
    return await response.json();
  }

  public static async createQuestion(data: NewQuestionParams): Promise<NewQuestionParams> {
    const response = await fetch("http://localhost:8080/questions", {
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
}
