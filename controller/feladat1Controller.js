import Feladat1Model from "../model/feladat1Model.js";
import Feladat1View from "../view/feladat1View.js";

class Feladat1Controller {
    constructor() {

        const szuloelem = $("div.eredmeny");
        //feladata a view példányosítása
        const feladat1View = new Feladat1View("adat", szuloelem);
        //létrehoztuk a gombot
        const gomb = $("button");
        //további feladata a Model példányosítása
        const feladat1Model = new Feladat1Model();
        //amikor rákattintunk a gombra jön a névtelen függény
        gomb.on("click", () => {
            //amikor rákattintok az OK gombra, akkor lekérjük a modelnek az aktuális adatait
            //itt utasítjuk a modelt a számítás elvégzésére
            //lekérjük a modelltől a programunk új állapotát
            let eredmeny = feladat1Model.getModelAdat();
            //lekérjük a modelből az eredményt és átadjuk a View-nak
            feladat1View.setErtek(eredmeny)
        })
    }
}

export default Feladat1Controller;