import { Sequelize } from "sequelize"
import db from "../db.js"
import Fornecedor from "./Fornecedor.js"

const Produto = db.define('produto',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    preco: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    
})

Produto.Fornecedor = Produto.belongsTo(Fornecedor) 

export default Produto

