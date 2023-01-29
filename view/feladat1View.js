class Feladat1View {
    constructor(adat, szuloelem) {
        szuloelem.append("<p>");
        this.pElem = szuloelem.children("p");
        this.setErtek(adat)
    }
    //a this.pElem-be bepakolgatja azt a jelet amit megkapott;
    //amikor rákattintunk akkor egy új értéket szeretnénk az "adat" helyett beállítani
    setErtek(jel) {
        this.pElem.html(jel);
    }
}
export default Feladat1View;