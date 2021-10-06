import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const { user_id } = request.headers;
    try {
      const usersList = this.listAllUsersUseCase.execute({
        user_id: String(user_id),
      });
      return response.status(200).json(usersList);
    } catch (erro) {
      return response.status(400).json({ error: erro.message });
    }
  }
}

export { ListAllUsersController };
