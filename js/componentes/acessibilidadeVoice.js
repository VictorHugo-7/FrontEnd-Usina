fetch('../../components/acessibilidadeVoice.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('my-a-acessibilidadeVoice').innerHTML = data;

    })
    .catch(error => console.error('Erro ao carregar a página:', error));