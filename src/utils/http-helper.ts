import { HttpResponse } from "../models/http-response-model";

export const ok = async (data: any): Promise<HttpResponse> =>{
    return {
        statusCode: 200,
        body: data
    }
}

export const notContent = async (): Promise<HttpResponse> => {
    return {
        statusCode: 204,
        body: null
    }
}


export const createContent = async (): Promise<HttpResponse> => {
    return {
        statusCode: 201,
        body: {
            message: "Criado com sucesso!"
        }
    }
}

export const badRequest = async (): Promise<HttpResponse> => {
  return {
    statusCode: 400,
    body: null,
  };
};