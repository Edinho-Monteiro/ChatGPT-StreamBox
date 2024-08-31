function playVideo(button, videoSrc) {
    // Remover a classe 'clicked' de todos os botões
    const buttons = document.querySelectorAll('.video-button');
    buttons.forEach(btn => btn.classList.remove('clicked'));
  
    // Adicionar a classe 'clicked' ao botão clicado
    button.classList.add('clicked');
  
    // Aqui você coloca o código para iniciar o vídeo
    const videoElement = document.getElementById('video-player'); // Supondo que você tenha um elemento de vídeo com esse ID
    videoElement.src = videoSrc;
    videoElement.play();
  }
  function openVideo(url) {
    document.getElementById('video-frame').src = url;
  }
  
    // abre vídeo no frame da página
  function openVideo(url) {
    const iframe = document.getElementById('video-frame');
    iframe.src = url;
    
    // Exemplo de ajuste dinâmico da altura
    iframe.style.height = '90vh'; // 90% da altura da viewport
  }
   
    // abre vídeo em outra aba
  function openVideo(url) {
    window.open(url, '_blank');
  }
  
  