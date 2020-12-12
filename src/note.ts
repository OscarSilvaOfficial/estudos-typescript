// Enumera cada mês apartir d 1
enum Mes {
    Jan,
    Fev,
    Mar,
    Abr,
    Mai,
    Jun,
    Jul,
    Ago,
    Set,
    Out,
    Nov,
    Dez
}

const aniversarioO: Mes = Mes.Dez; // retorna o número do mês
const aniversarioD: string = Mes[2]; // retorna o nome do mês

console.log(aniversarioD);
console.log(aniversarioO);

/*-------------------------------------------------------------*/

// Variáveis que retornam um valor desconhecido
const retornaAPI: unknown = 'JSON retornando pela API'
console.log(retornaAPI)

// Cancelar verificação de tipo ex: valores retornados de funções ou libs externas
const strangerLib: any = 15643894165
console.log('strangerLib')

// Funcões que não tem retorno
const mFunc = ():void => {
    console.log('Função sem retorno')
} 
mFunc();

// Funções que recebem um objeto como parâmetro e retorna
const enviaObjeto = function(o:object):object {
    return o
}
console.log(enviaObjeto({nome: 'Oscar da SIlva'}))
