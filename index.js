const prompt = require("prompt-sync")();

// ================================================================
// 👇 Escreva a lógica do seu desafio a partir daqui:
// ================================================================

//🏆 DESAFIO SUPREMO — GERENCIADOR DE PLAYLIST 🎵
const playlist = [
  `Numb`,
  `In The End`,
  `Enter Sandman`,
  `Fear of the Dark`,
  `Breaking the Law`,
  `Master of Puppets`,
  "The Trooper",
  "Paranoid",
];

const opcao = "";

while (opcao !== "0") {
  console.log(` ===== MINHA PLAYLIST ===== 
   1 - Pesquisar música 
   2 - Criar seleção 
   3 - Remover música 
   4 - Inserir música 
   5 - Ordenar A-Z 
   6 - Inverter playlist 
   7 - Exibir playlist 
   0 - Sair `);
  opcao = prompt(`Escolha um dos itens:`)
  switch (opcao) {



  case `1`:
    const pequisa = prompt(
      `Digite o nome da Música que gostaria de escolher... `,
    );
    if (playlist.includes(pequisa)) {
      const posi = playlist.indexOf(pequisa);

      console.log(`A Música consta na playslist! E está na posição ${posi}`);
    } else {
      console.log(
        `ERROR . . . A Música que você está buscando não existe nesta playlist`,
      );
    }

   break;

  case `2`:
    const posicao1 = Number(prompt(
      `Por Favor digite a posição da primeira Música escolhida! `,
    ));
    const posicao2 = Number(prompt(
      `Por Favor digite a posição da segunda Música escolhida! `,
    ));

    const selecao = playlist.slice(posicao1, posicao2);
    console.log(`Nova seleção de Músicas: ${selecao.join(` | `)}`);

  break;

    
  case `3`:
    const posicao1_remover = Number(prompt(
      `Por Favor digite a posição da primeira Música escolhida! `,
    ));
    const posicao2_remover = Number(prompt(
      `Por Favor digite a posição da segunda Música escolhida! `,
    ));
    const deletis = playlist.splice(posicao1_remover, posicao2_remover);
    console.log(`Você está removendo a Música: ${deletis.join(` | `)}`);

  break;


  case `4`:
    const nova_musga = prompt(`Adicione o nome da Música que deseja adicionar: `);
    const posicao1_inserir = Number(prompt(
      `Por Favor digite a posição da Música que você deseje que fique antes da Música que você deseja adicionar! `,
    ));
    const posicao2_inserir = Number(prompt(
      `Por Favor digite a posição da segunda Música que ficará depois da Música que vc deseja adicionar! `,
    ));

    const inserir = playlist.splice(
      posicao1_inserir,
      posicao2_inserir,
      nova_musga,
    );
    console.log(`Música inserida com sucesso TwT `);

  break;


  case `5`:
    const ordem_A_Z = playlist.sort();
    console.log(`Nova ordem da playlist de A - Z: ${ordem_A_Z.join(` | `)}`);

  break;


  case `6`:
    const inverte= playlist.reverse();
    console.log(`Playlist na ordem inversa : ${inverte.join(` | `)}`);
    
  break;


  case `7`: 
    console.log(`PLAYLIST: ${playlist.join(` | `)}`);

  break;


  case `8`:
      console.log(`Saindo da playlist... `);
  break;

  default:
    console.log(`Opição NÃO encontrada! `)

}

}

