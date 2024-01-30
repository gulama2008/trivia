export interface Game { 
    id: number;
    date: Date;
    score: number;
}
export interface UpdateGameParam { 
  score: number;
}

export const url="https://trivia-app-v1-25fbb26bb180.herokuapp.com"
export class GameService {
  public static async get(): Promise<Game[]> {
    const response = await fetch(`${url}/games`);
    return await response.json();
  }

  public static async createGame(): Promise<Game> {
    const response = await fetch(`${url}/games`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Could not create game");
    }
    return response.json();
  }

  public static async updateGame(id: number, data: any) {
    const response = await fetch(`${url}/games/${id}`, {
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