export const middlewareGlobal = (req, res, next) => {
  next();
};

// export const middlewareGlobal = (req, res, next) => {
//   if (req.body && req.body.cliente) { //* o req.body precisa estar junt
//     console.log(`Post: ${req.body.cliente}`);
//   }
//   next();
// };


/*
* 1. Por que req.body && req.body.cliente evita o erro?
* O erro ocorre porque req.body pode ser undefined em algumas requisições. Quando você tenta acessar diretamente req.body.cliente sem verificar se req.body existe, o JavaScript tenta ler a propriedade cliente de undefined, causando o erro:


* Cannot read properties of undefined (reading 'cliente')
* Explicação técnica:
* Sem verificação: req.body.cliente → Se req.body for undefined, isso causa erro imediato
* Com verificação: req.body && req.body.cliente → O operador && (AND lógico) usa short-circuit evaluation:
* Primeiro avalia req.body
* Se req.body for undefined ou null (valores falsy), a expressão retorna undefined imediatamente sem avaliar req.body.cliente
* Só tenta acessar .cliente se req.body existir
* req.body só existe quando:
 
* A requisição tem um body (POST, PUT, etc.)
* O middleware express.urlencoded() ou express.json() já processou o body
* Em requisições GET ou requisições sem body, req.body será undefined. 
 */