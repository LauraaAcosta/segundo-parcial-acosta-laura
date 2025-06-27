import { Router } from "express"
import { editar, eliminar, enviar, obtener, obtenerId } from "../controllers/book.controllers.js"

const authRouter = Router()
authRouter.get("/books",obtener)
authRouter.get("/books/:id",obtenerId)
authRouter.post("/books",enviar)
authRouter.put("/book/:id",editar)
authRouter.delete("/books/:id", eliminar)

export default Router