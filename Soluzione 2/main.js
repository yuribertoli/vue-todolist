const app = new Vue ({

    el: "#root",

    data: {

        //creo una variabile vuota per popolare il v-model dell'input
        input: "",

        //array di stringhe
        toDoList: ["Studiare", "Fare la spesa", "Pulire casa", "Cena del cane"],
        
        //variabile da utilizzare per il toggle
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

        //utilizzo splice per rimuovere all'indice selezionato 1 elemento (quello selezionato quindi)
        remove(index) {
            this.toDoList.splice(index, 1);
        },

        //cambio il valore di done con il suo opposto
        //aggiungo o rimuovo la classe strike accedendo al DOM tramite evento
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

}); 

