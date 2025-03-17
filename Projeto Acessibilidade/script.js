document.addEventListener('DOMContentLoaded', function(){
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');

    let tamanhoAtualFonte = 3;
    aumentaFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte += 2;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;

    });
});
