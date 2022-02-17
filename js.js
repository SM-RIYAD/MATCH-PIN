var p, q;
var x = "";

var count_string = document.getElementById("count").innerText;
var count_num = parseInt(count_string)

document.getElementById("pin_generate").addEventListener("click", function() {
    // p = Math.random() * 10000;
    // q = Math.round(p);
    // document.getElementById("pin_display").value = q;

    while (1) {
        p = Math.random() * 10000;
        q = Math.round(p);

        if (999 < q) {
            document.getElementById("pin_display").value = q;
            break;
        }
    }

})

function display(v) {
    x += v;
    document.getElementById("input_display").value = x;
}

function clear_display() {
    x = "";
    document.getElementById("input_display").value = "";



}

function clear_oneChar() {
    // var ex = x[x.length - 1];
    x = x.slice(0, x.length - 1);
    document.getElementById("input_display").value = x;

}

function submit_button() {

    var pin_num = parseInt(x);
    if (q == pin_num) {
        document.getElementById("tic").style.visibility = "visible";

        document.getElementById("cross").style.visibility = "hidden";
        document.getElementById("submit_btn").style.visibility = "hidden";
        document.getElementById("count_area").style.visibility = "hidden";

    } else {

        document.getElementById("cross").style.visibility = "visible";
        document.getElementById("tic").style.visibility = "hidden";
        --count_num;
        document.getElementById("count").innerText = count_num;
        if (count_num == 0) {


            document.getElementById("submit_btn").style.visibility = "hidden";
        }


    }


}