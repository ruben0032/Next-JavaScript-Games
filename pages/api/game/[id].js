import Database from'@database/db';

const oneGame = async (req, res) => {
    try {
        const {id} = req.query;
        const entry = await Database.getById(id);
        if (!entry) {
            throw error
        }
        res.status(200).json(entry); 
    } catch (error) {
        console.log(error);
        res.status(404).json({ error: 'Videojuego no encontrado'});
    }
    
};
  
export default oneGame;