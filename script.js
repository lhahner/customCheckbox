function clicked(id){
    var checkbox_1 = document.getElementById("checkbox-1");
    var checkbox_2 = document.getElementById("checkbox-2");
    var checkbox_3 = document.getElementById("checkbox-3");


    switch(id){
        case "box-1": 
            //box-1 change
            checkbox_1.style.color = "white";
            checkbox_1.style.backgroundColor = "#0648B3";

            //box-2 
            checkbox_2.style.color = "#0648B3";
            checkbox_2.style.backgroundColor = "white";

            //box-3 change
            checkbox_3.style.color = "#0648B3";
            checkbox_3.style.backgroundColor = "white";
            break;

        case "box-2":
            //box-1 change
            checkbox_1.style.color = "#0648B3";
            checkbox_1.style.backgroundColor = "white";

            //box-2 
            checkbox_2.style.color = "white";
            checkbox_2.style.backgroundColor = "#0648B3";

            //box-3 change
            checkbox_3.style.color = "#0648B3";
            checkbox_3.style.backgroundColor = "white";
            break;
        case "box-3": 
            //box-1 change
            checkbox_1.style.color = "#0648B3";
            checkbox_1.style.backgroundColor = "white";

            //box-2 
            checkbox_2.style.color = "#0648B3";
            checkbox_2.style.backgroundColor = "white";

            //box-3 change
            checkbox_3.style.color = "white";
            checkbox_3.style.backgroundColor = "#0648B3";
            break;
        default: 
        //box-1 change
        checkbox_1.style.color = "#0648B3";
        checkbox_1.style.backgroundColor = "white";

        //box-2 
        checkbox_2.style.color = "#0648B3";
        checkbox_2.style.backgroundColor = "white";

        //box-3 change
        checkbox_3.style.color = "#0648B3";
        checkbox_3.style.backgroundColor = "white";
    }
}