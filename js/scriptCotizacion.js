
function calcular(){
    let valor = document.getElementById('Valor')
    let enganche = document.getElementById('enganche')
    let totalFinanciar = document.getElementById('TotalFinanciar')
    let pagoMensual = document.getElementById('pagoMensual')
    let planes = document.getElementById('planes')

    enganche.value = valor.value*.3;
    console.log(planes.value)

    if(planes.value==12){
        totalFinanciar.value = (valor.value - enganche.value)+((valor.value - enganche.value)*.125)
    }

    if(planes.value == 18){
        totalFinanciar.value = (valor.value - enganche.value)+((valor.value - enganche.value)*.172)
    }
    if(planes.value == 24){
        totalFinanciar.value = (valor.value - enganche.value)+((valor.value - enganche.value)*.21)
    }
    if(planes.value == 36){
        
        totalFinanciar.value = (valor.value - enganche.value)+((valor.value - enganche.value)*.26)
    }
    if(planes.value == 48){
        totalFinanciar.value = (valor.value - enganche.value)+((valor.value - enganche.value)*.45)
    }

    pagoMensual.value = totalFinanciar.value/planes.value
    
}
function limpiar(){
    
    let valor = document.getElementById('Valor')
    let enganche = document.getElementById('enganche')
    let totalFinanciar = document.getElementById('TotalFinanciar')
    let pagoMensual = document.getElementById('pagoMensual')


    valor.value = ("")
    enganche.value = ("")
    totalFinanciar.value = ("")
    pagoMensual.value = ("")

}
