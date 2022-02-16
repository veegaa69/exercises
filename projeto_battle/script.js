console.log("ue");


const heroi = {
  vida: 100,
  ataque: 15,
  defesa: 10,
  magia: 40,
  guarda: true,

};

const monstro = {
  vida: 150,
  ataque: 40,
  defesa: 10,
  defesaMagia: 5,
};

const playing = true;
const intro = true;

//const MonsterTurn = {
//  ATTACK: "ATTACK",
//  DEFENSE: "DEFENSE",
//};
//////////////////////////////////////////

setTimeout(function () {

  if (playing == true) {
    Intro();
    Gameplay();

  }

}, 500);

//////////////////////////////////////////
function Intro() {

  console.log("Você, Herói, típico MC de cabelo espetado, caminha em direção a cidade mais próxima.");
  console.log("Por detrás das montanhas, um Monstro, feroz e agitado vem em sua direção.");

  console.log("Herói: " + heroi.vida + "HP | Monstro: " + monstro.vida + "HP");

  Gameplay();
  //final funIntro
}

function Gameplay() {
  console.log("O que você faz?");
  console.log("   1 - Atacar");
  console.log("   2 - Defender");
  console.log("   3 - Magia");
  console.log("   4 - Fugir!");

  const action = prompt("Escolha a sua opção: ")

  if (action == 1) {
    Attack();
  } else if (action == 2) {
    Defense();
  } else if (action == 3) {
    Magic();
  } else if (action == 4) {
    Run();
  }

  //final funtionGamePlay
}

function Status() {
  console.log(`Herói: ${heroi.vida} HP Monstro: ${monstro.vida} HP`);

}

function Attack() {
  console.log("Você ataca! *tchiu tchiu tchiu*");
  const danoHeroi = heroi.ataque - monstro.defesa
  console.log("O Monstro perde " + danoHeroi + " de vida.");
  monstro.vida -= danoHeroi;

  if (monstro.vida < 1) {
    console.log(`Você pensa em todos os bolinhos que ainda pode comer e pula erguendo a espada o mais alto que consegue. Acerta a cabeça do monstro com força e ele cai ao, chão, desfalecido e com Xzinhos nos olhos.`);
    console.log(`Parabéns, Herói! Você venceu!`);
    Replay();
  } else if (monstro.vida > 1) {

    Status();
    Gameplay();

  }

  //final functionAttack
}

function Defense() {
  console.log(`Você puxou o escudo e se defendeu!`);
  console.log(`O monstro atacou sem dó mas o dano foi reduzido pela metade.`);

  const monstroAtaque = monstro.ataque / 2;

  heroi.vida = heroi.vida - monstroAtaque;
  console.log(`Você perdeu ${monstroAtaque} de vida.`);
  Status();
  Gameplay();



  Gameplay();
  //final functionDefense
}

function Magic() {
  console.log(`Você usou o Poder da Solidão (Poder da Amizade é muito anos 2000)!`);
  const danoHeroi = heroi.magia - monstro.defesa
  monstro.vida -= danoHeroi;
  console.log("O Monstro perde " + danoHeroi + " de vida.");


  if (monstro.vida < 1) {
    console.log(`Você não aguenta mais ter companhia e se concentra na maior bola de energia solitária que consegue. O monstro não suporta tamanha negatividade e cai ao chão com Xzinhos nos olhos.`);
    console.log(`Parabéns, Herói! Você venceu!`);
    Replay();
  } else if (monstro.vida > 1) {

    Status();
    Gameplay();

  }


  //finalMagic
}


function Run() {
  console.log(`Você aponta por cima do ombro do Monstro, assustado. Quando ele olha para trás, você aproveita para correr.`);
  console.log(`Tsc, tsc, tsc.`);

  Replay();

  //final functionRun
}

function Replay() {
  console.log(`Jogar novamente?`);
  console.log(`   5 - Sim`);
  console.log(`   6 - Não`);
  const tryagain = prompt(`Jogar novamente?`)

  if (tryagain == 5) {
    console.clear();
    Intro();
    Gameplay();
  } else if (tryagain == 6) {
    console.log(`Obrigada por jogar! Palerma!`);

  }

  //final funcionReplay
}



function MonsterAttack() {
  console.log(`O Monstro avança mostrando-lhe os dentes e te pega em cheio.`);

  //final functionMonsterAttack
}

function MonsterDefense() {
  console.log(`O Monstro se comprime como um tatu-bolinha e se protege do seu ataque.`);

  //final functionMonsterDefense
}
