import api from "./api";

export const createUser = async (body) => {
    if (!body.hasOwnProperty("picture")) body.picture = "";
    if (!body.hasOwnProperty("name")) body.name = "";

    try {
        const request = await api.post('/users', body);
        console.log(request.data);
    } catch (error) {
        if (error.response) {
            console.error('Erro de resposta da API:', error.response.status, error.response.data);
        } else if (error.request) {
            console.error('Erro de requisição:', error.request);
        } else {
            console.error('Erro ao configurar a requisição:', error.message);
        }
    }
};
