
function annoying_prompt(){

    function Repeat(){
        let annoying_question = prompt("Are You Idiot?");
        if (annoying_question == "Yes" || annoying_question == "yes"){
            alert("Congratulations!!!, You are the first member of 'The Royal Idiot Community'!!!");
        }
        else{
            Repeat();
        }
    } 
    Repeat();
}

