export interface Game { 
    id: number;
    date: Date;
    score: number;
}
export interface UpdateGameParam { 
  score: number;
}
export class GameService {
  public static async get(): Promise<Game[]> {
    const response = await fetch("http://localhost:8080/games");
    return await response.json();
  }

  public static async createGame(): Promise<Game> {
    const response = await fetch("http://localhost:8080/games", {
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
    const response = await fetch(`http://localhost:8080/games/${id}`, {
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