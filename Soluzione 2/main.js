const app = new Vue ({

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

}); 

