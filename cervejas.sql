SELECT * FROM beer_project.cervejas;

INSERT INTO `cervejas` 
(`idCerveja`, `nome`, `foto`, `precoMedio`, `nota` ,`pequenaDescri`, `descricao`, `localidadeIMG`, `localidade`, `estiloIMG`, `estilo`, `ml`, `coloracaoIMG`, `coloracao`, `tempIdeal`, `amargorIMG`, `amargor`, `aparencia`, `aroma`, `teor`, `harmonizacao`, `cervejaria`,`categoria`, `filtro`,`createdAt`,`updatedAt`) 
VALUES (
'1', 'Coopers Original', './cervejas/coopers.png',  15.00 , '0', 
'A Coopers Original Pale Ale é uma cerveja de notas frutadas e florais, com o equilíbrio perfeito entre o frutado e o amargor. ideal para quem está começando no estilo.',
 'A Coopers Original Pale Ale é uma cerveja de notas frutadas e florais, com o equilíbrio perfeito entre o frutado e o amargor. ideal para quem está começando no estilo.', './aus.svg', 'Australia', './copo.png', 'English Pale Ale', '375ml', './dourado2.jpg', 'Dourada', '12º a 14º', './amargor3.jpg', 'Moderado', 'Levemente turva', 'Pão, mel e notas cítricas do lúpulo.', '4,5%','Carnes vermelhas e aves.', 'Coopers','cooper','pale-ale',
 NOW(),NOW());


 
INSERT INTO `cervejas` 
(`idCerveja`, `nome`, `foto`, `precoMedio`, `nota` ,`pequenaDescri`, `descricao`, `localidadeIMG`, `localidade`, `estiloIMG`, `estilo`, `ml`, `coloracaoIMG`, `coloracao`, `tempIdeal`, `amargorIMG`, `amargor`, `aparencia`, `aroma`, `teor`, `harmonizacao`, `cervejaria`,`categoria`, `filtro`,`createdAt`,`updatedAt`) 
VALUES (
'2', 'Dado Bier Session IPA', './cervejas/dadoBierIpa.png',  10.00 , '0', 
'A Dado Bier Session IPA é uma cerveja em lata leve, refrescante e com ótimo drinkability. Com 4,1% de teor alcoólico e baixo amargor, é ideal para quem procura refrescância e sabor em uma única cerveja!',
 'A Dado Bier Session IPA é uma cerveja em lata leve, refrescante e com ótimo drinkability. Com 4,1% de teor alcoólico e baixo amargor, é ideal para quem procura refrescância e sabor em uma única cerveja!

Session IPA – a Session IPA aposta em baixo teor alcoólico (pode chegar até no max 5% de teor alcoólico) sem perder as características lupuladas. É um estilo de cerveja criada para ser bebida em maior quantidade.', './br.png', 'Brasil', './copo.png', 'Session IPA', '350ml', './dourado1.jpg', 'Amarela', '4º a 6º', './amargor2.jpg', 'Baixo', 'Levemente turva', 'Notas cítricas, frutadas.', '4,1%','Saladas, peixes e bolinho de bacalhau', 'Dado Bier','dado-bier','ipa',
 NOW(),NOW());



 
INSERT INTO `cervejas` 
(`idCerveja`, `nome`, `foto`, `precoMedio`, `nota` ,`pequenaDescri`, `descricao`, `localidadeIMG`, `localidade`, `estiloIMG`, `estilo`, `ml`, `coloracaoIMG`, `coloracao`, `tempIdeal`, `amargorIMG`, `amargor`, `aparencia`, `aroma`, `teor`, `harmonizacao`, `cervejaria`,`categoria`, `filtro`,`createdAt`,`updatedAt`) 
VALUES (
'3', 'Asgard Red Ale', './cervejas/asgardRedAle.jpg',  17.00 , '0', 
'A Asgard Red Ale é uma cerveja vermelho rubi com equilíbrio de malte e lúpulo, elaborada com quatro tipos de malte e com três variedades de lúpulos, cerveja bem equilibrada e com ótimo sabor.',
 'A Asgard Red Ale é uma cerveja vermelho rubi com equilíbrio de malte e lúpulo, elaborada com quatro tipos de malte e com três variedades de lúpulos, cerveja bem equilibrada e com ótimo sabor.', './br.png', 'Brasil', './copo.png', 'Red Ale', '355ml', './dourado4.jpg', 'Vermelha', '5º a 7º', './amargor3.jpg', 'Moderado', 'Turva', 'Malte, Lúpulo e Caramelo.', '6%','Pizza de calabresa e churrasco', 'Asgard Cervejaria','asgard','red-ale',
 NOW(),NOW());



 
INSERT INTO `cervejas` 
(`idCerveja`, `nome`, `foto`, `precoMedio`, `nota` ,`pequenaDescri`, `descricao`, `localidadeIMG`, `localidade`, `estiloIMG`, `estilo`, `ml`, `coloracaoIMG`, `coloracao`, `tempIdeal`, `amargorIMG`, `amargor`, `aparencia`, `aroma`, `teor`, `harmonizacao`, `cervejaria`,`categoria`, `filtro`,`createdAt`,`updatedAt`) 
VALUES (
'4', 'Guinness Special Export', './cervejas/guinnessSpecialExport.png', 45.00 , '0', 
'A cerveja Guinness Special Export é conhecida como a "Guinness belga" pois foi distribuída pela cervejaria belga John Martin S.A. Apresenta textura leve e cremosa, com sensação suave de efervescência e espuma cremosa de boa formação. Nos aromas e sabores apresenta notas de café torrado, chocolate amargo, melado, frutas escuras e caramelo. ',
 'A cerveja Guinness Special Export é conhecida como a "Guinness belga" pois foi distribuída pela cervejaria belga John Martin S.A. Apresenta textura leve e cremosa, com sensação suave de efervescência e espuma cremosa de boa formação. Nos aromas e sabores apresenta notas de café torrado, chocolate amargo, melado, frutas escuras e caramelo. ', './irlanda.png', 'Irlanda', './copo.png', 'Foreign Extra Stout', '330ml', './dourado5.jpg', 'Preto', '6º a 8º', './amargor2.jpg', 'Baixo', 'Opaca', 'Notas torradas, frutas escuras.', '8%','Chocolate com bacon, Pato e Queijo Parmesão', 'St. James Gate','importada','especial',
 NOW(),NOW());




 INSERT INTO `cervejas` 
(`idCerveja`, `nome`, `foto`, `precoMedio`, `nota` ,`pequenaDescri`, `descricao`, `localidadeIMG`, `localidade`, `estiloIMG`, `estilo`, `ml`, `coloracaoIMG`, `coloracao`, `tempIdeal`, `amargorIMG`, `amargor`, `aparencia`, `aroma`, `teor`, `harmonizacao`, `cervejaria`,`categoria`, `filtro`,`createdAt`,`updatedAt`) 
VALUES (
'5', 'Paulaner Hefe Weiss', './cervejas/paulaner.jpg', 20.00 , '0', 
'Uma das melhores cervejas de trigo, a Paulaner Hefe-Weissbier¹ Naturtrüb é sutilmente amarga, não filtrada e de cor amarela turva, esta cerveja com teor alcoólico de 5,5% possui o clássico aroma do estilo Weiss de',
 'Uma das melhores cervejas de trigo, a Paulaner Hefe-Weissbier¹ Naturtrüb é sutilmente amarga, não filtrada e de cor amarela turva, esta cerveja com teor alcoólico de 5,5% possui o clássico aroma do estilo Weiss de cravo e banana. Também é conhecida como “cerveja para o café da manhã”, na região da Bavária. Isso por ser uma cerveja de fácil digestão e leve. Com sabores frutados, malte adocicado e cravo, o sabor se assemelha muito aos aromas.

Hefe-Weissbier – em português significa “cerveja de trigo”. Esse estilo leva em sua preparação: malte de trigo, malte de cevada, lúpulo e levedura. Não recomendado para pessoas alérgicas a Glúten.', './alemanha.png', 'Alemanha', './copo.png', 'German weizen', '330ml', './dourado2.jpg', 'Dourada', '5º a 7º', './amargor2.jpg', 'Baixo', 'Turva', 'Cravo, pão e banana.', '5,5%','Peixes, aves, saladas e queijos', 'Paulaner Brauerei Munchen','paulaner ','weiss',
 NOW(),NOW());


  INSERT INTO `cervejas` 
(`idCerveja`, `nome`, `foto`, `precoMedio`, `nota` ,`pequenaDescri`, `descricao`, `localidadeIMG`, `localidade`, `estiloIMG`, `estilo`, `ml`, `coloracaoIMG`, `coloracao`, `tempIdeal`, `amargorIMG`, `amargor`, `aparencia`, `aroma`, `teor`, `harmonizacao`, `cervejaria`,`categoria`, `filtro`,`createdAt`,`updatedAt`) 
VALUES (
'6', 'Blue Moon', './cervejas/blueMoon.png', 16.00 , '0', 
'A Blue Moon é uma das cervejas mais famosas dos EUA e uma das melhores cervejas artesanais do país. É uma cerveja Witbier¹ de baixo amargor, e apresenta as características típicas do estilo, com notas cítricas (de casca de laranja) e de especiarias (sementes de coentro). Com excelente drinkability e muito refrescante, pode ser servida com uma fatia de laranj',
 'A Blue Moon é uma das cervejas mais famosas dos EUA e uma das melhores cervejas artesanais do país. É uma cerveja Witbier¹ de baixo amargor, e apresenta as características típicas do estilo, com notas cítricas (de casca de laranja) e de especiarias (sementes de coentro). Com excelente drinkability e muito refrescante, pode ser servida com uma fatia de laranja no copo para acentuar as suas sensações cítricas. É perfeita para ser tomada em dias quentes e acompanha bem pratos leves como saladas e frutos do mar', './eua.png', 'Estados Unidos', './copo.png', 'Witbier', '355ml', './dourado2.jpg', 'Dourada', '3º a 5º', './amargor2.jpg', 'Baixo', 'Turva', 'Notas cítricas, especiarias.', '5,4%','Saladas, peixes e frutos do mar', 'Blue Moon Brewing Co.','blue-mon ','witbier',
 NOW(),NOW());


