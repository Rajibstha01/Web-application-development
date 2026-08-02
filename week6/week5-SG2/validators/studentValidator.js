import { param, body } from "express-validator";

export const createStudentValidator = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("name is required")
    .isLength({ min: 2 })
    .withMessage("name should be atleast of two characters"),

  body("course").trim().notEmpty().withMessage("course should not be empty"),
];
export const updateStudentValidator = [
  param("id").isInt().withMessage("id must be an integer").toInt(),
  body("name")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Name must not be empty"),
    
  body("course")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Course must not be empty"),
];
export const idParamValidator = [
  param("id").isInt().withMessage("id must be an integer").toInt(),
];
