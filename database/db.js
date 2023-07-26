import {data} from './data.json';

const Database = {};

Database.getAll = async () => {
    const data = await getData();
    console.log("paso por database");
    return data;
};

Database.getById = async (id) => {
    let gameId = Number(id)
    const data = await getData();
    const entry = data.find(game => game.id == gameId);
    return entry;
};

const getData = async() => {
    return data
};

export default Database;