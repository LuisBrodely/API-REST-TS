import { Request, Response } from "express"
import { insertItem } from "../services/item"
import { handleHttp } from "../utils/error.handle"

const getItem = (req:Request, res:Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_GET_ITEM')
    }
}

const getItems = (req:Request, res:Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_GET_ITEMS')
    }
}

const updateItem = (req:Request, res:Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_UPDATE_ITEM')
    }
}

const postItem = async (req:Request, res:Response) => {
    try {
        const { body } = req
        const responseItem = await insertItem(body)
        res.send(responseItem)
    } catch (error) {
        handleHttp(res, 'ERROR_POST_ITEM')
    }
}

const deleteItem = (req:Request, res:Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_DELETE_ITEM')
    }
}

export { getItem, getItems, updateItem, postItem, deleteItem }