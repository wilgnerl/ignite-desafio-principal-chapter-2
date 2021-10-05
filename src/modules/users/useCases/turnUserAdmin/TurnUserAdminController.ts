import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const { id } = request.params;

    try {
      const user = this.turnUserAdminUseCase.execute({ user_id: id });
      return response.json(user);
    } catch (erro) {
      return response.status(404).json(erro);
    }
  }
}

export { TurnUserAdminController };
