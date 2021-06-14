const euler = Math.E;

function calculate() {

    var x0 = $('#val-x0').val();
    var x1 = $('#val-x1').val();
    var fx0 = $('#val-fx0').val();
    var fx1 = $('#val-fx1').val();

    var regX0 = new Array();
    var regX1 = new Array();
    var regFx0 = new Array();
    var regFx1 = new Array();

    //Calcular Error Porcentual
    //let ep = ((res - 2.61538)/res) * 100


    if (x0 != "" && x1 != "" && fx0 != "" && fx1 != "") {
        //Guarda las variables introducidas en el registro de x0 y fx0
        regX0.push(x1);
        regFx0.push(fx1);
        
        //Inicializa el contador de iteraciones y calcula x y fx2
        let counter = 1;

        let x = x1 - ((fx1*(x0-x1))/(fx0-fx1));
        //x = this._truncate(x);
            
        let fx2 = ((3*x) + Math.sin(x)) - Math.pow(euler, x);
        //fx2 = _truncate(fx2);

        //Muestra la iteración 1
        this._showTable(counter, x, fx2);

        //Ciclo para las demás iteraciones
        for (let i = 0; i < 2; i++) {
            counter++

            regX0.push(x1);
            regFx0.push(fx1);
            regX1.push(x);
            regFx1.push(fx2);

            x0 = this._getLast(regX0);
            fx0 = this._getLast(regFx0);
            x1 = this._getLast(regX1);
            fx1 = this._getLast(regFx1);

            regX0.push(x0);
            regFx0.push(fx0);

            console.log(x0);
            console.log(fx0);
            console.log(x1);
            console.log(fx1);

            x = x1 - ((fx1*(x0-x1))/(fx0-fx1));
            //x = this._truncate(x);
                
            fx2 = ((3*x) + Math.sin(x)) - Math.pow(euler, x);
            //fx2 = _truncate(fx2);

            regX0.push(x0);
            regFx0.push(fx0);

            this._showTable(counter, x, fx2);

        }
        
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Favor de llenar todos los campos!',
        });
    }



}

function _truncate (num) {
    var multiplier = Math.pow(10, 4),
    adjustedNum = num * multiplier,
    truncatedNum = Math[adjustedNum < 0 ? 'ceil' : 'floor'](adjustedNum);
    return num = truncatedNum / multiplier;
}


function clean() {

    $('#val-x0').val("");
    $('#val-x1').val("");
    $('#val-fx0').val("");
    $('#val-fx1').val("");

}


function _showTable(counter, x, fx2) {
    $("<tr><td>" + counter + "<tr/><td/>").appendTo("#res-n");
    $("<tr><td>" + x + "<tr/><td/>").appendTo("#res-x");
    $("<tr><td>" + fx2 + "<tr/><td/>").appendTo("#res-fx");
    //$("<tr><td>" + ep + "<tr/><td/>").appendTo('#res-ep');
}

function _getLast(array) {
    return array[array.length - 1]
}
