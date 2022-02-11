const app = new Vue ({

    el: "#root",

    data: {
        input: "",
        toDoList: ["Studiare la documentazione", "Non capirci niente", "Ristudiare la documentazione", "Rinoncapirci niente"]
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
    }

});