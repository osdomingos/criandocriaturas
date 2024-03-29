//Arrays: materiais, cheiros, comportamentos, cores, cores_hex e ascii
const materials = ['Argila', 'Madeira', 'Pedra', 'Metal', 'Gesso', 'Cerâmica', 'Resina', 'Vidro', 'Papel', 'Plástico', 'Ferro', 'Bronze', 'Alumínio', 'Cobre', 'Aço', 'Cimento', 'Tecido', 'Barro', 'Bambu', 'Couro', 'Areia', 'Poliéster', 'Gelatina', 'Papelão', 'Isopor', 'Cristal', 'Fio de cobre', 'Mármore', 'Cascalho', 'Fibra de vidro', 'Resina epóxi', 'Papel machê', 'Palha', 'Grama seca', 'Cera', 'Pedra-sabão', 'Pérolas', 'Gelo', 'Lã', 'Grafiti', 'Cortiça', 'Casca de ovo', 'Tinta', 'Pneus', 'Espuma', 'Plumas', 'Plástico reciclado', 'Algodão', 'Porcelana', 'Cartolina', 'Ferro-velho', 'Cascas de árvore', 'Garrafas de vidro', 'Areia colorida', 'Conchas marinhas', 'Cacos de cerâmica', 'Telhas quebradas', 'Couro sintético', 'Borracha', 'Coral', 'Nylon', 'Bolas de golfe', 'Folha de metal', 'Canudos de plástico', 'Cordas', 'Borracha de pneu', 'Lantejoulas', 'Espelhos quebrados', 'Folhas naturais', 'CDs', 'Tecido metálico', 'Couro de peixe', 'Folha de ouro', 'Miçangas', 'Escovas de dente', 'Rolhas de cortiça', 'Papel de seda', 'Espelho', 'Bolas de pingue-pongue', 'Tule', 'Cascas de frutas', 'Redes de pesca', 'Papel alumínio', 'Palitos de dente', 'Grampos de papel', 'Caixas de fósforo', 'Filme plástico', 'Fitas adesivas coloridas', 'Papel de presente', 'Papel vegetal', 'Rolos de papel higiênico', 'Circuitos eletrônicos', 'Fitas cassete', 'Papel celofane', 'Bolas de isopor', 'Canetas', 'Folhas de jornal', 'Papel de lixa', 'Rolos de filme fotográfico', 'Papel cartão']
const smells = ['Rosas', 'Café', 'Chocolate', 'Canela', 'Limão', 'Lavanda', 'Baunilha', 'Pinho', 'Mar', 'Grama recém-cortada', 'Jasmim', 'Laranja', 'Almiscar', 'Menta', 'Bergamota', 'Eucalipto', 'Maçã', 'Cereja', 'Patchouli', 'Anis', 'Hortelã-pimenta', 'Gengibre', 'Mel', 'Sândalo', 'Orvalho', 'Lírios', 'Cravo', 'Erva-cidreira', 'Alecrim', 'Morango', 'Amêndoas', 'Incenso', 'Pão recém-assado', 'Caramelo', 'Grãos de café torrados', 'Laranja doce', 'Algodão doce', 'Chuva', 'Cerveja', 'Cachoeira', 'Biscoitos de açúcar', 'Chá de camomila', 'Chá verde', 'Sal marinho', 'Noz-moscada', 'Manteiga de amendoim', 'Açafrão', 'Tangerina', 'Madeira de cedro', 'Violetas', 'Orégano', 'Coco', 'Frutas cítricas', 'Cerveja artesanal', 'Margaridas', 'Vinho tinto', 'Cera de abelha', 'Papel novo', 'Livros antigos', 'Barbeiro', 'Manteiga derretida', 'Cera de vela', 'Massa de pizza fresca', 'Salvia', 'Ferro quente', 'Terra molhada', 'Creme de baunilha', 'Fumaça de madeira', 'Couro novo', 'Pipoca fresca', 'Feno', 'Groselha', 'Pepino', 'Gás de fogão', 'Gasolina', 'Toranja', 'Hortelã', 'Cereja preta', 'Rosa-dos-ventos', 'Pêssego', 'Beterraba', 'Cachorro molhado', 'Colônia', 'Açúcar mascavo', 'Papel de jornal', 'Óleo de lavanda', 'Flores silvestres', 'Churrasco', 'Crisântemo', 'Alho', 'Cenoura', 'Terra fresca', 'Cachorro-quente', 'Calêndula', 'Cevada', 'Pão de mel', 'Rosa branca']
const ascii = [ '#', '*', '_', '-', '.', '|', '/', '\\', '+', '=', '>', '<', '^', 'v', '!', '?', '(', ')', '[', ']', '{', '}', '@', '~', '`', '$', '&', ':', ';', ',', '"', "'", '>', '<', '^', '|', '/', '\\', '+', '=', '!', '?', '(', ')', '[', ']', '{', '}', '@', '~', '`', '$', '&', ':', ';', ',', '"', "'", '>', '<', '^', '|', '/', '\\', '+', '=', '!', '?', '(', ')', '[', ']', '{', '}', '@', '~', '`', '$', '&', ':', ';', ',', '"', "'", '>', '<', '^', '|', '/', '\\', '+', '=', '!', '?', '(', ')', '[', ']', '{', '}', '@', '~', '`', '$', '&', ':', ';', ',', '"', "'"]
const behaviors = ["Polinização", "Comportamento social cooperativo", "Simbiose mutualista", "Migração sazonal", "Reciclagem de nutrientes", "Papel ecológico como presa", "Decomposição de matéria orgânica", "Prevenção de erosão do solo", "Produção de oxigênio", "Controle de pragas naturais", "Colaboração reprodutiva", "Desseminação de sementes", "Fornecimento de abrigo", "Papel como fonte de alimento", "Produção de antibióticos naturais", "Simbiose com plantas", "Ciclagem de nutrientes no solo", "Controle de populações de outros organismos", "Auxílio na cicatrização de feridas", "Contribuição para a biodiversidade", "Canibalismo", "Parasitismo", "Predação", "Competição agressiva", "Comportamento territorial", "Simbiose oportunista", "Crescimento descontrolado de população", "Disseminação de doenças", "Agressão intraespecífica", "Deslocamento de espécies nativas", "Competição por recursos limitados", "Produção excessiva de toxinas", "Mutualismo oportunista", "Ataques em enxame", "Contaminação de alimentos", "Infestação de pragas", "Invasão de habitats", "Formação de biofilmes nocivos", "Liberação de metabólitos tóxicos", "Toxidade bacteriana/fúngica"]
const colors = ['Branco', 'Preto', 'Cinza', 'Azul', 'Verde', 'Vermelho', 'Amarelo', 'Laranja', 'Roxo', 'Rosa', 'Marrom', 'Bege', 'Dourado', 'Prateado', 'Creme', 'Turquesa', 'Violeta', 'Magenta', 'Ciano', 'Aqua', 'Lavanda', 'Coral', 'Oliva', 'Esmeralda', 'Índigo', 'Ameixa', 'Cáqui', 'Âmbar', 'Malva', 'Salmão', 'Pêssego', 'Azul-celeste', 'Gelo', 'Chocolate', 'Caramelo', 'Púrpura', 'Ouro-rosa', 'Safira', 'Ametista', 'Marfim', 'Grená', 'Taupe', 'Bordô', 'Chartreuse', 'Champagne', 'Íris', 'Ágata', 'Melancia', 'Azul-turquesa', 'Marrom-avermelhado', 'Verde-esmeralda', 'Cinza-azulado', 'Rosa-choque', 'Vermelho-alaranjado', 'Amarelo-limão', 'Verde-azulado', 'Violeta-avermelhado', 'Laranja-avermelhado', 'Cinza-rosado', 'Verde-oliva', 'Amarelo-claro', 'Azul-acinzentado', 'Verde-menta', 'Violeta-azulado', 'Laranja-claro', 'Rosa-pálido', 'Marrom-dourado']
const colors_hex = ['#FFFFFF', '#000000', '#808080', '#0000FF', '#008000', '#FF0000', '#FFFF00', '#FFA500', '#800080', '#FFC0CB', '#800000', '#F5F5DC', '#DAA520', '#C0C0C0', '#FFFDD0', '#40E0D0', '#EE82EE', '#FF00FF', '#00FFFF', '#00FFFF', '#E6E6FA', '#FF7F50', '#808000', '#00FF00', '#4B0082', '#DDA0DD', '#F0E68C', '#FFA07A', '#B0E0E6', '#D2691E', '#FFDAB9', '#B0E0E6', '#F8F8FF', '#D2691E', '#8B4513', '#800080', '#FF69B4', '#0000FF', '#9966CC', '#FFFFF0', '#800000', '#483C32', '#800000', '#7FFF00', '#F7E7CE', '#5A4FCF', '#B57281', '#FC6C85', '#00CED1', '#8B0000', '#006400', '#708090', '#FF69B4', '#FF4500', '#ADFF2F', '#00CED1', '#D02090', '#FF4500', '#C0C0C0', '#808000', '#FFFFE0', '#B0C4DE', '#00FA9A', '#9370DB', '#FFA500', '#FFD1DC', '#B8860B']


//Variáveis globlais
let materialPrincipal = 0
let materialSecundario = 0
let cheiroPrincipal = 0
let cheiroSecundario = 0


//Objeto criatura
const criarCriatura = (id, idade, cores, materiais, cheiros, comportamento) => {
    let criatura = {
        id,
        idade,
        cores,
        materiais,
        cheiros,
        comportamento
    }
    return criatura
}


//Funções
function gerarId() {
    id = 'ID #'
    
    materialPrincipal = Math.floor(Math.random() * (materials.length - 1))
    if (materialPrincipal < 10) {
        id += 'M0' + `${materialPrincipal}`
    } else {
        id += 'M' + `${materialPrincipal}`
    }

    materialSecundario = Math.floor(Math.random() * (materials.length-1))
    if (materialSecundario < 10) {
        id += 'm0' + `${materialSecundario}`
    } else {
        id += 'm' + `${materialSecundario}`
    }

    cheiroPrincipal = Math.floor(Math.random() * (smells.length - 1))
    if (cheiroPrincipal < 10) {
        id += 'S0' + `${cheiroPrincipal}`
    } else {
        id += 'S' + `${cheiroPrincipal}`
    }

    cheiroSecundario = Math.floor(Math.random() * (smells.length - 1))
    if (cheiroSecundario < 10) {
        id += 's0' + `${cheiroSecundario}`
    } else {
        id += 's' + `${cheiroSecundario}`
    }

    return id
}

function gerarIdade() {
    return Math.floor(Math.random() * 1000000)
}

function gerarCores() {
    cores = []
    let corpo = Math.floor(Math.random() * (colors.length - 1))
    let partes = Math.floor(Math.random() * (colors.length - 1))
    let muco = Math.floor(Math.random() * (colors.length - 1))
    cores.push(colors[corpo])
    cores.push(colors[partes])
    cores.push(colors[muco])

    return cores
}

function gerarMateriais(maior, menor) {
    materiais = []
    materiais.push(materials[maior])
    materiais.push(materials[menor])

    return materiais
}

function gerarCheiros(maior, menor) {
    cheiros = []
    cheiros.push(smells[maior])
    cheiros.push(smells[menor])

    return cheiros
}

function gerarComportamento() {
    return behaviors[Math.floor(Math.random() * (behaviors.length - 1))]
}


//Visualização da criatura
let n = 0
const exibirCriatura = (criatura) => {
    const criaturaN = document.getElementById('n')
    const criaturaId = document.getElementById('id')
    const criaturaIdade = document.getElementById('idade')
    const criaturaCores = document.getElementById('cores')
    const criaturaMateriais = document.getElementById('materiais')
    const criaturaCheiros = document.getElementById('cheiros')
    const criaturaComportamento = document.getElementById('comportamento')
    

    criaturaN.innerHTML = `${n}`
    criaturaId.innerHTML = `${criatura.id}`
    criaturaIdade.innerHTML = `Idade: ${criatura.idade}`
    criaturaMateriais.innerHTML = `Materiais: Formada principalmente por ${criatura.materiais[0].toLowerCase()} e parcialmente por ${criatura.materiais[1].toLowerCase()}`
    criaturaCores.innerHTML = `Coloração: Corpo é ${criatura.cores[0].toLowerCase()}, com partes ${criatura.cores[1].toLowerCase()} e muco ${criatura.cores[2].toLowerCase()}`
    criaturaCheiros.innerHTML = `Odor: Tem cheiro pungente de ${criatura.cheiros[0].toLowerCase()} com nuances de ${criatura.cheiros[1].toLowerCase()}`
    criaturaComportamento.innerHTML = `Comportamento dominante: ${criatura.comportamento}`
    document.getElementById('imagem').innerHTML = gerarImagem(criatura)
}

function gerarImagem(criatura) {
    let caracteres = []
    let cores = []
    let frase = ``
    let opcaoCor = 0

    for (let material of criatura.materiais) {
        let caracter = materials.indexOf(material)
        caracteres.push(ascii[caracter])
        caracteres.push(ascii[Math.floor(Math.random() * (ascii.length - 1))])
        caracteres.push('█')
        caracteres.push(' ')
    }
    for (let cor of criatura.cores) {
        let indiceCor = colors.indexOf(cor)
        cores.push(colors_hex[indiceCor])
    }

    for (let i = 0; i < 12; i++) {
        for (let j = 0; j < 25; j++) {
            let aleatorio = Math.floor(Math.random()*100)
            if (aleatorio < 70) {
                opcaoCor = 0
            } else if (aleatorio < 90) {
                opcaoCor = 1
            } else {
                opcaoCor = 2
            }
            frase += `<span style="color:` + cores[opcaoCor] + `">` + caracteres[Math.floor(Math.random() * (caracteres.length - 1))] + `</span>`
        }
        frase += '<br>'
    }

    return frase
}

function gerarCriatura() {
    n++
    let criatura1 = criarCriatura(gerarId(), gerarIdade(), gerarCores(), gerarMateriais(materialPrincipal, materialSecundario), gerarCheiros(cheiroPrincipal, cheiroSecundario), gerarComportamento())
    console.log(criatura1)

    exibirCriatura(criatura1)
}

// Sobre
function sobre() {
    const titulo = document.getElementById('n')
    const autor = document.getElementById('id')
    const oQueE = document.getElementById('idade')
    const oQueSera = document.getElementById('cores')
    const criaturaMateriais = document.getElementById('materiais')
    const criaturaCheiros = document.getElementById('cheiros')
    const criaturaComportamento = document.getElementById('comportamento')

    titulo.innerHTML = 'Sobre'
    autor.innerHTML = 'Olá, sou Osmar. Gosto de me apresentar como artista visual e (em processo) programador. Criando Criaturas surge neste processo, como exercício em front-end onde tento reunir meu interesse pelo vasto universo da ficção científica.'
    oQueE.innerHTML = `A cada clique do botão, é criado um objeto criatura a partir da relação aleatória entre conjuntos de características. Até o momento, ${materials.length} materiais, ${colors.length} cores, ${smells.length} cheiros e ${behaviors.length} comportamentos. Além de gerar um ID que referencia o index de cada elemento nesses conjuntos e uma idade entre 0 e 1 milhão (sem adicionar "anos" no final porque imagino que existam outras unidades de medida de tempo de vida por aí).`
    criaturaMateriais.innerHTML = 'A imagem é gerada relacionando os materiais com conjunto de caracteres, que são tingidos a partir das cores da criatura.'
    oQueSera.innerHTML = 'Trazendo o digital para meu trabalho artístico, tenho projetado esculturas de uma seleção de criaturas geradas, levando em consideração os dados materiais, cheiros e cores. Farei um acervo de fotos na página assim que saírem do mundo das ideias.'
    criaturaCheiros.innerHTML = 'Em implementações futuras, pretendo realizar a versão "Coexistência". Duas criaturas serão geradas simultaneamentes e colocadas para conviver. Por meio da comparação de seus "comportamentos dominantes" algo vai acontecer. A princípio quero apresentar cada ocorrência com um pequeno conto pois imagino Coexistência como uma espécie de literatura para a web.'
    criaturaComportamento.innerHTML = ''
    document.getElementById('imagem').innerHTML = ''
}