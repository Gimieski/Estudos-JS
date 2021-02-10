/*Objetos são coleções de propriedades e funções */
        function mudaCor(cor){
            this.cor=cor;
        }
        // Isso é uma função contrutora(que controi objetos usando o this para representar o objeto)
       
        
        // declaramos um objeto
        var caneta1={
            cor:"",
            mudarCor: mudaCor
        }     
        

        var caneta2={
            cor:"",
            mudarCor: mudaCor
        }
            caneta1.mudarCor("green");
            caneta2.mudarCor("red");

            console.log(caneta1);
            console.log(caneta2);

            console.log(Object.keys(caneta1))
            // mostra todas as chaves(propriedades) de um objeto
            console.log(Object.is(caneta1,caneta2))
            // Object.is determina se os dois valores são iguais(objetos só são iguais se são criados apartir do mesmo)
            Object.freeze(caneta1)
            // object.freeze paralisa as alterações do objeto apertir daquela linha.
            caneta1.mudarCor("blue")
            // então isso não vai funcionar