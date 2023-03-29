import {Sequelize, DataTypes} from 'sequelize';
import db from "../config/Database.js";

const Movies = db.define('Products', {
    
    name: {
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.STRING
    },  
}, {
    freezeTableName: true
});

await Movies.sync({ force: false });
console.log("The table for the Movies model was just (re)created!");

export default Movies;