document.addEventListener('DOMContentLoaded',function(event){
   
    const dataEventoAniversario = new Date ("Sep 04, 2024 00:00:00");
    const timeStampDoEvento = dataEventoAniversario.getTime();
    
    const dataEvento = dataEventoAniversario.getDate();
    const mesEvento = dataEventoAniversario.getMonth()+1;
    const anoEvento = dataEventoAniversario.getFullYear();
    
    document.getElementById('data-evento').innerText = `${dataEvento}/${mesEvento}/${anoEvento}`
    
    const contagemDeDias = setInterval(function() {
        const horaAtual = new Date();
        const timeStampHoraAtual = horaAtual.getTime();
    
        const tempoRestanteParaOEvento = timeStampDoEvento - timeStampHoraAtual;
    
        const converterDiasParaMilissegundos = 1000 * 60 * 60 *24;
        const converterHorasParaMilissegundos = 1000 * 60 * 60;
        const converterMinutosParaMilissegundos = 1000 * 60;
    
        const diasParaEvento = Math.floor(tempoRestanteParaOEvento / converterDiasParaMilissegundos);
        const horasParaEvento = Math.floor((tempoRestanteParaOEvento % converterDiasParaMilissegundos) / converterHorasParaMilissegundos);
        const minutosParaEvento = Math.floor((tempoRestanteParaOEvento % converterHorasParaMilissegundos) / converterMinutosParaMilissegundos);
        const segundosParaEvento = Math.floor((tempoRestanteParaOEvento % converterMinutosParaMilissegundos) / 1000);
    
        document.getElementById('data-evento-contagem-regressiva').innerText = ` ${diasParaEvento}d ${horasParaEvento}h ${minutosParaEvento}m ${segundosParaEvento}s`
    
        if (diasParaEvento < 0) {
            clearInterval(contagemDeDias);
            document.getElementById('data-evento-contagem-regressiva').innerText = ` Evento finalizado.`
        }
    
    }, 1000);
    
    });