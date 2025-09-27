"use strict";
function navFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "navmenu") {
    x.className += " responsive";
  } else {
    x.className = "navmenu";
  }
}

/* SEASON 1967-68 */
function myFunction() {
  var Goals67 = document.getElementById("myGoals67").value;
  var Assists67 = document.getElementById("myAssists67").value;
  var Games67 = document.getElementById("myGames67").value;
  var teams67 = 12;

  let adjustedGames67 = parseInt(Games67)/74*82;
  let adjustedGoals67 = parseInt(Goals67)/((930-parseInt(Goals67))/(teams67*3-1))*26.8;
  let adjustedAssists67 = parseInt(Assists67)/((1288-parseInt(Assists67))/(teams67*3-1))*43.3145;
  let totalPoints67 = adjustedGoals67 + adjustedAssists67;

  /* SEASON 1968-69 */
  var Goals68 = document.getElementById("myGoals68").value;
  var Assists68 = document.getElementById("myAssists68").value;
  var Games68 = document.getElementById("myGames68").value;
  var teams68 = 12;

  let adjustedGames68 = parseInt(Games68)/76*82;
  let adjustedGoals68 = parseInt(Goals68)/((1108-parseInt(Goals68))/(teams68*3-1))*26.8;
  let adjustedAssists68 = parseInt(Assists68)/((1486-parseInt(Assists68))/(teams68*3-1))*43.3145;
  let totalPoints68 = adjustedGoals68 + adjustedAssists68; 

  /* SEASON 1969-70 */
  var Goals69 = document.getElementById("myGoals69").value;
  var Assists69 = document.getElementById("myAssists69").value;
  var Games69 = document.getElementById("myGames69").value;
  var teams69 = 12;

  let adjustedGames69 = parseInt(Games69)/76*82;
  let adjustedGoals69 = parseInt(Goals69)/((1032-parseInt(Goals69))/(teams69*3-1))*26.8;
  let adjustedAssists69 = parseInt(Assists69)/((1369-parseInt(Assists69))/(teams69*3-1))*43.3145;
  let totalPoints69 = adjustedGoals69 + adjustedAssists69;

  /* SEASON 1970-71 */
  var Goals70 = document.getElementById("myGoals70").value;
  var Assists70 = document.getElementById("myAssists70").value;
  var Games70 = document.getElementById("myGames70").value;
  var teams70 = 14;

  let adjustedGames70 = parseInt(Games70)/78*82;
  let adjustedGoals70 = parseInt(Goals70)/((1268-parseInt(Goals70))/(teams70*3-1))*26.8;
  let adjustedAssists70 = parseInt(Assists70)/((1780-parseInt(Assists70))/(teams70*3-1))*43.3145;
  let totalPoints70 = adjustedGoals70 + adjustedAssists70;

  /* SEASON 1971-72 */
  var Goals71 = document.getElementById("myGoals71").value;
  var Assists71 = document.getElementById("myAssists71").value;
  var Games71 = document.getElementById("myGames71").value;
  var teams71 = 14;

  let adjustedGames71 = parseInt(Games71)/78*82;
  let adjustedGoals71 = parseInt(Goals71)/((1285-parseInt(Goals71))/(teams71*3-1))*26.8;
  let adjustedAssists71 = parseInt(Assists71)/((1804-parseInt(Assists71))/(teams71*3-1))*43.3145;
  let totalPoints71 = adjustedGoals71 + adjustedAssists71;

  /* SEASON 1972-73 */
  var Goals72 = document.getElementById("myGoals72").value;
  var Assists72 = document.getElementById("myAssists72").value;
  var Games72 = document.getElementById("myGames72").value;
  var teams72 = 16;

  let adjustedGames72 = parseInt(Games72)/78*82;
  let adjustedGoals72 = parseInt(Goals72)/((1615-parseInt(Goals72))/(teams72*3-1))*26.8;
  let adjustedAssists72 = parseInt(Assists72)/((2216-parseInt(Assists72))/(teams72*3-1))*43.3145;
  let totalPoints72 = adjustedGoals72 + adjustedAssists72;

  /* SEASON 1973-74 */
  var Goals73 = document.getElementById("myGoals73").value;
  var Assists73 = document.getElementById("myAssists73").value;
  var Games73 = document.getElementById("myGames73").value;
  var teams73 = 16;

  let adjustedGames73 = parseInt(Games73)/78*82;
  let adjustedGoals73 = parseInt(Goals73)/((1485-parseInt(Goals73))/(teams73*3-1))*26.8;
  let adjustedAssists73 = parseInt(Assists73)/((2082-parseInt(Assists73))/(teams73*3-1))*43.3145;
  let totalPoints73 = adjustedGoals73 + adjustedAssists73;

  /* SEASON 1974-75 */
  var Goals74 = document.getElementById("myGoals74").value;
  var Assists74 = document.getElementById("myAssists74").value;
  var Games74 = document.getElementById("myGames74").value;
  var teams74 = 18;

  let adjustedGames74 = parseInt(Games74)/80*82;
  let adjustedGoals74 = parseInt(Goals74)/((1807-parseInt(Goals74))/(teams74*3-1))*26.8;
  let adjustedAssists74 = parseInt(Assists74)/((2558-parseInt(Assists74))/(teams74*3-1))*43.3145;
  let totalPoints74 = adjustedGoals74 + adjustedAssists74;

  /* SEASON 1975-76 */
  var Goals75 = document.getElementById("myGoals75").value;
  var Assists75 = document.getElementById("myAssists75").value;
  var Games75 = document.getElementById("myGames75").value;
  var teams75 = 18;

  let adjustedGames75 = parseInt(Games75)/80*82;
  let adjustedGoals75 = parseInt(Goals75)/((1845-parseInt(Goals75))/(teams75*3-1))*26.8;
  let adjustedAssists75 = parseInt(Assists75)/((2595-parseInt(Assists75))/(teams75*3-1))*43.3145;
  let totalPoints75 = adjustedGoals75 + adjustedAssists75;

  /* SEASON 1976-77 */
  var Goals76 = document.getElementById("myGoals76").value;
  var Assists76 = document.getElementById("myAssists76").value;
  var Games76 = document.getElementById("myGames76").value;
  var teams76 = 18;
  
  let adjustedGames76 = parseInt(Games76)/80*82;
  let adjustedGoals76 = parseInt(Goals76)/((1584-parseInt(Goals76))/(teams76*3-1))*26.8;
  let adjustedAssists76 = parseInt(Assists76)/((2465-parseInt(Assists76))/(teams76*3-1))*43.3145;
  let totalPoints76 = adjustedGoals76 + adjustedAssists76;

  /* SEASON 1977-78 */
  var Goals77 = document.getElementById("myGoals77").value;
  var Assists77 = document.getElementById("myAssists77").value;
  var Games77 = document.getElementById("myGames77").value;
  var teams77 = 18;

  let adjustedGames77 = parseInt(Games77)/80*82;
  let adjustedGoals77 = parseInt(Goals77)/((1677-parseInt(Goals77))/(teams77*3-1))*26.8;
  let adjustedAssists77 = parseInt(Assists77)/((2407-parseInt(Assists77))/(teams77*3-1))*43.3145;
  let totalPoints77 = adjustedGoals77 + adjustedAssists77;

  /* SEASON 1978-79 */
  var Goals78 = document.getElementById("myGoals78").value;
  var Assists78 = document.getElementById("myAssists78").value;
  var Games78 = document.getElementById("myGames78").value;
  var teams78 = 17;
  
  let adjustedGames78 = parseInt(Games78)/80*82;
  let adjustedGoals78 = parseInt(Goals78)/((1653-parseInt(Goals78))/(teams78*3-1))*26.8;
  let adjustedAssists78 = parseInt(Assists78)/((2460-parseInt(Assists78))/(teams78*3-1))*43.3145;
  let totalPoints78 = adjustedGoals78 + adjustedAssists78;

      /* SEASON 1979-80 */
      var Goals79 = document.getElementById("myGoals79").value;
      var Assists79 = document.getElementById("myAssists79").value;
      var Games79 = document.getElementById("myGames79").value;
      var teams79 = 21;
      
      let adjustedGames79 = parseInt(Games79)/80*82;
      let adjustedGoals79 = parseInt(Goals79)/((2198-parseInt(Goals79))/(teams79*3-1))*26.8;
      let adjustedAssists79 = parseInt(Assists79)/((2935-parseInt(Assists79))/(teams79*3-1))*43.3145;
      let totalPoints79 = adjustedGoals79 + adjustedAssists79;

              /* SEASON 1980-81 */
              var Goals80 = document.getElementById("myGoals80").value;
              var Assists80 = document.getElementById("myAssists80").value;
              var Games80 = document.getElementById("myGames80").value;
              var teams80 = 21;
              
              let adjustedGames80 = parseInt(Games80)/80*82;
              let adjustedGoals80 = parseInt(Goals80)/((2228-parseInt(Goals80))/(teams80*3-1))*26.8;
              let adjustedAssists80 = parseInt(Assists80)/((3093-parseInt(Assists80))/(teams80*3-1))*43.3145;
              let totalPoints80 = adjustedGoals80 + adjustedAssists80;

                      /* SEASON 1981-82 */
      var Goals81 = document.getElementById("myGoals81").value;
      var Assists81 = document.getElementById("myAssists81").value;
      var Games81 = document.getElementById("myGames81").value;
      var teams81 = 21;
      
      let adjustedGames81 = parseInt(Games81)/80*82;
      let adjustedGoals81 = parseInt(Goals81)/((2383-parseInt(Goals81))/(teams81*3-1))*26.8;
      let adjustedAssists81 = parseInt(Assists81)/((3375-parseInt(Assists81))/(teams81*3-1))*43.3145;
      let totalPoints81 = adjustedGoals81 + adjustedAssists81;

              /* SEASON 1982-83 */
              var Goals82 = document.getElementById("myGoals82").value;
              var Assists82 = document.getElementById("myAssists82").value;
              var Games82 = document.getElementById("myGames82").value;
              var teams82 = 21;
              
              let adjustedGames82 = parseInt(Games82)/80*82;
              let adjustedGoals82 = parseInt(Goals82)/((2277-parseInt(Goals82))/(teams82*3-1))*26.8;
              let adjustedAssists82 = parseInt(Assists82)/((3131-parseInt(Assists82))/(teams82*3-1))*43.3145;
              let totalPoints82 = adjustedGoals82 + adjustedAssists82;

                      /* SEASON 1983-84 */
      var Goals83 = document.getElementById("myGoals83").value;
      var Assists83 = document.getElementById("myAssists83").value;
      var Games83 = document.getElementById("myGames83").value;
      var teams83 = 21;
      
      let adjustedGames83 = parseInt(Games83)/80*82;
      let adjustedGoals83 = parseInt(Goals83)/((2356-parseInt(Goals83))/(teams83*3-1))*26.8;
      let adjustedAssists83 = parseInt(Assists83)/((3253-parseInt(Assists83))/(teams83*3-1))*43.3145;
      let totalPoints83 = adjustedGoals83 + adjustedAssists83;

              /* SEASON 1984-85 */
              var Goals84 = document.getElementById("myGoals84").value;
              var Assists84 = document.getElementById("myAssists84").value;
              var Games84 = document.getElementById("myGames84").value;
              var teams84 = 21;
              
              let adjustedGames84 = parseInt(Games84)/80*82;
              let adjustedGoals84 = parseInt(Goals84)/((2286-parseInt(Goals84))/(teams84*3-1))*26.8;
              let adjustedAssists84 = parseInt(Assists84)/((3239-parseInt(Assists84))/(teams84*3-1))*43.3145;
              let totalPoints84 = adjustedGoals84 + adjustedAssists84;

                      /* SEASON 1985-86 */
      var Goals85 = document.getElementById("myGoals85").value;
      var Assists85 = document.getElementById("myAssists85").value;
      var Games85 = document.getElementById("myGames85").value;
      var teams85 = 21;
      
      let adjustedGames85 = parseInt(Games85)/80*82;
      let adjustedGoals85 = parseInt(Goals85)/((2331-parseInt(Goals85))/(teams85*3-1))*26.8;
      let adjustedAssists85 = parseInt(Assists85)/((3257-parseInt(Assists85))/(teams85*3-1))*43.3145;
      let totalPoints85 = adjustedGoals85 + adjustedAssists85;

              /* SEASON 1986-87 */
              var Goals86 = document.getElementById("myGoals86").value;
              var Assists86 = document.getElementById("myAssists86").value;
              var Games86 = document.getElementById("myGames86").value;
              var teams86 = 21;
              
              let adjustedGames86 = parseInt(Games86)/80*82;
              let adjustedGoals86 = parseInt(Goals86)/((2120-parseInt(Goals86))/(teams86*3-1))*26.8;
              let adjustedAssists86 = parseInt(Assists86)/((2980-parseInt(Assists86))/(teams86*3-1))*43.3145;
              let totalPoints86 = adjustedGoals86 + adjustedAssists86;

                      /* SEASON 1987-88 */
      var Goals87 = document.getElementById("myGoals87").value;
      var Assists87 = document.getElementById("myAssists87").value;
      var Games87 = document.getElementById("myGames87").value;
      var teams87 = 21;
      
      let adjustedGames87 = parseInt(Games87)/80*82;
      let adjustedGoals87 = parseInt(Goals87)/((2280-parseInt(Goals87))/(teams87*3-1))*26.8;
      let adjustedAssists87 = parseInt(Assists87)/((3193-parseInt(Assists87))/(teams87*3-1))*43.3145;
      let totalPoints87 = adjustedGoals87 + adjustedAssists87;

              /* SEASON 1988-89 */
              var Goals88 = document.getElementById("myGoals88").value;
              var Assists88 = document.getElementById("myAssists88").value;
              var Games88 = document.getElementById("myGames88").value;
              var teams88 = 21;
              
              let adjustedGames88 = parseInt(Games88)/80*82;
              let adjustedGoals88 = parseInt(Goals88)/((2286-parseInt(Goals88))/(teams88*3-1))*26.8;
              let adjustedAssists88 = parseInt(Assists88)/((3248-parseInt(Assists88))/(teams88*3-1))*43.3145;
              let totalPoints88 = adjustedGoals88 + adjustedAssists88;

              /* SEASON 1989-90 */
              var Goals90 = document.getElementById("myGoals90").value;
    var Assists90 = document.getElementById("myAssists90").value;
    var Games90 = document.getElementById("myGames90").value;
    var teams90 = 21;

    let adjustedGames90 = parseInt(Games90)/80*82;
    let adjustedGoals90 = parseInt(Goals90)/((2250-parseInt(Goals90))/(teams90*3-1))*26.8;
    let adjustedAssists90 = parseInt(Assists90)/((3263-parseInt(Assists90))/(teams90*3-1))*43.3145;
    let totalPoints90 = adjustedGoals90 + adjustedAssists90;

    /* SEASON 1990-91 */
    var Goals91 = document.getElementById("myGoals91").value;
    var Assists91 = document.getElementById("myAssists91").value;
    var Games91 = document.getElementById("myGames91").value;
    var teams91 = 21;

    let adjustedGames91 = parseInt(Games91)/80*82;
    let adjustedGoals91 = parseInt(Goals91)/((2012-parseInt(Goals91))/(teams91*3-1))*26.8;
    let adjustedAssists91 = parseInt(Assists91)/((3138-parseInt(Assists91))/(teams91*3-1))*43.3145;
    let totalPoints91 = adjustedGoals91 + adjustedAssists91; 

    /* SEASON 1991-92 */
    var Goals92 = document.getElementById("myGoals92").value;
    var Assists92 = document.getElementById("myAssists92").value;
    var Games92 = document.getElementById("myGames92").value;
    var teams92 = 22;

    let adjustedGames92 = parseInt(Games92)/80*82;
    let adjustedGoals92 = parseInt(Goals92)/((2198-parseInt(Goals92))/(teams92*3-1))*26.8;
    let adjustedAssists92 = parseInt(Assists92)/((3258-parseInt(Assists92))/(teams92*3-1))*43.3145;
    let totalPoints92 = adjustedGoals92 + adjustedAssists92;

    /* SEASON 1992-93 */
    var Goals93 = document.getElementById("myGoals93").value;
    var Assists93 = document.getElementById("myAssists93").value;
    var Games93 = document.getElementById("myGames93").value;
    var teams93 = 24;

    let adjustedGames93 = parseInt(Games93)/84*82;
    let adjustedGoals93 = parseInt(Goals93)/((2697-parseInt(Goals93))/(teams93*3-1))*26.8;
    let adjustedAssists93 = parseInt(Assists93)/((4085-parseInt(Assists93))/(teams93*3-1))*43.3145;
    let totalPoints93 = adjustedGoals93 + adjustedAssists93;

    /* SEASON 1993-94 */
    var Goals94 = document.getElementById("myGoals94").value;
    var Assists94 = document.getElementById("myAssists94").value;
    var Games94 = document.getElementById("myGames94").value;
    var teams94 = 26;

    let adjustedGames94 = parseInt(Games94)/84*82;
    let adjustedGoals94 = parseInt(Goals94)/((2601-parseInt(Goals94))/(teams94*3-1))*26.8;
    let adjustedAssists94 = parseInt(Assists94)/((3781-parseInt(Assists94))/(teams94*3-1))*43.3145;
    let totalPoints94 = adjustedGoals94 + adjustedAssists94;

    /* SEASON 1994-95 */
    var Goals95 = document.getElementById("myGoals95").value;
    var Assists95 = document.getElementById("myAssists95").value;
    var Games95 = document.getElementById("myGames95").value;
    var teams95 = 26;

    let adjustedGames95 = parseInt(Games95)/48*82;
    let adjustedGoals95 = parseInt(Goals95)/((1353-parseInt(Goals95))/(teams95*3-1))*26.8;
    let adjustedAssists95 = parseInt(Assists95)/((2020-parseInt(Assists95))/(teams95*3-1))*43.3145;
    let totalPoints95 = adjustedGoals95 + adjustedAssists95;

    /* SEASON 1995-96 */
    var Goals96 = document.getElementById("myGoals96").value;
    var Assists96 = document.getElementById("myAssists96").value;
    var Games96 = document.getElementById("myGames96").value;
    var teams96 = 26;

    let adjustedGames96 = parseInt(Games96)/82*82;
    let adjustedGoals96 = parseInt(Goals96)/((2427-parseInt(Goals96))/(teams96*3-1))*26.8;
    let adjustedAssists96 = parseInt(Assists96)/((3899-parseInt(Assists96))/(teams96*3-1))*43.3145;
    let totalPoints96 = adjustedGoals96 + adjustedAssists96;

    /* SEASON 1996-97 */
    var Goals97 = document.getElementById("myGoals97").value;
    var Assists97 = document.getElementById("myAssists97").value;
    var Games97 = document.getElementById("myGames97").value;
    var teams97 = 26;

    let adjustedGames97 = parseInt(Games97)/82*82;
    let adjustedGoals97 = parseInt(Goals97)/((2260-parseInt(Goals97))/(teams97*3-1))*26.8;
    let adjustedAssists97 = parseInt(Assists97)/((3228-parseInt(Assists97))/(teams97*3-1))*43.3145;
    let totalPoints97 = adjustedGoals97 + adjustedAssists97;

    /* SEASON 1997-98 */
    var Goals98 = document.getElementById("myGoals98").value;
    var Assists98 = document.getElementById("myAssists98").value;
    var Games98 = document.getElementById("myGames98").value;
    var teams98 = 26;

    let adjustedGames98 = parseInt(Games98)/82*82;
    let adjustedGoals98 = parseInt(Goals98)/((1971-parseInt(Goals98))/(teams98*3-1))*26.8;
    let adjustedAssists98 = parseInt(Assists98)/((2943-parseInt(Assists98))/(teams98*3-1))*43.3145;
    let totalPoints98 = adjustedGoals98 + adjustedAssists98;

    /* SEASON 1998-99 */
    var Goals99 = document.getElementById("myGoals99").value;
    var Assists99 = document.getElementById("myAssists99").value;
    var Games99 = document.getElementById("myGames99").value;
    var teams99 = 27;
    
    let adjustedGames99 = parseInt(Games99)/82*82;
    let adjustedGoals99 = parseInt(Goals99)/((2142-parseInt(Goals99))/(teams99*3-1))*26.8;
    let adjustedAssists99 = parseInt(Assists99)/((3113-parseInt(Assists99))/(teams99*3-1))*43.3145;
    let totalPoints99 = adjustedGoals99 + adjustedAssists99;

    /* SEASON 1999-00 */
    var Goals00 = document.getElementById("myGoals00").value;
    var Assists00 = document.getElementById("myAssists00").value;
    var Games00 = document.getElementById("myGames00").value;
    var teams00 = 28;

    let adjustedGames00 = parseInt(Games00)/82*82;
    let adjustedGoals00 = parseInt(Goals00)/((2165-parseInt(Goals00))/(teams00*3-1))*26.8;
    let adjustedAssists00 = parseInt(Assists00)/((3302-parseInt(Assists00))/(teams00*3-1))*43.3145;
    let totalPoints00 = adjustedGoals00 + adjustedAssists00;

    /* SEASON 2000-01 */
    var Goals01 = document.getElementById("myGoals01").value;
    var Assists01 = document.getElementById("myAssists01").value;
    var Games01 = document.getElementById("myGames01").value;
    var teams01 = 30;
    
    let adjustedGames01 = parseInt(Games01)/82*82;
    let adjustedGoals01 = parseInt(Goals01)/((2607-parseInt(Goals01))/(teams01*3-1))*26.8;
    let adjustedAssists01 = parseInt(Assists01)/((3787-parseInt(Assists01))/(teams01*3-1))*43.3145;
    let totalPoints01 = adjustedGoals01 + adjustedAssists01;

    /* SEASON 2001-02 */
    var Goals02 = document.getElementById("myGoals02").value;
    var Assists02 = document.getElementById("myAssists02").value;
    var Games02 = document.getElementById("myGames02").value;
    var teams02 = 30;

    let adjustedGames02 = parseInt(Games02)/82*82;
    let adjustedGoals02 = parseInt(Goals02)/((2386-parseInt(Goals02))/(teams02*3-1))*26.8;
    let adjustedAssists02 = parseInt(Assists02)/((3354-parseInt(Assists02))/(teams02*3-1))*43.3145;
    let totalPoints02 = adjustedGoals02 + adjustedAssists02;

    /* SEASON 2002-03 */
    var Goals03 = document.getElementById("myGoals03").value;
    var Assists03 = document.getElementById("myAssists03").value;
    var Games03 = document.getElementById("myGames03").value;
    var teams03 = 30;
    
    let adjustedGames03 = parseInt(Games03)/82*82;
    let adjustedGoals03 = parseInt(Goals03)/((2420-parseInt(Goals03))/(teams03*3-1))*26.8;
    let adjustedAssists03 = parseInt(Assists03)/((3599-parseInt(Assists03))/(teams03*3-1))*43.3145;
    let totalPoints03 = adjustedGoals03 + adjustedAssists03;

    /* SEASON 2003-04 */
    var Goals04 = document.getElementById("myGoals04").value;
    var Assists04 = document.getElementById("myAssists04").value;
    var Games04 = document.getElementById("myGames04").value;
    var teams04 = 30;

    let adjustedGames04 = parseInt(Games04)/82*82;
    let adjustedGoals04 = parseInt(Goals04)/((2158-parseInt(Goals04))/(teams04*3-1))*26.8;
    let adjustedAssists04 = parseInt(Assists04)/((3305-parseInt(Assists04))/(teams04*3-1))*43.3145;
    let totalPoints04 = adjustedGoals04 + adjustedAssists04;


/* SEASON 2005-06 */
    var Goals06 = document.getElementById("myGoals06").value;
    var Assists06 = document.getElementById("myAssists06").value;
    var Games06 = document.getElementById("myGames06").value;
    var teams06 = 30;

    let adjustedGames06 = parseInt(Games06)/82*82;
    let adjustedGoals06 = parseInt(Goals06)/((2607-parseInt(Goals06))/(teams06*3-1))*26.8;
    let adjustedAssists06 = parseInt(Assists06)/((4137-parseInt(Assists06))/(teams06*3-1))*43.3145;
    let totalPoints06 = adjustedGoals06 + adjustedAssists06;

    /* SEASON 2006-07 */
    var Goals07 = document.getElementById("myGoals07").value;
    var Assists07 = document.getElementById("myAssists07").value;
    var Games07 = document.getElementById("myGames07").value;
    var teams07 = 30;

    let adjustedGames07 = parseInt(Games07)/82*82;
    let adjustedGoals07 = parseInt(Goals07)/((2567-parseInt(Goals07))/(teams07*3-1))*26.8;
    let adjustedAssists07 = parseInt(Assists07)/((4080-parseInt(Assists07))/(teams07*3-1))*43.3145;
    let totalPoints07 = adjustedGoals07 + adjustedAssists07; 

    /* SEASON 2007-08 */
    var Goals08 = document.getElementById("myGoals08").value;
    var Assists08 = document.getElementById("myAssists08").value;
    var Games08 = document.getElementById("myGames08").value;
    var teams08 = 30;

    let adjustedGames08 = parseInt(Games08)/82*82;
    let adjustedGoals08 = parseInt(Goals08)/((2441-parseInt(Goals08))/(teams08*3-1))*26.8;
    let adjustedAssists08 = parseInt(Assists08)/((3771-parseInt(Assists08))/(teams08*3-1))*43.3145;
    let totalPoints08 = adjustedGoals08 + adjustedAssists08;

    /* SEASON 2008-09 */
    var Goals09 = document.getElementById("myGoals09").value;
    var Assists09 = document.getElementById("myAssists09").value;
    var Games09 = document.getElementById("myGames09").value;
    var teams09 = 30;

    let adjustedGames09 = parseInt(Games09)/82*82;
    let adjustedGoals09 = parseInt(Goals09)/((2511-parseInt(Goals09))/(teams09*3-1))*26.8;
    let adjustedAssists09 = parseInt(Assists09)/((3728-parseInt(Assists09))/(teams09*3-1))*43.3145;
    let totalPoints09 = adjustedGoals09 + adjustedAssists09;

    /* SEASON 2009-10 */
    var Goals10 = document.getElementById("myGoals10").value;
    var Assists10 = document.getElementById("myAssists10").value;
    var Games10 = document.getElementById("myGames10").value;
    var teams10 = 30;

    let adjustedGames10 = parseInt(Games10)/82*82;
    let adjustedGoals10 = parseInt(Goals10)/((2357-parseInt(Goals10))/(teams10*3-1))*26.8;
    let adjustedAssists10 = parseInt(Assists10)/((3693-parseInt(Assists10))/(teams10*3-1))*43.3145;
    let totalPoints10 = adjustedGoals10 + adjustedAssists10;

    /* SEASON 2010-11 */
    var Goals11 = document.getElementById("myGoals11").value;
    var Assists11 = document.getElementById("myAssists11").value;
    var Games11 = document.getElementById("myGames11").value;
    var teams11 = 30;

    let adjustedGames11 = parseInt(Games11)/82*82;
    let adjustedGoals11 = parseInt(Goals11)/((2324-parseInt(Goals11))/(teams11*3-1))*26.8;
    let adjustedAssists11 = parseInt(Assists11)/((3444-parseInt(Assists11))/(teams11*3-1))*43.3145;
    let totalPoints11 = adjustedGoals11 + adjustedAssists11;

    /* SEASON 2011-12 */
    var Goals12 = document.getElementById("myGoals12").value;
    var Assists12 = document.getElementById("myAssists12").value;
    var Games12 = document.getElementById("myGames12").value;
    var teams12 = 30;

    let adjustedGames12 = parseInt(Games12)/82*82;
    let adjustedGoals12 = parseInt(Goals12)/((2371-parseInt(Goals12))/(teams12*3-1))*26.8;
    let adjustedAssists12 = parseInt(Assists12)/((3459-parseInt(Assists12))/(teams12*3-1))*43.3145;
    let totalPoints12 = adjustedGoals12 + adjustedAssists12;

    /* SEASON 2012-13 */
    var Goals13 = document.getElementById("myGoals13").value;
    var Assists13 = document.getElementById("myAssists13").value;
    var Games13 = document.getElementById("myGames13").value;
    var teams13 = 30;

    let adjustedGames13 = parseInt(Games13)/48*82;
    let adjustedGoals13 = parseInt(Goals13)/((1359-parseInt(Goals13))/(teams13*3-1))*26.8;
    let adjustedAssists13 = parseInt(Assists13)/((2105-parseInt(Assists13))/(teams13*3-1))*43.3145;
    let totalPoints13 = adjustedGoals13 + adjustedAssists13;

    /* SEASON 2013-14 */
    var Goals14 = document.getElementById("myGoals14").value;
    var Assists14 = document.getElementById("myAssists14").value;
    var Games14 = document.getElementById("myGames14").value;
    var teams14 = 30;

    let adjustedGames14 = parseInt(Games14)/82*82;
    let adjustedGoals14 = parseInt(Goals14)/((2226-parseInt(Goals14))/(teams14*3-1))*26.8;
    let adjustedAssists14 = parseInt(Assists14)/((3404-parseInt(Assists14))/(teams14*3-1))*43.3145;
    let totalPoints14 = adjustedGoals14 + adjustedAssists14;

    /* SEASON 2014-15 */
    var Goals15 = document.getElementById("myGoals15").value;
    var Assists15 = document.getElementById("myAssists15").value;
    var Games15 = document.getElementById("myGames15").value;
    var teams15 = 30;
    
    let adjustedGames15 = parseInt(Games15)/82*82;
    let adjustedGoals15 = parseInt(Goals15)/((2159-parseInt(Goals15))/(teams15*3-1))*26.8;
    let adjustedAssists15 = parseInt(Assists15)/((3430-parseInt(Assists15))/(teams15*3-1))*43.3145;
    let totalPoints15 = adjustedGoals15 + adjustedAssists15;

    /* SEASON 2015-16 */
    var Goals16 = document.getElementById("myGoals16").value;
    var Assists16 = document.getElementById("myAssists16").value;
    var Games16 = document.getElementById("myGames16").value;
    var teams16 = 30;

    let adjustedGames16 = parseInt(Games16)/82*82;
    let adjustedGoals16 = parseInt(Goals16)/((2252-parseInt(Goals16))/(teams16*3-1))*26.8;
    let adjustedAssists16 = parseInt(Assists16)/((3298-parseInt(Assists16))/(teams16*3-1))*43.3145;
    let totalPoints16 = adjustedGoals16 + adjustedAssists16;

    /* SEASON 2016-17 */
    var Goals17 = document.getElementById("myGoals17").value;
    var Assists17 = document.getElementById("myAssists17").value;
    var Games17 = document.getElementById("myGames17").value;
    var teams17 = 30;
    
    let adjustedGames17 = parseInt(Games17)/82*82;
    let adjustedGoals17 = parseInt(Goals17)/((2214-parseInt(Goals17))/(teams17*3-1))*26.8;
    let adjustedAssists17 = parseInt(Assists17)/((3387-parseInt(Assists17))/(teams17*3-1))*43.3145;
    let totalPoints17 = adjustedGoals17 + adjustedAssists17;

    /* SEASON 2017-18 */
    var Goals18 = document.getElementById("myGoals18").value;
    var Assists18 = document.getElementById("myAssists18").value;
    var Games18 = document.getElementById("myGames18").value;
    var teams18 = 31;

    let adjustedGames18 = parseInt(Games18)/82*82;
    let adjustedGoals18 = parseInt(Goals18)/((2454-parseInt(Goals18))/(teams18*3-1))*26.8;
    let adjustedAssists18 = parseInt(Assists18)/((4062-parseInt(Assists18))/(teams18*3-1))*43.3145;
    let totalPoints18 = adjustedGoals18 + adjustedAssists18;

    /* SEASON 2018-19 */
    var Goals19 = document.getElementById("myGoals19").value;
    var Assists19 = document.getElementById("myAssists19").value;
    var Games19 = document.getElementById("myGames19").value;
    var teams19 = 31;
    
    let adjustedGames19 = parseInt(Games19)/82*82;
    let adjustedGoals19 = parseInt(Goals19)/((2634-parseInt(Goals19))/(teams19*3-1))*26.8;
    let adjustedAssists19 = parseInt(Assists19)/((4222-parseInt(Assists19))/(teams19*3-1))*43.3145;
    let totalPoints19 = adjustedGoals19 + adjustedAssists19;

    /* SEASON 2019-20 */
    var Goals20 = document.getElementById("myGoals20").value;
    var Assists20 = document.getElementById("myAssists20").value;
    var Games20 = document.getElementById("myGames20").value;
    var teams20 = 31;

    let adjustedGames20 = parseInt(Games20)/71*82;
    let adjustedGoals20 = parseInt(Goals20)/((2203-parseInt(Goals20))/(teams20*3-1))*26.8;
    let adjustedAssists20 = parseInt(Assists20)/((3399-parseInt(Assists20))/(teams20*3-1))*43.3145;
    let totalPoints20 = adjustedGoals20 + adjustedAssists20;

    /* SEASON 2020-21 */
    var Goals21 = document.getElementById("myGoals21").value;
    var Assists21 = document.getElementById("myAssists21").value;
    var Games21 = document.getElementById("myGames21").value;
    var teams21 = 31;
    
    let adjustedGames21 = parseInt(Games21)/56*82;
    let adjustedGoals21 = parseInt(Goals21)/((1702-parseInt(Goals21))/(teams21*3-1))*26.8;
    let adjustedAssists21 = parseInt(Assists21)/((2751-parseInt(Assists21))/(teams21*3-1))*43.3145;
    let totalPoints21 = adjustedGoals21 + adjustedAssists21;

     /* SEASON 2021-22 */
     var Goals22 = document.getElementById("myGoals22").value;
     var Assists22 = document.getElementById("myAssists22").value;
     var Games22 = document.getElementById("myGames22").value;
     var teams22 = 32;
        
     let adjustedGames22 = parseInt(Games22)/82*82;
     let adjustedGoals22 = parseInt(Goals22)/((2839-parseInt(Goals22))/(teams22*3-1))*26.8;
     let adjustedAssists22 = parseInt(Assists22)/((4400-parseInt(Assists22))/(teams22*3-1))*43.3145;
     let totalPoints22 = adjustedGoals22 + adjustedAssists22; 

    /* SEASON 2022-23 */
     var Goals23 = document.getElementById("myGoals23").value;
     var Assists23 = document.getElementById("myAssists23").value;
     var Games23 = document.getElementById("myGames23").value;
     var teams23 = 32;
             
     let adjustedGames23 = parseInt(Games23)/82*82;
     let adjustedGoals23 = parseInt(Goals23)/((2966-parseInt(Goals23))/(teams23*3-1))*26.8;
     let adjustedAssists23 = parseInt(Assists23)/((4508-parseInt(Assists23))/(teams23*3-1))*43.3145;
     let totalPoints23 = adjustedGoals23 + adjustedAssists23; 

    /* SEASON 2023-24 */
    var Goals24 = document.getElementById("myGoals24").value;
    var Assists24 = document.getElementById("myAssists24").value;
    var Games24 = document.getElementById("myGames24").value;
    var teams24 = 32;
                     
    let adjustedGames24 = parseInt(Games24)/82*82;
    let adjustedGoals24 = parseInt(Goals24)/((2882-parseInt(Goals24))/(teams24*3-1))*26.8;
    let adjustedAssists24 = parseInt(Assists24)/((4476-parseInt(Assists24))/(teams24*3-1))*43.3145;
    let totalPoints24 = adjustedGoals24 + adjustedAssists24; 

    let totaltotalGames = adjustedGames67 + adjustedGames68 + adjustedGames69 + adjustedGames70 + adjustedGames71 + adjustedGames72 + adjustedGames73 + adjustedGames74 + 
    adjustedGames75 + adjustedGames76 + adjustedGames77 + adjustedGames78 + adjustedGames79
    + adjustedGames80 + adjustedGames81 + adjustedGames82 + adjustedGames83 + adjustedGames84
    + adjustedGames85 + adjustedGames86 + adjustedGames87 + adjustedGames88 + adjustedGames90 + adjustedGames91 + adjustedGames92 + adjustedGames93 + adjustedGames94 + adjustedGames95 + adjustedGames96 + adjustedGames97 + 
    adjustedGames98 + adjustedGames99 + adjustedGames00 + adjustedGames01 + adjustedGames02 + adjustedGames03 + adjustedGames04 + adjustedGames06 + adjustedGames07 + adjustedGames08 + adjustedGames09 + adjustedGames10 + adjustedGames11 + adjustedGames12 + adjustedGames13 + 
    adjustedGames14 + adjustedGames15 + adjustedGames16 + adjustedGames17 + adjustedGames18 + adjustedGames19 + adjustedGames20 + adjustedGames21 + adjustedGames22 + adjustedGames23 + adjustedGames24;
    let totaltotalGoals = adjustedGoals67 + adjustedGoals68 + adjustedGoals69 + adjustedGoals70 + adjustedGoals71 + adjustedGoals72 + adjustedGoals73 + adjustedGoals74 + 
    adjustedGoals75 + adjustedGoals76 + adjustedGoals77 + adjustedGoals78 + adjustedGoals79
    + adjustedGoals80 + adjustedGoals81 + adjustedGoals82 + adjustedGoals83 + adjustedGoals84 + adjustedGoals85
    + adjustedGoals86 + adjustedGoals87 + adjustedGoals88 + adjustedGoals90 + adjustedGoals91 + adjustedGoals92 + adjustedGoals93 + adjustedGoals94 + adjustedGoals95 + adjustedGoals96 + adjustedGoals97 + 
    adjustedGoals98 + adjustedGoals99 + adjustedGoals00 + adjustedGoals01 + adjustedGoals02 +adjustedGoals03 + adjustedGoals04 + adjustedGoals06 + adjustedGoals07 + adjustedGoals08 + adjustedGoals09 + adjustedGoals10 + adjustedGoals11 + adjustedGoals12 + adjustedGoals13 + 
    adjustedGoals14 + adjustedGoals15 + adjustedGoals16 + adjustedGoals17 + adjustedGoals18 +adjustedGoals19 + adjustedGoals20 + adjustedGoals21 + adjustedGoals22 + adjustedGoals23 + adjustedGoals24;
    let totaltotalAssists = adjustedAssists67 + adjustedAssists68 + adjustedAssists69 + adjustedAssists70 + adjustedAssists71 + adjustedAssists72 +adjustedAssists73 +
    adjustedAssists74 + adjustedAssists75 + adjustedAssists76 + adjustedAssists77 + adjustedAssists78
    + adjustedAssists79 + adjustedAssists80 + adjustedAssists81 + adjustedAssists82 + adjustedAssists83
    + adjustedAssists84 + adjustedAssists85 + adjustedAssists86 + adjustedAssists87 + adjustedAssists88 + adjustedAssists90 + adjustedAssists91 + adjustedAssists92 + adjustedAssists93 + adjustedAssists94 + adjustedAssists95 +adjustedAssists96 +
    adjustedAssists97 + adjustedAssists98 + adjustedAssists99 + adjustedAssists00 + adjustedAssists01 + adjustedAssists02 + adjustedAssists03 + adjustedAssists04 + adjustedAssists06 + adjustedAssists07 + adjustedAssists08 + adjustedAssists09 + adjustedAssists10 + adjustedAssists11 +adjustedAssists12 +
    adjustedAssists13 + adjustedAssists14 + adjustedAssists15 + adjustedAssists16 + adjustedAssists17 + adjustedAssists18 + adjustedAssists19 + adjustedAssists20
    + adjustedAssists21 + adjustedAssists22 + adjustedAssists23 + adjustedAssists24;
    let totaltotalPoints = totaltotalGoals + totaltotalAssists;

    document.getElementById("demo").innerHTML = 
     name.bold() + "<br/>"  + 
     "Season: 1967-68 - " + "Games played: " + (adjustedGames67.toFixed(1)) + " - Goals: " + (adjustedGoals67.toFixed(1)) + " - Assists: " +  + (adjustedAssists67.toFixed(1)) 
    + " - " + " Points: " + (totalPoints67.toFixed(1))  + "<br/>" + 
    "Season: 1968-69 - " + "Games played: " + (adjustedGames68.toFixed(1)) + " - Goals: " + (adjustedGoals68.toFixed(1)) + " - Assists: " +  + (adjustedAssists68.toFixed(1)) 
    + " - " + " Points: " + (totalPoints68.toFixed(1))  + "<br/>" +
    "Season: 1969-70 - " + "Games played: " + (adjustedGames69.toFixed(1)) + " - Goals: " + (adjustedGoals69.toFixed(1)) + " - Assists: " +  + (adjustedAssists69.toFixed(1)) 
    + " - " + " Points: " + (totalPoints69.toFixed(1))  + "<br/>" +
    "Season: 1970-71 - " + "Games played: " + (adjustedGames70.toFixed(1)) + " - Goals: " + (adjustedGoals70.toFixed(1)) + " - Assists: " +  + (adjustedAssists70.toFixed(1)) 
    + " - " + " Points: " + (totalPoints70.toFixed(1))  + "<br/>" +
    "Season: 1971-72 - " + "Games played: " + (adjustedGames71.toFixed(1)) + " - Goals: " + (adjustedGoals71.toFixed(1)) + " - Assists: " +  + (adjustedAssists71.toFixed(1)) 
    + " - " + " Points: " + (totalPoints71.toFixed(1))  + "<br/>" +
    "Season: 1972-73 - " + "Games played: " + (adjustedGames72.toFixed(1)) + " - Goals: " + (adjustedGoals72.toFixed(1)) + " - Assists: " +  + (adjustedAssists72.toFixed(1)) 
    + " - " + " Points: " + (totalPoints72.toFixed(1))  + "<br/>" +
    "Season: 1973-74 - " + "Games played: " + (adjustedGames73.toFixed(1)) + " - Goals: " + (adjustedGoals73.toFixed(1)) + " - Assists: " +  + (adjustedAssists73.toFixed(1)) 
    + " - " + " Points: " + (totalPoints73.toFixed(1))  + "<br/>" +
    "Season: 1974-75 - " + "Games played: " + (adjustedGames74.toFixed(1)) + " - Goals: " + (adjustedGoals74.toFixed(1)) + " - Assists: " +  + (adjustedAssists74.toFixed(1)) 
    + " - " + " Points: " + (totalPoints74.toFixed(1))  + "<br/>" +
    "Season: 1975-76 - " + "Games played: " + (adjustedGames75.toFixed(1)) + " - Goals: " + (adjustedGoals75.toFixed(1)) + " - Assists: " +  + (adjustedAssists75.toFixed(1)) 
    + " - " + " Points: " + (totalPoints75.toFixed(1))  + "<br/>" +
    "Season: 1976-77 - " + "Games played: " + (adjustedGames76.toFixed(1)) + " - Goals: " + (adjustedGoals76.toFixed(1)) + " - Assists: " +  + (adjustedAssists76.toFixed(1)) 
    + " - " + " Points: " + (totalPoints76.toFixed(1))  + "<br/>" +
    "Season: 1977-78 - " + "Games played: " + (adjustedGames77.toFixed(1)) + " - Goals: " + (adjustedGoals77.toFixed(1)) + " - Assists: " +  + (adjustedAssists77.toFixed(1)) 
    + " - " + " Points: " + (totalPoints77.toFixed(1))  + "<br/>" +
    "Season: 1978-79 - " + "Games played: " + (adjustedGames78.toFixed(1)) + " - Goals: " + (adjustedGoals78.toFixed(1)) + " - Assists: " +  + (adjustedAssists78.toFixed(1)) 
    + " - " + " Points: " + (totalPoints78.toFixed(1))  + "<br/>" +
    "Season: 1979-80 - " + "Games played: " + (adjustedGames79.toFixed(1)) + " - Goals: " + (adjustedGoals79.toFixed(1)) + " - Assists: " +  + (adjustedAssists79.toFixed(1)) 
    + " - " + " Points: " + (totalPoints79.toFixed(1))  + "<br/>" +
    "Season: 1980-81 - " + "Games played: " + (adjustedGames80.toFixed(1)) + " - Goals: " + (adjustedGoals80.toFixed(1)) + " - Assists: " +  + (adjustedAssists80.toFixed(1)) 
    + " - " + " Points: " + (totalPoints80.toFixed(1))  + "<br/>" +
    "Season: 1981-82 - " + "Games played: " + (adjustedGames81.toFixed(1)) + " - Goals: " + (adjustedGoals81.toFixed(1)) + " - Assists: " +  + (adjustedAssists81.toFixed(1)) 
    + " - " + " Points: " + (totalPoints81.toFixed(1))  + "<br/>" +
    "Season: 1982-83 - " + "Games played: " + (adjustedGames82.toFixed(1)) + " - Goals: " + (adjustedGoals82.toFixed(1)) + " - Assists: " +  + (adjustedAssists82.toFixed(1)) 
    + " - " + " Points: " + (totalPoints82.toFixed(1))  + "<br/>" +
    "Season: 1983-84 - " + "Games played: " + (adjustedGames83.toFixed(1)) + " - Goals: " + (adjustedGoals83.toFixed(1)) + " - Assists: " +  + (adjustedAssists83.toFixed(1)) 
    + " - " + " Points: " + (totalPoints83.toFixed(1))  + "<br/>" +
    "Season: 1984-85 - " + "Games played: " + (adjustedGames84.toFixed(1)) + " - Goals: " + (adjustedGoals84.toFixed(1)) + " - Assists: " +  + (adjustedAssists84.toFixed(1)) 
    + " - " + " Points: " + (totalPoints84.toFixed(1))  + "<br/>" +
    "Season: 1985-86 - " + "Games played: " + (adjustedGames85.toFixed(1)) + " - Goals: " + (adjustedGoals85.toFixed(1)) + " - Assists: " +  + (adjustedAssists85.toFixed(1)) 
    + " - " + " Points: " + (totalPoints85.toFixed(1))  + "<br/>" +
    "Season: 1986-87 - " + "Games played: " + (adjustedGames86.toFixed(1)) + " - Goals: " + (adjustedGoals86.toFixed(1)) + " - Assists: " +  + (adjustedAssists86.toFixed(1)) 
    + " - " + " Points: " + (totalPoints86.toFixed(1))  + "<br/>" +
    "Season: 1987-88 - " + "Games played: " + (adjustedGames87.toFixed(1)) + " - Goals: " + (adjustedGoals87.toFixed(1)) + " - Assists: " +  + (adjustedAssists87.toFixed(1)) 
    + " - " + " Points: " + (totalPoints87.toFixed(1))  + "<br/>" +
    "Season: 1988-89 - " + "Games played: " + (adjustedGames88.toFixed(1)) + " - Goals: " + (adjustedGoals88.toFixed(1)) + " - Assists: " +  + (adjustedAssists88.toFixed(1)) 
    + " - " + " Points: " + (totalPoints88.toFixed(1))  + "<br/>" +
    "Season: 1989-90 - " + "Games played: " + (adjustedGames90.toFixed(1)) + " - Goals: " + (adjustedGoals90.toFixed(1)) + " - Assists: " +  + (adjustedAssists90.toFixed(1)) 
    + " - " + " Points: " + (totalPoints90.toFixed(1))  + "<br/>" + 
    "Season: 1990-91 - " + "Games played: " + (adjustedGames91.toFixed(1)) + " - Goals: " + (adjustedGoals91.toFixed(1)) + " - Assists: " +  + (adjustedAssists91.toFixed(1)) 
    + " - " + " Points: " + (totalPoints91.toFixed(1))  + "<br/>" +
    "Season: 1991-92 - " + "Games played: " + (adjustedGames92.toFixed(1)) + " - Goals: " + (adjustedGoals92.toFixed(1)) + " - Assists: " +  + (adjustedAssists92.toFixed(1)) 
    + " - " + " Points: " + (totalPoints92.toFixed(1))  + "<br/>" +
    "Season: 1992-93 - " + "Games played: " + (adjustedGames93.toFixed(1)) + " - Goals: " + (adjustedGoals93.toFixed(1)) + " - Assists: " +  + (adjustedAssists93.toFixed(1)) 
    + " - " + " Points: " + (totalPoints93.toFixed(1))  + "<br/>" +
    "Season: 1993-94 - " + "Games played: " + (adjustedGames94.toFixed(1)) + " - Goals: " + (adjustedGoals94.toFixed(1)) + " - Assists: " +  + (adjustedAssists94.toFixed(1)) 
    + " - " + " Points: " + (totalPoints94.toFixed(1))  + "<br/>" +
    "Season: 1994-95 - " + "Games played: " + (adjustedGames95.toFixed(1)) + " - Goals: " + (adjustedGoals95.toFixed(1)) + " - Assists: " +  + (adjustedAssists95.toFixed(1)) 
    + " - " + " Points: " + (totalPoints95.toFixed(1))  + "<br/>" +
    "Season: 1995-96 - " + "Games played: " + (adjustedGames96.toFixed(1)) + " - Goals: " + (adjustedGoals96.toFixed(1)) + " - Assists: " +  + (adjustedAssists96.toFixed(1)) 
    + " - " + " Points: " + (totalPoints96.toFixed(1))  + "<br/>" +
    "Season: 1996-97 - " + "Games played: " + (adjustedGames97.toFixed(1)) + " - Goals: " + (adjustedGoals97.toFixed(1)) + " - Assists: " +  + (adjustedAssists97.toFixed(1)) 
    + " - " + " Points: " + (totalPoints97.toFixed(1))  + "<br/>" +
    "Season: 1997-98 - " + "Games played: " + (adjustedGames98.toFixed(1)) + " - Goals: " + (adjustedGoals98.toFixed(1)) + " - Assists: " +  + (adjustedAssists98.toFixed(1)) 
    + " - " + " Points: " + (totalPoints98.toFixed(1))  + "<br/>" +
    "Season: 1998-99 - " + "Games played: " + (adjustedGames99.toFixed(1)) + " - Goals: " + (adjustedGoals99.toFixed(1)) + " - Assists: " +  + (adjustedAssists99.toFixed(1)) 
    + " - " + " Points: " + (totalPoints99.toFixed(1))  + "<br/>" +
    "Season: 1999-00 - " + "Games played: " + (adjustedGames00.toFixed(1)) + " - Goals: " + (adjustedGoals00.toFixed(1)) + " - Assists: " +  + (adjustedAssists00.toFixed(1)) 
    + " - " + " Points: " + (totalPoints00.toFixed(1))  + "<br/>" +
    "Season: 2000-01 - " + "Games played: " + (adjustedGames01.toFixed(1)) + " - Goals: " + (adjustedGoals01.toFixed(1)) + " - Assists: " +  + (adjustedAssists01.toFixed(1)) 
    + " - " + " Points: " + (totalPoints01.toFixed(1))  + "<br/>" +
    "Season: 2001-02 - " + "Games played: " + (adjustedGames02.toFixed(1)) + " - Goals: " + (adjustedGoals02.toFixed(1)) + " - Assists: " +  + (adjustedAssists02.toFixed(1)) 
    + " - " + " Points: " + (totalPoints02.toFixed(1))  + "<br/>" +
    "Season: 2002-03 - " + "Games played: " + (adjustedGames03.toFixed(1)) + " - Goals: " + (adjustedGoals03.toFixed(1)) + " - Assists: " +  + (adjustedAssists03.toFixed(1)) 
    + " - " + " Points: " + (totalPoints03.toFixed(1))  + "<br/>" +
    "Season: 2003-04 - " + "Games played: " + (adjustedGames04.toFixed(1)) + " - Goals: " + (adjustedGoals04.toFixed(1)) + " - Assists: " +  + (adjustedAssists04.toFixed(1)) 
    + " - " + " Points: " + (totalPoints04.toFixed(1))  + "<br/>" +
    "Season: 2005-06 - " + "Games played: " + (adjustedGames06.toFixed(1)) + " - Goals: " + (adjustedGoals06.toFixed(1)) + " - Assists: " +  + (adjustedAssists06.toFixed(1)) 
    + " - " + " Points: " + (totalPoints06.toFixed(1))  + "<br/>" + 
    "Season: 2006-07 - " + "Games played: " + (adjustedGames07.toFixed(1)) + " - Goals: " + (adjustedGoals07.toFixed(1)) + " - Assists: " +  + (adjustedAssists07.toFixed(1)) 
    + " - " + " Points: " + (totalPoints07.toFixed(1))  + "<br/>" +
    "Season: 2007-08 - " + "Games played: " + (adjustedGames08.toFixed(1)) + " - Goals: " + (adjustedGoals08.toFixed(1)) + " - Assists: " +  + (adjustedAssists08.toFixed(1)) 
    + " - " + " Points: " + (totalPoints08.toFixed(1))  + "<br/>" +
    "Season: 2008-09 - " + "Games played: " + (adjustedGames09.toFixed(1)) + " - Goals: " + (adjustedGoals09.toFixed(1)) + " - Assists: " +  + (adjustedAssists09.toFixed(1)) 
    + " - " + " Points: " + (totalPoints09.toFixed(1))  + "<br/>" +
    "Season: 2009-10 - " + "Games played: " + (adjustedGames10.toFixed(1)) + " - Goals: " + (adjustedGoals10.toFixed(1)) + " - Assists: " +  + (adjustedAssists10.toFixed(1)) 
    + " - " + " Points: " + (totalPoints10.toFixed(1))  + "<br/>" +
    "Season: 2010-11 - " + "Games played: " + (adjustedGames11.toFixed(1)) + " - Goals: " + (adjustedGoals11.toFixed(1)) + " - Assists: " +  + (adjustedAssists11.toFixed(1)) 
    + " - " + " Points: " + (totalPoints11.toFixed(1))  + "<br/>" +
    "Season: 2011-12 - " + "Games played: " + (adjustedGames12.toFixed(1)) + " - Goals: " + (adjustedGoals12.toFixed(1)) + " - Assists: " +  + (adjustedAssists12.toFixed(1)) 
    + " - " + " Points: " + (totalPoints12.toFixed(1))  + "<br/>" +
    "Season: 2012-13 - " + "Games played: " + (adjustedGames13.toFixed(1)) + " - Goals: " + (adjustedGoals13.toFixed(1)) + " - Assists: " +  + (adjustedAssists13.toFixed(1)) 
    + " - " + " Points: " + (totalPoints13.toFixed(1))  + "<br/>" +
    "Season: 2013-14 - " + "Games played: " + (adjustedGames14.toFixed(1)) + " - Goals: " + (adjustedGoals14.toFixed(1)) + " - Assists: " +  + (adjustedAssists14.toFixed(1)) 
    + " - " + " Points: " + (totalPoints14.toFixed(1))  + "<br/>" +
    "Season: 2014-15 - " + "Games played: " + (adjustedGames15.toFixed(1)) + " - Goals: " + (adjustedGoals15.toFixed(1)) + " - Assists: " +  + (adjustedAssists15.toFixed(1)) 
    + " - " + " Points: " + (totalPoints15.toFixed(1))  + "<br/>" +
    "Season: 2015-16 - " + "Games played: " + (adjustedGames16.toFixed(1)) + " - Goals: " + (adjustedGoals16.toFixed(1)) + " - Assists: " +  + (adjustedAssists16.toFixed(1)) 
    + " - " + " Points: " + (totalPoints16.toFixed(1))  + "<br/>" +
    "Season: 2016-17 - " + "Games played: " + (adjustedGames17.toFixed(1)) + " - Goals: " + (adjustedGoals17.toFixed(1)) + " - Assists: " +  + (adjustedAssists17.toFixed(1)) 
    + " - " + " Points: " + (totalPoints17.toFixed(1))  + "<br/>" +
    "Season: 2017-18 - " + "Games played: " + (adjustedGames18.toFixed(1)) + " - Goals: " + (adjustedGoals18.toFixed(1)) + " - Assists: " +  + (adjustedAssists18.toFixed(1)) 
    + " - " + " Points: " + (totalPoints18.toFixed(1))  + "<br/>" +
    "Season: 2018-19 - " + "Games played: " + (adjustedGames19.toFixed(1)) + " - Goals: " + (adjustedGoals19.toFixed(1)) + " - Assists: " +  + (adjustedAssists19.toFixed(1)) 
    + " - " + " Points: " + (totalPoints19.toFixed(1))  + "<br/>" +
    "Season: 2019-20 - " + "Games played: " + (adjustedGames20.toFixed(1)) + " - Goals: " + (adjustedGoals20.toFixed(1)) + " - Assists: " +  + (adjustedAssists20.toFixed(1)) 
    + " - " + " Points: " + (totalPoints20.toFixed(1))  + "<br/>" +
    "Season: 2020-21 - " + "Games played: " + (adjustedGames21.toFixed(1)) + " - Goals: " + (adjustedGoals21.toFixed(1)) + " - Assists: " +  + (adjustedAssists21.toFixed(1)) 
    + " - " + " Points: " + (totalPoints21.toFixed(1))  + "<br/>" + "<br/>" + 
    "Season: 2021-22 - " + "Games played: " + (adjustedGames22.toFixed(1)) + " - Goals: " + (adjustedGoals22.toFixed(1)) + " - Assists: " +  + (adjustedAssists22.toFixed(1)) 
    + " - " + " Points: " + (totalPoints22.toFixed(1))  + "<br/>" + "<br/>" +
    "Season: 2022-23 - " + "Games played: " + (adjustedGames23.toFixed(1)) + " - Goals: " + (adjustedGoals23.toFixed(1)) + " - Assists: " +  + (adjustedAssists23.toFixed(1)) 
    + " - " + " Points: " + (totalPoints23.toFixed(1))  + "<br/>" + "<br/>" +
    "Season: 2023-24 - " + "Games played: " + (adjustedGames24.toFixed(1)) + " - Goals: " + (adjustedGoals24.toFixed(1)) + " - Assists: " +  + (adjustedAssists24.toFixed(1)) 
    + " - " + " Points: " + (totalPoints24.toFixed(1))  + "<br/>" + "<br/>" +

    "For a total of: Games played: " + (totaltotalGames.toFixed(1))  + " - Goals: " + (totaltotalGoals.toFixed(1)) + " - Assists: " + 
    (totaltotalAssists.toFixed(1)) + " - Points:  " + (totaltotalPoints.toFixed(1));
  }