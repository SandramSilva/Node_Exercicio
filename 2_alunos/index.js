const express = require("express");
const app = express();
const { alunos, filtrarNomeAluno, filtrarMediaAluno, deletarAluno, atualizarListaAlunos }  = require("../1_modulos/moduloAlunos");

app.use(express.json());

app.get("/alunos", (req, res) => {
    let listaAlunos = alunos;
    
    if (req.query.nome) {
        listaAlunos = filtrarNomeAluno(listaAlunos, req.query.nome);
    }

    if (req.query.media) {
        listaAlunos = filtrarMediaAluno(listaAlunos, Number(req.query.media));
    }
    res.json(listaAlunos);
});

app.post("/alunos/novo", (req, res) => {
    const { matricula, nome, media } = req.body;

    if ((matricula !== undefined) && (nome !== undefined) && (media !== undefined)) {
        const novoAluno = { matricula: matricula, nome: nome, media: media };
        alunos.push(novoAluno);
        res.status(201).json({ message: "Usuário adicionado com sucesso!" });
    } else {
        res.status(404).json({ message: "Informações incorretas ou incompletas!" });
    } 
});

app.post("/alunos/deletar/:index", (req, res) => {
    const index = Number(req.params.index);

    if(index === undefined) {
        res.status(404).json({ message: "Não deletado! Confirme a informação do index." });
    } else if (index < 0 || index > alunos.length) {
        res.status(404).json({ message: `Não existe aluno no index: ${index}` });
    } else {
        alunos.alunos.splice(index, 1);
        res.status(201).json({ message: `Aluno ${index} removido com sucesso!`});
    } 
    
});

app.post("/alunos/atualizar/:index", (req, res) => {
    const index = Number(req.params.index);
    const { nome, media } = req.body;

    if (index < 0 || index > alunos.length) {
        res.status(404).json({ message: `Aluno ${index} não encontrado!` });
        return;
    }

      alunos[index].nome = nome; 
      alunos[index].media = Number(media); 

    res.json(alunos);
})

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000/");
});