    var guessnum=document.getElementById("guess")
    var result=document.getElementById("result")
    
    var random=Math.floor(Math.random()*100)+1
    console.log(random)
    var att=document.getElementById("Attempt")
    var button=document.getElementById("button")
    var totalscore=10
    let count=0
    var deci= 1;
    
    function check()
    {
        a=guessnum.value
        if(deci==1)    
        {
            
            if(a==random)
        {
            count++
            
            result.textContent="Guess is Right"
            alert("YOU WON!")
            deci=0
            button.textContent="Reset"
            Attempt.textContent="Attempt:"+count


            

        }
        else if(a>random)
        {
            count++
            result.textContent="Guess is Higher!"
            
            Attempt.textContent="Attempt:"+count
            
            
        }
        else if(a<random)
        {
            count++
            
            result.textContent="Guess is Lower!"
            
            Attempt.textContent="Attempt:"+count
            
            
        
        }
    }
        else{
             reset()
             deci=1
        }
            
        
        

    }
    function reset()
    {
        button.textContent="Check"
        random=Math.floor(Math.random()*100)+1
        console.log(random)
        count=0
        Attempt.textContent="Attempt:"+count
        guessnum=document.getElementById("guess")
        guessnum.value=null
        result=document.getElementById("result")
        result.textContent="Your Guess is Right/Wrong!"
        

        


    }