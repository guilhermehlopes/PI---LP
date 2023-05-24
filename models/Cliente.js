import { Sequelize } from "sequelize"
import db from "../db.js"
//import Usuario from "./Usuario.js"

const Cliente = db.define('cliente',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

//Cliente.Usuario = Cliente.belongsTo(Usuario) 

export default Cliente

