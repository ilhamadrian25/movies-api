import Movies from "../model/MovieModel.js";

export const getMoviesAll = async (req, res) => {
    try {
        const response = await Movies.findAll();
        if(!response) return res.status(200).json('Data not found');
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
    }
}

export const insertMovies = async (req, res) => {
    
    try {
        await Movies.create(req.body);
        return res.status(200).json('Data has add');
    } catch (error) {
        console.log(error);
    }
}