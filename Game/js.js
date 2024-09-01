
var rock=document.getElementById("rock")
var pepar=document.getElementById("pepar")
var sccior=document.getElementById("sccior")



        /*condtion for random number 1 to 3*/
		var comp=Math.floor(Math.random() * 4);
	
    //You want to win so uncomment this sttuf 
    // When You Know what's a Computer's Move
	// document.write(comp)
    
    // for a onclick user define 
    // rock condtion
    function rock1()
    {
        if (comp==1)
         {
            document.write("<center><h3>computer Chosse a Rock : </h3></center>")
            document.write(`<center><img hight="170px" width="190px" src="1.jpg"</center>`)
            
            document.write("<center><h3>You Chosse a Rock : </h3></center>")
            document.write(`<center><img hight="170px" width="190px" src="1.jpg"</center>`)
            
            document.write("<center><h1>Game is tie</h1></center>")
         }
         else if(comp==2)
         {
            document.write("<center><h3>computer Chosse a pepar : </h3></center>")
            document.write(`<center><img hight="170px" width="190px" src="2.jfif"</center>`)
            
            document.write("<center><h3>You Chosse a Rock : </h3></center>")
            document.write(`<center><img hight="170px" width="190px" src="1.jpg"</center>`)
            
            document.write(`<center><font color="red"><h1>You are Lose : </h1></centr>`)
         }
         else if(comp==3)
         {
            document.write("<center><h3>computer Chosse a sccior : </h3></center>")
            document.write(`<center><img hight="170px" width="190px" src="3.jfif"</center>`)
            
            document.write("<center><h3>You Chosse a Rock : </h3></center>")
            document.write(`<center><img hight="170px" width="190px" src="1.jpg"</center>`)
            
            document.write('<center><h1><font color="green">You are win : </h1></center>')
         }
         else
         {
            document.write("<center><h1>pelse try Again</h1></center>")
         }
      }

    // pepar condtion  
    function pepar1()
    {
        if (comp==1) 
         {
            document.write("<center><h3>computer Chosse a Rock : </h3></center>")
            document.write(`<center><img hight="170px" width="190px" src="1.jpg"</center>`)
            
            document.write("<center><h3>You Chosse a pepar : </h3></center>")
            document.write(`<center><img hight="170px" width="190px" src="2.jfif"</center>`)
            
            document.write('<center><h1><font color="green">You are win : </h1></center>')
         }
        else if(comp==2)
         {  
            document.write("<center><h3>computer Chosse a pepar : </h3></center>")
            document.write(`<center><img hight="170px" width="190px" src="2.jfif"</center>`)

            document.write("<center><h3>You Chosse a pepar : </h3></center>")
            document.write(`<center><img hight="170px" width="190px" src="2.jfif"</center>`)
            
            document.write("<center><h1>Game is Tie</h1></center>")
         }
         else if(comp==3)
         {
            document.write("<center><h3>computer Chosse a scciors : </h3></center>")
            document.write(`<center><img hight="170px" width="190px" src="3.jfif"</center>`)

            document.write("<center><h3>You Chosse a pepar : </h3></center>")
            document.write(`<center><img hight="170px" width="190px" src="2.jfif"</center>`)

            document.write(`<center><font color="red"><h1>You are Lose : </h1></center>`)
         } 
         else
         {
            document.write("<center><h1>pelse try Again</h1></center>")
         } 
    }
    // scciors condtion
     
    function sccior1()
    {
         if (comp==1) 
         {
            document.write("<center><h3>computer Chosse a rock : </h3></center>")
            document.write(`<center><img hight="170px" width="190px" src="1.jpg"</center>`)
            
            document.write("<center><h3>You Chosse a sccior : </h3></center>")  
            document.write(`<center><img hight="170px" width="190px" src="3.jfif"</center>`)

            document.write(`<center><font color="red"><h1>You are Lose : </h1></center>`)
         }
        else if(comp==2)
         {
            document.write("<center><h3>computer Chosse a pepar : </h3></center>")
            document.write(`<center><img hight="170px" width="190px" src="2.jfif"</center>`)

            document.write("<center><h3>You Chosse a sccior : </h3></center>")
            document.write(`<center><img hight="170px" width="190px" src="3.jfif"</center>`)
            
            document.write('<center><h1><font color="green">You are Win : </h1></center>')
         }
         else if(comp==3) 
         {
            document.write("<center><h3>computer Chosse a scciors : </h3></center>")
            document.write(`<center><img hight="170px" width="190px" src="3.jfif"</center>`)

            document.write("<center><h3>You Chosse a sccior : </h3></center>")
            document.write(`<center><img hight="170px" width="190px" src="3.jfif"</center>`)
            
            document.write("<center><h1>Game is Tie</h1></center>")
         } 
          else
         {
            document.write("<center><h1>pelse try Again</h1></center>")
         } 
    }  


    