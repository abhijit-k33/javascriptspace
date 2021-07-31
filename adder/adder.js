

class AdderComponent {
    constructor(input1, input2, addbtn, output) {

        //state
        this.input1 = input1;
        this.input2 = input2;
        this.addBtn = addbtn;
        this.output = output;
        this.result = undefined;

        //event handling wiring
        this.addBtn.addEventListener('click', this.onAdder.bind(this));
    }

    //event handlers
    onAdder(e){
        this.result = this.input1.valueAsNumber + this.input2.valueAsNumber;
        this.render();
    }   

    //component UI rendering logic
    render(){
        if (this.result >= 0){
            this.output.innerText = this.result;
        } else {
            this.output.innerText = "";
        }
    }
}


var adder = document.getElementById("adder");

new AdderComponent(
    adder.getElementsByClassName("input1")[0],
    adder.getElementsByClassName("input2")[0],
    adder.getElementsByClassName("btn-primary")[0],
    adder.getElementsByClassName("output")[0]
);
