import Formdatum from "App/Models/Formdatum";
import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Response from "@ioc:Adonis/Core/Response";
import databaseConfig from "config/database";
import { format } from "url";

// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class FormsController {
  public async index() {
    return Formdatum.all();
  }

  public async store({ request, response }: HttpContextContract) {
    Formdatum.create({ title: request.input("title"), isCompleted: false });
    return response.status(201).json({ created: true });
  }

  public async update({ request, response, params }: HttpContextContract) {
    const formd = await Formdatum.findOrFail(params.id);
    formd.isCompleted = request.input("isCompleted");
    formd.save();
    return formd;
  }
}
