import Database from'@database/db';

const allGames = async (req, res) => {
    try {
        const data = await Database.getAll();
        res.status(200).json({ data, length:data.length });
    } catch (error) {
        console.log(error);
        res.status(500).json({ length: 0, data: [], error: 'Something went wrong' });
    }
};

export default allGames;