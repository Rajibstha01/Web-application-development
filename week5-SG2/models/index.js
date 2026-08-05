// models/index.js
import { Student } from "./studentModels.js";
import { User } from "./userModels.js";
User.hasMany(Student, { foreignKey: "userId" });
Student.belongsTo(User, { foreignKey: "userId" });
export { Student, User };
