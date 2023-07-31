const btnCalc = document.querySelector(".icon");
const msgErrorDay = document.querySelector(".msgErrorDay");
const msgErrorMonth = document.querySelector(".msgErrorMonth");
const msgErrorYear = document.querySelector(".msgErrorYear");
const resultDay = document.querySelector(".resultDay");
const resultMoths = document.querySelector(".resultMoths");
const resultYears = document.querySelector(".resultYears");
const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();
const lblDay = document.querySelector(".lblDay");
const lblMonth = document.querySelector(".lblMonth");
const lblYear = document.querySelector(".lblYear");
const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");

btnCalc.addEventListener("click", function (){

    const valueDay = day.value;
    const valueMonth = month.value;
    const valueYear = year.value;

    if (isNaN(valueDay) || valueDay < 1 || valueDay > 31){
        msgErrorDay.textContent = "Must be a valid day";
        lblDay.style.color = "hsl(0, 100%, 67%)";
        day.style.border = "1px solid hsl(0, 100%, 67%)";
        return;
    }  
    if (isNaN(valueMonth) || valueMonth < 1 || valueMonth > 12){
        msgErrorMonth.textContent = "Must be a valid month";
        lblMonth.style.color = "hsl(0, 100%, 67%)";
        day.style.border = "1px solid hsl(0, 100%, 67%)";
        return;
    }        
    if (isNaN(valueYear) || valueYear < 1 || valueYear > anoAtual){
        msgErrorYear.textContent = "Must be a valid year";
        lblYear.style.color = "hsl(0, 100%, 67%)";
        year.style.border = "1px solid hsl(0, 100%, 67%)";
        return;
    }

    calcularTempo(valueDay, valueMonth, valueYear);

    console.log(valueDay,valueMonth,valueYear);

})

function calcularTempo (dia, mes, ano){
    const dataFornecida = new Date(ano, mes - 1, dia);
    const diferencaTempo = dataAtual - dataFornecida;
    const umAnoEmMilissegundos = 1000 * 60 * 60 * 24 * 365.25;
    const anos = Math.floor(diferencaTempo / umAnoEmMilissegundos);
    dataFornecida.setFullYear(dataFornecida.getFullYear() + anos);
    let meses = 0;
    while (dataFornecida <= dataAtual) {
        dataFornecida.setMonth(dataFornecida.getMonth() + 1);
        meses++;
    }
    meses--;

    const dias = Math.floor((dataAtual - dataFornecida) / (1000 * 60 * 60 * 24));
    console.log("Diferença de tempo:", anos, "anos,", meses, "meses e", dias*(-1), "dias.");

    resultDay.textContent = dias * (-1);
    msgErrorDay.textContent = "";
    lblDay.style.color = " hsl(0, 1%, 44%)";
    day.style.border = "1px solid hsl(0, 0%, 86%)";

    resultMoths.textContent = meses;
    msgErrorMonth.textContent = "";
    lblMonth.style.color = " hsl(0, 1%, 44%)";
    day.style.border = "1px solid hsl(0, 0%, 86%)";

    resultYears.textContent = anos;
    msgErrorYear.textContent = "";
    lblYear.style.color = " hsl(0, 1%, 44%)";
    year.style.border = "1px solid hsl(0, 0%, 86%)";

}