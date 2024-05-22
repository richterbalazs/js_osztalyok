/* egy pokémonnak van neve, tartozik hozzá egy kép, és tarotik hozzá egy mondat, amit ki tud mondani.*/

export default class Pokemon {
#nev="";
#kep="";
#mondat="";
    constructor(nev, kep, szuloElem){
        this.#nev=nev;
        this.#kep=kep;
        this.#mondat="Jó estét!"
        this.szuloElem=szuloElem;

        this.#megjelenit()
    }

    #megjelenit(){
        let txt = `
            <div class="poki">
                <h3>${this.nev}</h3>
                <img src="${this.#kep}" alt="${this.nev}">
            </div>
        `

        this.szuloElem.append(txt)
    }

    // getter a névre
    get nev(){
        return this.#nev
    }

    set mondat(szoveg){

        this.#mondat = szoveg
    }

    beszel(){
        console.log(this.#mondat)
    }
}