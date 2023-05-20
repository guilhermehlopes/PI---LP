import { Sequelize } from "sequelize"
import db from "../db.js"

const Fornecedor = db.define('fornecedor',{
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
}
})
export default Fornecedor
