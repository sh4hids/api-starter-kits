import Joi from 'joi';
import { Model } from 'sequelize';

export const TodoSchema = Joi.object({
  task: Joi.string().trim().required(),
  isCompleted: Joi.boolean().required(),
});

export default (sequelize, DataTypes) => {
  class Todo extends Model {
    // eslint-disable-next-line no-unused-vars
    static associate(models) {
      // define association here
    }
  }
  Todo.init(
    {
      task: DataTypes.STRING,
      isCompleted: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Todo',
    }
  );
  return Todo;
};
