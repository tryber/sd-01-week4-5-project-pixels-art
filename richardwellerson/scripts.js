valorRecebido = document.getElementsByTagName("input");

rodarTabela = if(valorRecebido < 5 && valorRecebido > 50){
    alert("Valor Incorreto")

    }else if (valorRecebido > 4 && valorRecebido < 51) {
        for (let line = 0; line < valorRecebido; line++) {
            let linha = document.createElement("tr");
                for (let cell = 0; cell < valorRecebido; cell++) {
                    let celula = document.createElement("td");
            }
    }
}

