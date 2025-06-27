import { json } from "express";
import books from "../models/book.model";

const validacionError = async(req,res)=> {
    return res.status(400).json({error:message})
};

export const getBooks = async(req,res)=> {
    try{
        const books = await books.findAll();
        res,json (book);
    }catch (error){
        res.status(500).json({error: "Error al encontrar personajes"})
    };
};

export const getBooksId = async (req,res)=> {
    try{
        const books = await books.findByPk(req.params.id);
        if(books)res.json(books);
        else res.status(404).json({error:"No se encontraron libros que coincidan"})
    }catch (error){
        res.status(500).json({error: error.message})
    };
};

export const createBooks = async(req,res)=> {
    try{
        const {title,author,pages,gender} = req.body;
    
        if (!title || !author || !pages ||!gender) {
            return validacionError (res, 'Los campos título, género, autor son obligatorios')
        }
        if (!Number.isInteger(pages)||pages<0){
            return validacionError(res, 'páginas debe ser un número mayor entero válido')
        }
        if (!['SciFi', 'Fantasia', 'Romance', 'Comedia', 'Terror', 'Policiaco', 'Educativos'].includes(gender)){
        return validacionError(res,'El género debe ser literarios o educativos');
        }
        const book = await Book.create({title, author, pages, gender})
        res.status(201).json(book);
    } catch(error){
        res.status(500).json({error:'Error interno del servidor'});
    };
}

export const updateBooks = async (req,res) => {
    const{id} =req.params;
    const{title, author, pages, gender} = req.body;
        try{
        const books = await Book.findByPk(id);
        if (!book){
            return res.status(404).json({error: 'Libro no encontrado'})
        }
        if (!title && title !== title.name){
            const existetitle = await title.findOne({where:{title}});
            if (existetitle && existetitle.id !== title.id) {
                return res.status(400).json({ error: 'Ya existe otro libro con este nombre.' });
            }
            await book.update({title, author, pages, gender });
            res.status(200).json(book)
        }catch (error) {
            if (error.title === 'SequelizeUniqueConstraintError') {
                return res.status(400).json({ error: 'Ya existe un libro con este título.' });}
            }
            res.status(500).json({ error: 'Error interno del servidor al actualizar el personaje.' });
        }
}