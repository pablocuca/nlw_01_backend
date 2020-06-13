import { Request, Response } from "express";
import knex from "../database/connection";
import dotenv from 'dotenv'

dotenv.config();
const baseUrl = "http://192.168.0.12:3000";

class ItemsConroller {
  async index(request: Request, response: Response) {
    const items = await knex("items").select("*");


    const serializedItems = items.map(item => {
      return {
        id: item.id,
        title: item.title,
        image_url: `${baseUrl}/uploads/${item.image}`
      };
    });

    response.json(serializedItems);
  }
}

export default ItemsConroller;
