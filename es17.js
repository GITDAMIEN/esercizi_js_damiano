/*
ES - 17

Definisci un oggetto che rappresenti un garage, dovrà contenere una lista di automobili. Per ciascuna automobile (un oggetto => {brand : ‘renault’ , model : ‘twingo’}) definire una marca ed almeno un modello.

Scrivi una funzione che prenda in input una marca e stampi i modelli presenti nel garage di quella stessa marca.
Consigli:
  Puoi usare un array come base per salvare le automobili. 
*/

let garage = {
  cars : [
    {brand : 'Peugeot', model : '208'},
    {brand : 'Peugeot', model : '308'},
    {brand : 'Peugeot', model : '2008'},
    {brand : 'Alfa Romeo', model : 'Giulietta'},
    {brand : 'Fiat', model : 'Panda'},
    {brand : 'Fiat', model : 'Punto'},
    {brand : 'Chevrolet', model : 'Camaro'},
    {brand : 'Opel', model : 'Zafira'},
    {brand : 'Opel', model : 'Corsa'}
  ],

  printModels : function(brandToSearch){
    let models = this.cars.filter((actualBrand)=> actualBrand.brand == brandToSearch)

    models.forEach((modelToPrint)=> console.log(modelToPrint.model))
  }
}

garage.printModels('Opel')
