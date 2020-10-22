import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

import { DateTime } from "luxon";

export default class Formdatum extends BaseModel {
  @column({ isPrimary: true })
  public id: number;
  @column()
  public title: String;
  @column()
  public isCompleted: Boolean;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
