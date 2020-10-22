import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Formdata extends BaseSchema {
  protected tableName = "formdata";

  public async up() {
    this.schema.createTable(this.tableName, table => {
      table.increments("id");
      table.string("title");
      table.boolean("isCompleted");
      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
