const alunos = [ 
    {
        matricula: "1",
        nome: "Sandra Silva",
        media: 9.0,
        
    },
    {
        matricula: "2",
        nome: "Elvis Neves",
        media: 7.5,
    },
    {
        matricula: "3",
        nome: "Carla Trostdorf",
        media: 8.5,
    },
    {
        matricula: "4",
        nome: "Camila Nogueira",
        media: 4.5,
    },
    {
        matricula: "5",
        nome: "Hector Bruno",
        media: 3.0,
    },
];

function filtrarNomeAluno(alunos, nome) {
    return alunos.filter((aluno) => {
        return aluno.nome.toLowerCase().includes(nome.toLowerCase());
    });
};
 
    
function filtrarMediaAluno(alunos, media) {
    if (media >= 7.5) {
        return alunos.filter((aluno) => aluno.media >= media);
    };
};
  

function deletarAluno(index) {
    if (index < 0 || index >= alunos.length) {
        return false;
    }
        alunos.splice(index, 1);
        return true;
};

function atualizarListaAlunos(index) {
    if (index < 0 || index >= alunos.length) {
        throw "Aluno não encontrado";
    }

    alunos[index].nome = nome;
    alunos[index].media = media;

};


module.exports = { alunos, filtrarNomeAluno, filtrarMediaAluno, deletarAluno, atualizarListaAlunos };