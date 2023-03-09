import ItemModel from "../models/item"
import { Car } from '../interfaces/car.interface';
const insertItem = async (item:Car) => {
    const responseInsert = await ItemModel.create(item)
    return responseInsert
}

export { insertItem }