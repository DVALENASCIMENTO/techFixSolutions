function toggleMenu() {
    document.querySelector('.menu').classList.toggle('active');
}

function showPopup(service) {
    const services = {
        diagnostico: "Análise detalhada de problemas técnicos.",
        reparo: "Serviço rápido para reparos de computadores.",
        upgrade: "Melhoria de hardware para melhor desempenho.",
        virus: "Remoção de vírus e malware.",
        otimizacao: "Otimização de sistema para melhor performance.",
        atendimento: "Atendimento no local para suporte técnico.",
        retirada: "Retirada e entrega de equipamentos.",
        backup: "Backup e recuperação de dados.",
        suporte: "Suporte remoto para resolução de problemas.",
        consultoria: "Consultoria em atualizações tecnológicas."
    };

    document.getElementById("popup-title").textContent = service.replace(/_/g, " ");
    document.getElementById("popup-text").textContent = services[service];
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
