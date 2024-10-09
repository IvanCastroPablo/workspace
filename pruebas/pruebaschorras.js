function createObject(name, subs) {
    const persona = {
      name: name, 
      subs: subs, 
      hash: name.length * subs,
      getStatus: function () {
        return (`El canal de ${this.name} tiene ${this.subs} suscriptores.`)
      }
    }
    return persona;
  }  



console.log(createObject("Miguel", 100).hash);