import { setupWorker } from "msw/browser";
import { productsHandlers } from "./handlers/products";
import { authHandlers } from "./handlers/auth";

export const worker = setupWorker(...authHandlers, ...productsHandlers);
