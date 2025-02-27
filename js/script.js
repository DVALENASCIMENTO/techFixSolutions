function toggleMenu() {
    document.querySelector('.menu').classList.toggle('active');
}

function showPopup(service) {
    const services = {
        Diagnóstico: "Oferecemos uma análise detalhada de problemas técnicos, identificando as causas raiz dos erros que podem estar afetando seu computador. Seja ele não ligando, apresentando falhas frequentes, ou até mesmo sofrendo com superaquecimento, nossa equipe realizará um diagnóstico completo para entender o que está acontecendo e fornecer a melhor solução. Conflitos de hardware, drivers, problemas na memória RAM ou até fontes de alimentação com defeito não serão mais um mistério para você!",
        Reparo: "Com nossa experiência em reparos rápidos e eficientes, podemos resolver diversos problemas em seu computador. Desde a substituição de telas quebradas em notebooks até a troca de fontes queimadas, garantimos o conserto de componentes danificados, como teclado, placas-mãe e conectores de energia. Se seu computador está com ventoinhas ruidosas, ou a placa de vídeo está com artefatos na tela, nossa equipe é especialista em consertar esses problemas para que seu dispositivo funcione perfeitamente novamente.",
        Upgrade: "Aumente a performance do seu computador com nossos serviços de upgrade. Se você está enfrentando lentidão ou precisa de mais capacidade, podemos expandir sua memória RAM, trocar seu HD por um SSD, ou até mesmo melhorar a potência do seu processador e placa de vídeo. Melhorias no sistema de refrigeração e instalação de módulos adicionais de armazenamento também são opções que você pode contar para deixar seu computador ainda mais rápido e eficiente.",
        Vírus: "Se o seu computador está lento, exibindo mensagens de erro constantes, ou se você está sendo incomodado com propagandas indesejadas, pode ser um sinal de infecção por vírus ou malware. Nossa equipe é especializada em remover ameaças, restaurar seus arquivos corrompidos e até recuperar dados após ataques de ransomware. Garantimos que seu sistema funcione de forma segura, com todos os dados protegidos contra roubo e danos.",
        Otimização: "Acelere o desempenho do seu computador com nossos serviços de otimização. Removemos arquivos temporários, desativamos programas desnecessários e ajustamos configurações para um melhor desempenho. Também realizamos a verificação e o reparo de arquivos corrompidos, além de atualizar drivers e o sistema operacional. Com nossa ajuda, seu computador terá uma performance muito mais ágil e eficiente.",
        Atendimento: "Nosso serviço de atendimento no local oferece suporte técnico imediato para solucionar problemas diretamente onde você está. Se sua conexão com a internet não estiver funcionando, se sua impressora apresentar falhas ou se você precisar de ajuda com a configuração de redes, nós estaremos à disposição para realizar todos os ajustes necessários. Além disso, podemos realizar a instalação de novos equipamentos e diagnosticar problemas técnicos diretamente no seu local de trabalho ou residência.",
        Retirada: "Precisando de transporte seguro para seus equipamentos? Oferecemos um serviço completo de retirada e entrega de notebooks e desktops, tanto para reparos quanto para diagnóstico. Caso seus dispositivos estejam com danos maiores ou necessitem de um conserto especializado, nossa equipe fará a retirada com total segurança. Após o reparo, entregamos seus dispositivos otimizados e prontos para uso.",
        Backup: "A perda de dados pode ser angustiante, mas nós temos a solução. Oferecemos recuperação de dados de HDs corrompidos, SSDs danificados e até arquivos que foram infectados por ransomware. Nossa equipe também realiza backups seguros na nuvem, garantindo que seus dados importantes fiquem sempre protegidos. Se você está transferindo dados para um novo computador ou precisa restaurar arquivos perdidos, nós podemos ajudá-lo!",
        Suporte: "Com nosso suporte remoto, você pode resolver diversos problemas técnicos sem sair de casa. Se você precisar de ajuda para configurar seu e-mail, remover vírus, ou até resolver erros do sistema operacional, nossa equipe está pronta para prestar assistência a distância. Também realizamos a instalação de softwares e configuração de impressoras remotamente, tudo de forma rápida e segura.",
        Consultoria: "Ajudamos você a tomar as melhores decisões para suas necessidades tecnológicas. Se você está em dúvida sobre quais equipamentos ou softwares são mais compatíveis com seu trabalho, ou se deseja planejar uma migração para novas tecnologias, nossa consultoria está aqui para guiar cada passo. Além disso, oferecemos soluções de armazenamento, backup e planejamentos para pequenas e médias empresas, visando sempre o máximo desempenho e segurança para seus sistemas."
    };

    document.getElementById("popup-title").textContent = service.replace(/_/g, " ");
    document.getElementById("popup-text").textContent = services[service];
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Fechar o popup ao clicar fora do conteúdo
window.addEventListener("click", function(event) {
    const popup = document.getElementById("popup");
    if (event.target === popup) {
        closePopup();
    }
});
