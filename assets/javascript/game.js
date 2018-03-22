// var attackPower=0;

var game = {
    characters : [{name:"Obi-Wan Kenobi",
         healthPoint: 120,
         attackPowerSeed: 8,
         imgAdd: "assets/images/Obi-WanKenobi.png",
         status:"N" },
         {name:"Luke-Skywalker",
         healthPoint: 100,
         attackPowerSeed: 5,
         imgAdd:"assets/images/Luke-Skywalker.png",
         status:"N"},
         {name:"Darth-Sidious",
         healthPoint: 150,
         attackPowerSeed: 20,
         imgAdd:"assets/images/Darth-Sidious.png",
         status:"N"},
         {name:"Darth-Maul",
         healthPoint: 180,
         attackPowerSeed: 25,
         imgAdd:"assets/images/Darth-Maul.png",
         status:"N"}
    ],
    counterAttack:0,
    attackPower:0,
    enemiesArr:[],
    startPickEnemy: false,
    finished: false,

    identifyCharacters: function(indexChar){
        var i=0;
        var j=0;
        var firstCharIndex=-1;
        var findEnemyIndex=-1;
        for(i=0;i<this.characters.length;i++){
            if(this.characters[i].status=="C"){
                firstCharIndex = i;
            }
        }
        for(j=0;j<this.characters.length;j++){
            if(this.characters[j].status=="D"){
                findEnemyIndex = j;
            }
        }
        // firstCharIndex = this.characters.indexOf("C");
        // findEnemyIndex = this.characters.indexOf("D");
        console.log("@@@firstCharIndex"+firstCharIndex);
        console.log("@@@findEnemyIndex"+findEnemyIndex);
        for(j=0;j<this.characters.length;j++){
            console.log("@@"+ this.characters[j].status+"indexchar"+indexChar);
        }
        if((firstCharIndex<0) && (findEnemyIndex<0)){
            this.characters[indexChar].status = "C";
           // console.log("@@@findEnemyIndex"+findEnemyIndex+"@@"+this.characters[1].status);
            for(var j=0;j<this.characters.length;j++){
                console.log("###first if"+ this.characters[j].status);
            }
            $("#chars").remove();

            game.showChar(indexChar);
            game.showPossibleEnemies();
        }
        if((firstCharIndex>=0) && (findEnemyIndex<0)) {
           this.characters[indexChar].status  ="D";
           for(var j=0;j<this.characters.length;j++){
            console.log("###############"+ this.characters[j].status);
        }
           $("#enemiesChars").empty();
           this.showPossibleEnemies();
           this.showDefender();
        
        }
        //if((firstCharIndex>0) && )

        for(i=0;i<this.characters.length;i++){
            
        }
    },
    showChar: function(charIndex){
        console.log("showchars");

     
        var intCharIndex = parseInt(charIndex);
        
        var newDiv = $("<div>");
        newDiv.attr("class","col-md-2 ");
        $("#yourChar").append(newDiv);

        var newDivName = $("<div>");
        newDivName.attr("class", "d-flex  justify-content-center bg-white");
        newDivName.text(this.characters[intCharIndex].name);
        newDiv.append(newDivName);

        var newDivImg = $("<div>");
        newDivImg.attr("class", "d-flex  justify-content-center bg-white");
        var newBtn = $("<button>");
        var newImg = $("<img>");
        newImg.attr("src",this.characters[intCharIndex].imgAdd);
        // newImg.val(charIndex);
        newBtn.append(newImg);
        newDivImg.append(newBtn);
        newDiv.append(newDivImg);

    
        var newDivHP=$("<div>");
        newDivHP.attr("class", "d-flex  justify-content-center bg-white");
        newDivHP.text(this.characters[intCharIndex].healthPoint);
        newDiv.append(newDivHP);

    },

    showPossibleEnemies: function(){
        //show all characters with status==N
        console.log("shoeEnemies");
        var i=0;
        for(i=0;i<this.characters.length;i++)
        {
            if(this.characters[i].status == "N"){
                console.log("Shoro: ****this.startPickEnemy"+this.startPickEnemy);
               
                var newDiv = $("<div>");
                newDiv.attr("class","col-md-2");
                $("#enemiesChars").append(newDiv);
    
                var newDivName = $("<div>");
                newDivName.text(this.characters[i].name);
                newDiv.append(newDivName);
                newDivName.attr("class", "d-flex  justify-content-center bg-white");
                var newDivImg = $("<div>");
                //
                newDivImg.attr("class", "d-flex  justify-content-center bg-white");
                var newBtn = $("<button>");
                var newImg = $("<img>");
                newImg.attr("src",this.characters[i].imgAdd);
                newBtn.attr("class","enemies");
                var iStr="";
                // iStr = toString(i);
                // newBtn.val(iStr);
                newBtn.val(i);
                console.log("index value ke daram:**"+newBtn.val()+"jsfhkjsh"+newBtn.attr("class"));
                newBtn.append(newImg);
                newDivImg.append(newBtn);
                newDiv.append(newDivImg);
    
            
                var newDivHP=$("<div>");
                newDivHP.attr("class", "d-flex  justify-content-center bg-white");
                newDivHP.text(this.characters[i].healthPoint);
                newDiv.append(newDivHP);
    
           
            
            }
        }
    },
    showDefender: function(){
        //show all defenders with status==E
        console.log("showDefender");
        var defenderIndex=-1;
        var i=0;
        for(i=0;i<this.characters.length;i++){
            if(this.characters[i].status == "D"){
                defenderIndex = i;
            }
        
        }
        var newDiv = $("<div>");
                newDiv.attr("class","col-md-2");
                $("#defenderChar").append(newDiv);
    
                var newDivName = $("<div>");
                newDivName.attr("class", "d-flex  justify-content-center bg-white");
                newDivName.text(this.characters[defenderIndex].name);
                newDiv.append(newDivName);
    
                var newDivImg = $("<div>");
                newDivImg.attr("class", "d-flex  justify-content-center bg-white");
                var newBtn = $("<button>");
                var newImg = $("<img>");
                newImg.attr("src",this.characters[defenderIndex].imgAdd);
                newBtn.val(defenderIndex);
                console.log("index value ke daram:**"+defenderIndex);
                newBtn.append(newImg);
                newDivImg.append(newBtn);
                newDiv.append(newDivImg);
    
            
                var newDivHP=$("<div>");
                newDivHP.attr("class", "d-flex  justify-content-center bg-white");
                newDivHP.text(this.characters[defenderIndex].healthPoint);
                newDiv.append(newDivHP);

    }, 
    startSet: function(){
        var i=0;
        console.log(i);
        // $("#chars").attr("title" , "charsSec");
         for(i=0;i<this.characters.length;i++){
             console.log("this.characters[i].name: "+this.characters[i].name);
             var newDiv = $("<div>");
            newDiv.attr("class","col-md-2");
             $("#chars").append(newDiv);
        //    $("#chars").html(newDiv);

            var newDivName = $("<div>");
            newDivName.attr("class", "d-flex  justify-content-center bg-white");
            newDivName.text(this.characters[i].name);
            newDiv.append(newDivName);
            //newDiv.html(newDivName);

            var newDivImg = $("<div>");
            newDivImg.attr("class","d-flex  justify-content-center bg-white");
            var newBtn = $("<button>");
            var newImg = $("<img>");
            newImg.attr("src",this.characters[i].imgAdd);
            newBtn.val(i);
            newBtn.append(newImg);
            newDivImg.append(newBtn);
            newDiv.append(newDivImg);
            // newBtn.html(newImg);
            // newDivImg.html(newBtn);
            // newDiv.html(newDivImg);

        
            var newDivHP=$("<div>");
            newDivHP.attr("class", "d-flex  justify-content-center bg-white");
            newDivHP.text(this.characters[i].healthPoint);
           newDiv.append(newDivHP);
        //    newDiv.html(newDivHP);

         }
    },

    attack: function(){
        var i=0;
        var defenderIndex=-1;
        var charIndex = 0;
        // var winCheck=0;
        // var winner = false;
       // var tempCharHP=0;
       if(!this.finished){
       for(i=0;i<this.characters.length;i++){     
           
            if(this.characters[i].status == "D"){
                defenderIndex = i;
            }
            if(this.characters[i].status == "C"){
                charIndex = i;
            }
            // if(this.characters[i].status == "L"){
            //     winCheck++;
            // }
        }
        if(defenderIndex >0){
            if((this.characters[defenderIndex].healthPoint > 0) && (this.characters[charIndex]).healthPoint >0){
                this.counterAttack = this.characters[defenderIndex].attackPowerSeed;
                this.attackPower = this.attackPower+ this.characters[charIndex].attackPowerSeed;
                this.characters[defenderIndex].healthPoint = this.characters[defenderIndex].healthPoint - this.attackPower;
                this.characters[charIndex].healthPoint = this.characters[charIndex].healthPoint - this.counterAttack;
                $("#defenderChar").empty();
                $("#yourChar").empty();
                this.showChar(charIndex);
                this.showDefender();
                $("#yourAttackPower").text("Your damage against your enemy: "+this.attackPower);
                $("#enemyCounterAttack").text("Your enemy damage against you: "+this.counterAttack );
            }
            if((this.characters[defenderIndex].healthPoint <=0) ){
                this.characters[defenderIndex].status="L";
                console.log("this.characters[defenderIndex].status:%%"+this.characters[defenderIndex].status);
                this.characters[charIndex].healthPoint = this.characters[charIndex].healthPoint + this.counterAttack;
                $("#defenderChar").empty();
                $("#yourChar").empty();
                this.showChar(charIndex);
                $("#yourAttackPower").empty();
                $("#enemyCounterAttack").empty();
                if(game.checkWin()){
                    game.charWinner();
                   
                }
                else{
                    $("#yourAttackPower").text("Please choose another enemy **defender");
                }
                
                // if(game.checkWin()){
                //     game.charWinner();
                // }
            }
            if((this.characters[charIndex].healthPoint<=0) ){
                // $("#yourAttackPower").text("Please choose another enemy** char ");
                $("#yourChar").css("color","red");
               // $("#yourChar").text("You Lost!!");
                $("#yourChar").append("<h1>You Lost!</h1>");
                game.charLoser();
            }   
        }}
    },

    charLoser: function(){
        $("#loser").text("You Lost");
        $("#yourAttackPower").empty();
        $("#enemyCounterAttack").empty();
        var newDiv = $("<div>");
        newDiv.attr("class","col-md-2");
        var restartBtn = $("<input>");
        restartBtn.attr("type", "reset");
        restartBtn.attr("value", "Restart");
        restartBtn.attr("id","resetbtn");
        newDiv.append(restartBtn);
        $("#restartButton").append(newDiv);
        this.finished=true;
        // var restartBtn = $("<input>");
        // restartBtn.attr("type", "reset");
        // restartBtn.attr("value", "Restart");
        // restartBtn.attr("id","resetbtn");
        // $("#restartButton").append(restartBtn); 
    },
    charWinner: function(){
        $("#defenderChar").empty();
        $("#yourChar").empty();
        $("#yourChar").css("color","green");
        $("#yourChar").append("<h1>You Won!!</h1>");
        var newDiv = $("<div>");
        newDiv.attr("class","col-md-2");
        var restartBtn = $("<input>");
        restartBtn.attr("type", "reset");
        restartBtn.attr("value", "Restart");
        restartBtn.attr("id","resetbtn");
        newDiv.append(restartBtn);
        $("#restartButton").append(newDiv);
        this.finished=true;
         
    },
    checkWin: function(){
        var i=0;
        var winCheck=0;
        var winner = false;
       // var tempCharHP=0;
       for(i=0;i<this.characters.length;i++){     
            if(this.characters[i].status == "L"){
                winCheck++;
            }
        }
        if(winCheck == this.characters.length-1 ){
            winner=true;
        }
        return winner;
    }


   
}

    $(document).ready(function() {
        game.startSet();
        $("body").on("click", "button", function(){
        // $("button").on("click", function(){
            var index = $(this).val();
            console.log("index: "+index);
            game.identifyCharacters(index);
            // game.showYourChar(index);
            // game.showYourEnemies(index);
           
        });
        $("#attack").on("click", function(){
            game.attack();
        });
        $("#restartButton").on("click", function(){
            location.replace(location.pathname);
        });
        //  $(".enemies").on("click", function(){
        //      var index = $(this).val();
        //      console.log("index: "+index);
        //      game.identifyCharacters(index);
        //  });
});