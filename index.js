import express from 'express'
import db from './db.js'
import ClienteRouter from './routes/ClienteRoutes.js'
import FornecedorRouter from './routes/FornecedorRoutes.js'
import ProdutoRouter from './routes/ProdutoRoutes.js'


const app = express()
app.use(express.json())
db.sync(() => console.log('banco de dados preparado'))

// npm i --save-dev nodemon
// "dev"

app.use('/cliente',ClienteRouter)
app.use('/fornecedor',FornecedorRouter)
app.use('/produto',ProdutoRouter)

const port = process.env.PORT || 3000
app.listen(port, () => {console.log('API Rodando na porta 3000!')})


// consultar no firefox endereço seguinte (3000 porta definida) http://localhost:3000/cliente / http://localhost:3000/fornecedor / http://localhost:3000/produto

/*Sistema de gerenciamento de estoque de autopeças 
Guilherme Lopes 
Gustavo Queiroz  

Entidade: Cliente 
Atributos: 
ID (identificador único do usuário) – Número; 
Nome (nome do usuário) – Texto; 
Senha (senha do usuário) – Texto; 
E-mail (endereço de e-mail do fornecedor) – Texto. 
Telefone (número de telefone do fornecedor) – Número. 
Endereço (endereço do fornecedor) – Texto; 

Entidade: Produto 
Atributos: 
ID (identificador único da peça) – Número; 
Descrição (nome da peça) – Texto; 
Preço (preço unitário da peça) – Decimal; 
Quantidade (quantidade disponível em estoque) – Número. 

Entidade: Fornecedor 
Atributos: 
ID (identificador único do fornecedor) – Número; 
Nome (nome do fornecedor) – Texto; 
Endereço (endereço do fornecedor) – Texto; 
E-mail (endereço de e-mail do fornecedor) – Texto; 
Telefone (número de telefone do fornecedor) – Número. 
 */