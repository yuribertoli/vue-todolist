/* const app = new Vue ({

    el: "#root",

    data: {
        input: "",
        toDoList: ["Studiare la documentazione", "Non capirci niente", "Ristudiare la documentazione", "Rinoncapirci niente"],
        done: false
    },

    methods: {

        add() { 
            if (this.input != "") { //evito di aggiungere valori vuoti alla lista
                //aggiungo all'array il valore della variabile input
                this.toDoList.push(this.input);

                //resetto il valore
                this.input = "";
            }       
        },

        remove(index) {
            this.toDoList.splice(index, 1);
        },

        active(evento) {
            if(this.done == false) {
                this.done = true;
                evento.currentTarget.classList.add("strike")
            } else if(this.done == true) {
                this.done = false;
                evento.currentTarget.classList.remove("strike")
            }
        }
    }

}); */

const app = new Vue ({

    el: "#root",

    data: {

        //creo una variabile vuota per popolare il v-model dell'input
        input: "",

        //creo un array di oggetti dove inserisco la frase da mostrare e la variabile utile al toggle
        toDoList: [ {frase: "Studiare la documentazione", done: false}, 
                    {frase: "Non capire la documentazione", done: false}, 
                    {frase: "Ristudiare la documentazione", done: false}, 
                    {frase: "Rinoncapire la documentazione", done: false} 
                ],
    },

    methods: {

        add() { 
            if (this.input != "") { //evito di aggiungere valori vuoti alla lista

                //creo una variabile dove inserisco un oggetto con frase i valori della variabile input
                let oggetto = {frase: this.input, done: false}

                //aggiungo all'array l'oggetto creato
                this.toDoList.push(oggetto);

                //resetto il valore
                this.input = "";
            }       
        },

        //utilizzo splice per rimuovere all'indice selezionato 1 elemento (quello selezionato quindi)
        remove(index) {
            this.toDoList.splice(index, 1);
        },

        //toggle per cambiare valore di done da false a true e viceversa
        active(indice) {

            this.toDoList[indice].done = !this.toDoList[indice].done

        }
    }

});

