var qg = prompt("Digite a quantidade de gols")
var qc = prompt("Digite a quantidade de passes certos")
var qe = prompt("Digite a quantidade de passes errados")
var pontos = (qg * 50) + (qc * 10) + (qe * -5)

if (pontos < 50) {
    document.write("Péssima Partida");
} else if (pontos >= 50 && pontos < 100) {
    document.write("Partida Ruim");
} else if (pontos >= 100 && pontos < 150) {
    document.write("Fez o Básico");
} else if (pontos >= 150 && pontos < 200) {
    document.write("Jogou Bem");
} else {
    document.write("Jogou Demais");
}
