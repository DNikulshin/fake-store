import { paths, components } from "./generated";

export type ApiPaths = paths;
export type ApiSchemas = components["schemas"];

export type Product = components["schemas"]["Product"];
export type Category = components["schemas"]["Category"];
export type User = components["schemas"]["User"];
export type AuthResponse = components["schemas"]["AuthResponse"];
