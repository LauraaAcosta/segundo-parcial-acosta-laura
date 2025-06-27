import {DataTypes} from "sequelize"
import sequelize from ".../config/database.js"

const books = sequelize.define('books',{
    id:{
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement:true,
    },
    title:{
        type: DataTypes.STRING,
        allowNull:false,
        unique:true,
    },
    author:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    pages: {
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    gender: {
        types:DataTypes.STRING(30),
    },
    description:{
        type: DataTypes.STRING,
        allowNull:true,
    }
});

export default books;