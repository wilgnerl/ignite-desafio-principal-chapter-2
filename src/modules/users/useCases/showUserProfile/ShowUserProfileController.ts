import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const { id } = request.params;
    try {
      const user = this.showUserProfileUseCase.execute({ user_id: id });

      return response.json(user);
    } catch (erro) {
      return response.status(404).json(erro);
    }
  }
}

export { ShowUserProfileController };
