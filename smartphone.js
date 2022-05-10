let smartphone = {
    brand : 'Samsung',
    model : 'Note 10',
    inches : 6.3,
    color : 'darkblue',
    contacts : [
        {name: 'Francesca', surname : 'Mancini', number : 3333333333},
        {name: 'Damiano', surname : 'Bellamoli', number : 3333333344},
        {name: 'Dario', surname: 'Coman', number : 3333333355},
        {name: 'Mario', surname: 'Storti', number : 3333333388},
        {name: 'Dario', surname: 'Coleman', number : 3333333377}
    ],

    addId : function (){
        this.contacts.forEach((contact, i) => contact.id = i+1 )
    },

    addContact : function(newName, newSurname, newNumber){
        this.contacts.push({name : newName, surname : newSurname, number : newNumber})
        this.addId();
    },

    removeContact : function(numberToRemove){
        let newContactsList = this.contacts.filter((actualNumber)=> actualNumber.number != numberToRemove)
        this.contacts = newContactsList
        this.addId();
    },

    callContact : function(contactToCall){
        filtered = this.contacts.filter((actualContact)=> actualContact.name.toLowerCase() == contactToCall.toLowerCase())

        if(filtered.length>0){
            if(filtered.length>1){
                console.log(`Ci sono più contatti con questo nome. Indica anche il cognome.`);
                double = 1;
            }
            else{
                console.log(`Sto chiamando ${filtered[0].name} al numero ${filtered[0].number}...`);
            }
        }
        else
            console.log(`Questo contatto non esiste.`)
    },

    callBySurname : function(doubles, surnameToSearch){
        filtered = doubles.filter((actualContact)=> actualContact.surname.toLowerCase() == surnameToSearch.toLowerCase())

        if(filtered.length>0){
            console.log(`Sto chiamando ${filtered[0].name} al numero ${filtered[0].number}...`);
        }
        else
            console.log(`Questo contatto non esiste.`)
    }


}

let double = 0;
let filtered = [];

smartphone.addId();

smartphone.addContact('Carlo', 'Biondi', 3333333366);

console.log(smartphone);

smartphone.removeContact(3333333388);

console.log(smartphone);

smartphone.callContact('Dario')
if(double){
    smartphone.callBySurname(filtered, 'Coman')
    double=0;
}

console.log(smartphone);
