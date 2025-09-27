"use strict";
function navFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "navmenu") {
    x.className += " responsive";
  } else {
    x.className = "navmenu";
  }
}

/* SEASON 1917-18 */
function myFunction() {
  var Goals17 = document.getElementById("myGoals17").value;
    var Assists17 = document.getElementById("myAssists17").value;
    var Games17 = document.getElementById("myGames17").value;
    var teams17 = 3;

    let adjustedGames17 = parseInt(Games17)/21*82;
    let adjustedGoals17 = parseInt(Goals17)/((210-parseInt(Goals17))/(teams17*3-1))*26.8;
    let adjustedAssists17 = parseInt(Assists17)/((76-parseInt(Assists17))/(teams17*3-1))*43.3145;
    let totalPoints17 = adjustedGoals17 + adjustedAssists17;

    /* SEASON 1918-19 */
    var Goals18 = document.getElementById("myGoals18").value;
    var Assists18 = document.getElementById("myAssists18").value;
    var Games18 = document.getElementById("myGames18").value;
    var teams18 = 3;

    let adjustedGames18 = parseInt(Games18)/18*82;
    let adjustedGoals18 = parseInt(Goals18)/((138-parseInt(Goals18))/(teams18*3-1))*26.8;
    let adjustedAssists18 = parseInt(Assists18)/((54-parseInt(Assists18))/(teams18*3-1))*43.3145;
    let totalPoints18 = adjustedGoals18 + adjustedAssists18; 

    /* SEASON 1919-20 */
    var Goals19 = document.getElementById("myGoals19").value;
    var Assists19 = document.getElementById("myAssists19").value;
    var Games19 = document.getElementById("myGames19").value;
    var teams19 = 4;

    let adjustedGames19 = parseInt(Games19)/24*82;
    let adjustedGoals19 = parseInt(Goals19)/((283-parseInt(Goals19))/(teams19*3-1))*26.8;
    let adjustedAssists19 = parseInt(Assists19)/((108-parseInt(Assists19))/(teams19*3-1))*43.3145;
    let totalPoints19 = adjustedGoals19 + adjustedAssists19;

    /* SEASON 1920-21 */
    var Goals20 = document.getElementById("myGoals20").value;
    var Assists20 = document.getElementById("myAssists20").value;
    var Games20 = document.getElementById("myGames20").value;
    var teams20 = 4;

    let adjustedGames20 = parseInt(Games20)/24*82;
    let adjustedGoals20 = parseInt(Goals20)/((264-parseInt(Goals20))/(teams20*3-1))*26.8;
    let adjustedAssists20 = parseInt(Assists20)/((99-parseInt(Assists20))/(teams20*3-1))*43.3145;
    let totalPoints20 = adjustedGoals20 + adjustedAssists20;

    /* SEASON 1921-22 */
    var Goals21 = document.getElementById("myGoals21").value;
    var Assists21 = document.getElementById("myAssists21").value;
    var Games21 = document.getElementById("myGames21").value;
    var teams21 = 4;

    let adjustedGames21 = parseInt(Games21)/24*82;
    let adjustedGoals21 = parseInt(Goals21)/((245-parseInt(Goals21))/(teams21*3-1))*26.8;
    let adjustedAssists21 = parseInt(Assists21)/((120-parseInt(Assists21))/(teams21*3-1))*43.3145;
    let totalPoints21 = adjustedGoals21 + adjustedAssists21;

    /* SEASON 1922-23 */
    var Goals22 = document.getElementById("myGoals22").value;
    var Assists22 = document.getElementById("myAssists22").value;
    var Games22 = document.getElementById("myGames22").value;
    var teams22 = 4;

    let adjustedGames22 = parseInt(Games22)/24*82;
    let adjustedGoals22 = parseInt(Goals22)/((199-parseInt(Goals22))/(teams22*3-1))*26.8;
    let adjustedAssists22 = parseInt(Assists22)/((118-parseInt(Assists22))/(teams22*3-1))*43.3145;
    let totalPoints22 = adjustedGoals22 + adjustedAssists22;

    /* SEASON 1923-24 */
    var Goals23 = document.getElementById("myGoals23").value;
    var Assists23 = document.getElementById("myAssists23").value;
    var Games23 = document.getElementById("myGames23").value;
    var teams23 = 4;

    let adjustedGames23 = parseInt(Games23)/24*82;
    let adjustedGoals23 = parseInt(Goals23)/((164-parseInt(Goals23))/(teams23*3-1))*26.8;
    let adjustedAssists23 = parseInt(Assists23)/((72-parseInt(Assists23))/(teams23*3-1))*43.3145;
    let totalPoints23 = adjustedGoals23 + adjustedAssists23;

    /* SEASON 1924-25 */
    var Goals24 = document.getElementById("myGoals24").value;
    var Assists24 = document.getElementById("myAssists24").value;
    var Games24 = document.getElementById("myGames24").value;
    var teams24 = 6;

    let adjustedGames24 = parseInt(Games24)/30*82;
    let adjustedGoals24 = parseInt(Goals24)/((325-parseInt(Goals24))/(teams24*3-1))*26.8;
    let adjustedAssists24 = parseInt(Assists24)/((189-parseInt(Assists24))/(teams24*3-1))*43.3145;
    let totalPoints24 = adjustedGoals24 + adjustedAssists24;

    /* SEASON 1925-26 */
    var Goals25 = document.getElementById("myGoals25").value;
    var Assists25 = document.getElementById("myAssists25").value;
    var Games25 = document.getElementById("myGames25").value;
    var teams25 = 7;

    let adjustedGames25 = parseInt(Games25)/36*82;
    let adjustedGoals25 = parseInt(Goals25)/((369-parseInt(Goals25))/(teams25*3-1))*26.8;
    let adjustedAssists25 = parseInt(Assists25)/((147-parseInt(Assists25))/(teams25*3-1))*43.3145;
    let totalPoints25 = adjustedGoals25 + adjustedAssists25;

    /* SEASON 1926-27 */
    var Goals26 = document.getElementById("myGoals26").value;
    var Assists26 = document.getElementById("myAssists26").value;
    var Games26 = document.getElementById("myGames26").value;
    var teams26 = 10;
    
    let adjustedGames26 = parseInt(Games26)/44*82;
    let adjustedGoals26 = parseInt(Goals26)/((477-parseInt(Goals26))/(teams26*3-1))*26.8;
    let adjustedAssists26 = parseInt(Assists26)/((215-parseInt(Assists26))/(teams26*3-1))*43.3145;
    let totalPoints26 = adjustedGoals26 + adjustedAssists26;

    /* SEASON 1927-28 */
    var Goals27 = document.getElementById("myGoals27").value;
    var Assists27 = document.getElementById("myAssists27").value;
    var Games27 = document.getElementById("myGames27").value;
    var teams27 = 10;

    let adjustedGames27 = parseInt(Games27)/44*82;
    let adjustedGoals27 = parseInt(Goals27)/((476-parseInt(Goals27))/(teams27*3-1))*26.8;
    let adjustedAssists27 = parseInt(Assists27)/((215-parseInt(Assists27))/(teams27*3-1))*43.3145;
    let totalPoints27 = adjustedGoals27 + adjustedAssists27;

    /* SEASON 1928-29 */
    var Goals28 = document.getElementById("myGoals28").value;
    var Assists28 = document.getElementById("myAssists28").value;
    var Games28 = document.getElementById("myGames28").value;
    var teams28 = 10;
    
    let adjustedGames28 = parseInt(Games28)/44*82;
    let adjustedGoals28 = parseInt(Goals28)/((371-parseInt(Goals28))/(teams28*3-1))*26.8;
    let adjustedAssists28 = parseInt(Assists28)/((218-parseInt(Assists28))/(teams28*3-1))*43.3145;
    let totalPoints28 = adjustedGoals28 + adjustedAssists28;

    /* SEASON 1929-30 */
    var Goals29 = document.getElementById("myGoals29").value;
    var Assists29 = document.getElementById("myAssists29").value;
    var Games29 = document.getElementById("myGames29").value;
    var teams29 = 10;

    let adjustedGames29 = parseInt(Games29)/44*82;
    let adjustedGoals29 = parseInt(Goals29)/((693-parseInt(Goals29))/(teams29*3-1))*26.8;
    let adjustedAssists29 = parseInt(Assists29)/((550-parseInt(Assists29))/(teams29*3-1))*43.3145;
    let totalPoints29 = adjustedGoals29 + adjustedAssists29;

    /* SEASON 1930-31 */
  var Goals31 = document.getElementById("myGoals31").value;
  var Assists31 = document.getElementById("myAssists31").value;
  var Games31 = document.getElementById("myGames31").value;
  var teams31 = 10;

  let adjustedGames31 = parseInt(Games31)/44*82;
  let adjustedGoals31 = parseInt(Goals31)/((539-parseInt(Goals31))/(teams31*3-1))*26.8;
  let adjustedAssists31 = parseInt(Assists31)/((449-parseInt(Assists31))/(teams31*3-1))*43.3145;
  let totalPoints31 = adjustedGoals31 + adjustedAssists31;

  /* SEASON 1931-32 */
  var Goals32 = document.getElementById("myGoals32").value;
  var Assists32 = document.getElementById("myAssists32").value;
  var Games32 = document.getElementById("myGames32").value;
  var teams32 = 8;

  let adjustedGames32 = parseInt(Games32)/48*82;
  let adjustedGoals32 = parseInt(Goals32)/((448-parseInt(Goals32))/(teams32*3-1))*26.8;
  let adjustedAssists32 = parseInt(Assists32)/((457-parseInt(Assists32))/(teams32*3-1))*43.3145;
  let totalPoints32 = adjustedGoals32 + adjustedAssists32; 

  /* SEASON 1932-33 */
  var Goals33 = document.getElementById("myGoals33").value;
  var Assists33 = document.getElementById("myAssists33").value;
  var Games33 = document.getElementById("myGames33").value;
  var teams33 = 9;

  let adjustedGames33 = parseInt(Games33)/48*82;
  let adjustedGoals33 = parseInt(Goals33)/((433-parseInt(Goals33))/(teams33*3-1))*26.8;
  let adjustedAssists33 = parseInt(Assists33)/((500-parseInt(Assists33))/(teams33*3-1))*43.3145;
  let totalPoints33 = adjustedGoals33 + adjustedAssists33;

  /* SEASON 1933-34 */
  var Goals34 = document.getElementById("myGoals34").value;
  var Assists34 = document.getElementById("myAssists34").value;
  var Games34 = document.getElementById("myGames34").value;
  var teams34 = 9;

  let adjustedGames34 = parseInt(Games34)/48*82;
  let adjustedGoals34 = parseInt(Goals34)/((454-parseInt(Goals34))/(teams34*3-1))*26.8;
  let adjustedAssists34 = parseInt(Assists34)/((455-parseInt(Assists34))/(teams34*3-1))*43.3145;
  let totalPoints34 = adjustedGoals34 + adjustedAssists34;

  /* SEASON 1934-35 */
  var Goals35 = document.getElementById("myGoals35").value;
  var Assists35 = document.getElementById("myAssists35").value;
  var Games35 = document.getElementById("myGames35").value;
  var teams35 = 9;

  let adjustedGames35 = parseInt(Games35)/48*82;
  let adjustedGoals35 = parseInt(Goals35)/((457-parseInt(Goals35))/(teams35*3-1))*26.8;
  let adjustedAssists35 = parseInt(Assists35)/((570-parseInt(Assists35))/(teams35*3-1))*43.3145;
  let totalPoints35 = adjustedGoals35 + adjustedAssists35;

  /* SEASON 1935-36 */
  var Goals36 = document.getElementById("myGoals36").value;
  var Assists36 = document.getElementById("myAssists36").value;
  var Games36 = document.getElementById("myGames36").value;
  var teams36 = 8;

  let adjustedGames36 = parseInt(Games36)/48*82;
  let adjustedGoals36 = parseInt(Goals36)/((374-parseInt(Goals36))/(teams36*3-1))*26.8;
  let adjustedAssists36 = parseInt(Assists36)/((433-parseInt(Assists36))/(teams36*3-1))*43.3145;
  let totalPoints36 = adjustedGoals36 + adjustedAssists36;

  /* SEASON 1936-37 */
  var Goals37 = document.getElementById("myGoals37").value;
  var Assists37 = document.getElementById("myAssists37").value;
  var Games37 = document.getElementById("myGames37").value;
  var teams37 = 8;

  let adjustedGames37 = parseInt(Games37)/48*82;
  let adjustedGoals37 = parseInt(Goals37)/((383-parseInt(Goals37))/(teams37*3-1))*26.8;
  let adjustedAssists37 = parseInt(Assists37)/((446-parseInt(Assists37))/(teams37*3-1))*43.3145;
  let totalPoints37 = adjustedGoals37 + adjustedAssists37;

  /* SEASON 1937-38 */
  var Goals38 = document.getElementById("myGoals38").value;
  var Assists38 = document.getElementById("myAssists38").value;
  var Games38 = document.getElementById("myGames38").value;
  var teams38 = 8;

  let adjustedGames38 = parseInt(Games38)/48*82;
  let adjustedGoals38 = parseInt(Goals38)/((400-parseInt(Goals38))/(teams38*3-1))*26.8;
  let adjustedAssists38 = parseInt(Assists38)/((477-parseInt(Assists38))/(teams38*3-1))*43.3145;
  let totalPoints38 = adjustedGoals38 + adjustedAssists38;

  /* SEASON 1938-39 */
  var Goals39 = document.getElementById("myGoals39").value;
  var Assists39 = document.getElementById("myAssists39").value;
  var Games39 = document.getElementById("myGames39").value;
  var teams39 = 7;

  let adjustedGames39 = parseInt(Games39)/48*82;
  let adjustedGoals39 = parseInt(Goals39)/((339-parseInt(Goals39))/(teams39*3-1))*26.8;
  let adjustedAssists39 = parseInt(Assists39)/((456-parseInt(Assists39))/(teams39*3-1))*43.3145;
  let totalPoints39 = adjustedGoals39 + adjustedAssists39;

  /* SEASON 1939-40 */
  var Goals40 = document.getElementById("myGoals40").value;
  var Assists40 = document.getElementById("myAssists40").value;
  var Games40 = document.getElementById("myGames40").value;
  var teams40 = 7;
  
  let adjustedGames40 = parseInt(Games40)/48*82;
  let adjustedGoals40 = parseInt(Goals40)/((327-parseInt(Goals40))/(teams40*3-1))*26.8;
  let adjustedAssists40 = parseInt(Assists40)/((416-parseInt(Assists40))/(teams40*3-1))*43.3145;
  let totalPoints40 = adjustedGoals40 + adjustedAssists40;

  /* SEASON 1940-41 */
  var Goals41 = document.getElementById("myGoals41").value;
  var Assists41 = document.getElementById("myAssists41").value;
  var Games41 = document.getElementById("myGames41").value;
  var teams41 = 7;

  let adjustedGames41 = parseInt(Games41)/48*82;
  let adjustedGoals41 = parseInt(Goals41)/((357-parseInt(Goals41))/(teams41*3-1))*26.8;
  let adjustedAssists41 = parseInt(Assists41)/((469-parseInt(Assists41))/(teams41*3-1))*43.3145;
  let totalPoints41 = adjustedGoals41 + adjustedAssists41;

  /* SEASON 1941-42 */
  var Goals42 = document.getElementById("myGoals42").value;
  var Assists42 = document.getElementById("myAssists42").value;
  var Games42 = document.getElementById("myGames42").value;
  var teams42 = 7;
  
  let adjustedGames42 = parseInt(Games42)/48*82;
  let adjustedGoals42 = parseInt(Goals42)/((373-parseInt(Goals42))/(teams42*3-1))*26.8;
  let adjustedAssists42 = parseInt(Assists42)/((503-parseInt(Assists42))/(teams42*3-1))*43.3145;
  let totalPoints42 = adjustedGoals42 + adjustedAssists42;

  /* SEASON 1942-43 */
  var Goals43 = document.getElementById("myGoals43").value;
  var Assists43 = document.getElementById("myAssists43").value;
  var Games43 = document.getElementById("myGames43").value;
  var teams43 = 6;

  let adjustedGames43 = parseInt(Games43)/50*82;
  let adjustedGoals43 = parseInt(Goals43)/((426-parseInt(Goals43))/(teams43*3-1))*26.8;
  let adjustedAssists43 = parseInt(Assists43)/((609-parseInt(Assists43))/(teams43*3-1))*43.3145;
  let totalPoints43 = adjustedGoals43 + adjustedAssists43;

  /* SEASON 1943-44 */
  var Goals44 = document.getElementById("myGoals44").value;
  var Assists44 = document.getElementById("myAssists44").value;
  var Games44 = document.getElementById("myGames44").value;
  var teams44 = 6;
  
  let adjustedGames44 = parseInt(Games44)/50*82;
  let adjustedGoals44 = parseInt(Goals44)/((501-parseInt(Goals44))/(teams44*3-1))*26.8;
  let adjustedAssists44 = parseInt(Assists44)/((667-parseInt(Assists44))/(teams44*3-1))*43.3145;
  let totalPoints44 = adjustedGoals44 + adjustedAssists44;

  /* SEASON 1944-45 */
  var Goals45 = document.getElementById("myGoals45").value;
  var Assists45 = document.getElementById("myAssists45").value;
  var Games45 = document.getElementById("myGames45").value;
  var teams45 = 6;

  let adjustedGames45 = parseInt(Games45)/50*82;
  let adjustedGoals45 = parseInt(Goals45)/((439-parseInt(Goals45))/(teams45*3-1))*26.8;
  let adjustedAssists45 = parseInt(Assists45)/((523-parseInt(Assists45))/(teams45*3-1))*43.3145;
  let totalPoints45 = adjustedGoals45 + adjustedAssists45;

    /* SEASON 1945-46 */
    var Goals46 = document.getElementById("myGoals46").value;
    var Assists46 = document.getElementById("myAssists46").value;
    var Games46 = document.getElementById("myGames46").value;
    var teams46 = 6;

    let adjustedGames46 = parseInt(Games46)/50*82;
    let adjustedGoals46 = parseInt(Goals46)/((393-parseInt(Goals46))/(teams46*3-1))*26.8;
    let adjustedAssists46 = parseInt(Assists46)/((406-parseInt(Assists46))/(teams46*3-1))*43.3145;
    let totalPoints46 = adjustedGoals46 + adjustedAssists46;

    /* SEASON 1946-47 */
    var Goals47 = document.getElementById("myGoals47").value;
    var Assists47 = document.getElementById("myAssists47").value;
    var Games47 = document.getElementById("myGames47").value;
    var teams47 = 6;

    let adjustedGames47 = parseInt(Games47)/60*82;
    let adjustedGoals47 = parseInt(Goals47)/((460-parseInt(Goals47))/(teams47*3-1))*26.8;
    let adjustedAssists47 = parseInt(Assists47)/((504-parseInt(Assists47))/(teams47*3-1))*43.3145;
    let totalPoints47 = adjustedGoals47 + adjustedAssists47; 

    /* SEASON 1947-48 */
    var Goals48 = document.getElementById("myGoals48").value;
    var Assists48 = document.getElementById("myAssists48").value;
    var Games48 = document.getElementById("myGames48").value;
    var teams48 = 6;

    let adjustedGames48 = parseInt(Games48)/60*82;
    let adjustedGoals48 = parseInt(Goals48)/((415-parseInt(Goals48))/(teams48*3-1))*26.8;
    let adjustedAssists48 = parseInt(Assists48)/((484-parseInt(Assists48))/(teams48*3-1))*43.3145;
    let totalPoints48 = adjustedGoals48 + adjustedAssists48;

    /* SEASON 1948-49 */
    var Goals49 = document.getElementById("myGoals49").value;
    var Assists49 = document.getElementById("myAssists49").value;
    var Games49 = document.getElementById("myGames49").value;
    var teams49 = 6;

    let adjustedGames49 = parseInt(Games49)/60*82;
    let adjustedGoals49 = parseInt(Goals49)/((395-parseInt(Goals49))/(teams49*3-1))*26.8;
    let adjustedAssists49 = parseInt(Assists49)/((440-parseInt(Assists49))/(teams49*3-1))*43.3145;
    let totalPoints49 = adjustedGoals49 + adjustedAssists49;

    /* SEASON 1949-50 */
    var Goals50 = document.getElementById("myGoals50").value;
    var Assists50 = document.getElementById("myAssists50").value;
    var Games50 = document.getElementById("myGames50").value;
    var teams50 = 6;

    let adjustedGames50 = parseInt(Games50)/70*82;
    let adjustedGoals50 = parseInt(Goals50)/((426-parseInt(Goals50))/(teams50*3-1))*26.8;
    let adjustedAssists50 = parseInt(Assists50)/((543-parseInt(Assists50))/(teams50*3-1))*43.3145;
    let totalPoints50 = adjustedGoals50 + adjustedAssists50;

    /* SEASON 1950-51 */
    var Goals51 = document.getElementById("myGoals51").value;
    var Assists51 = document.getElementById("myAssists51").value;
    var Games51 = document.getElementById("myGames51").value;
    var teams51 = 6;

    let adjustedGames51 = parseInt(Games51)/70*82;
    let adjustedGoals51 = parseInt(Goals51)/((431-parseInt(Goals51))/(teams51*3-1))*26.8;
    let adjustedAssists51 = parseInt(Assists51)/((530-parseInt(Assists51))/(teams51*3-1))*43.3145;
    let totalPoints51 = adjustedGoals51 + adjustedAssists51;

    /* SEASON 1951-52 */
    var Goals52 = document.getElementById("myGoals52").value;
    var Assists52 = document.getElementById("myAssists52").value;
    var Games52 = document.getElementById("myGames52").value;
    var teams52 = 6;

    let adjustedGames52 = parseInt(Games52)/70*82;
    let adjustedGoals52 = parseInt(Goals52)/((416-parseInt(Goals52))/(teams52*3-1))*26.8;
    let adjustedAssists52 = parseInt(Assists52)/((551-parseInt(Assists52))/(teams52*3-1))*43.3145;
    let totalPoints52 = adjustedGoals52 + adjustedAssists52;

    /* SEASON 1952-53 */
    var Goals53 = document.getElementById("myGoals53").value;
    var Assists53 = document.getElementById("myAssists53").value;
    var Games53 = document.getElementById("myGames53").value;
    var teams53 = 6;

    let adjustedGames53 = parseInt(Games53)/70*82;
    let adjustedGoals53 = parseInt(Goals53)/((413-parseInt(Goals53))/(teams53*3-1))*26.8;
    let adjustedAssists53 = parseInt(Assists53)/((493-parseInt(Assists53))/(teams53*3-1))*43.3145;
    let totalPoints53 = adjustedGoals53 + adjustedAssists53;

    /* SEASON 1953-54 */
    var Goals54 = document.getElementById("myGoals54").value;
    var Assists54 = document.getElementById("myAssists54").value;
    var Games54 = document.getElementById("myGames54").value;
    var teams54 = 6;

    let adjustedGames54 = parseInt(Games54)/70*82;
    let adjustedGoals54 = parseInt(Goals54)/((352-parseInt(Goals54))/(teams54*3-1))*26.8;
    let adjustedAssists54 = parseInt(Assists54)/((541-parseInt(Assists54))/(teams54*3-1))*43.3145;
    let totalPoints54 = adjustedGoals54 + adjustedAssists54;

    /* SEASON 1954-55 */
    var Goals55 = document.getElementById("myGoals55").value;
    var Assists55 = document.getElementById("myAssists55").value;
    var Games55 = document.getElementById("myGames55").value;
    var teams55 = 6;
    
    let adjustedGames55 = parseInt(Games55)/70*82;
    let adjustedGoals55 = parseInt(Goals55)/((407-parseInt(Goals55))/(teams55*3-1))*26.8;
    let adjustedAssists55 = parseInt(Assists55)/((595-parseInt(Assists55))/(teams55*3-1))*43.3145;
    let totalPoints55 = adjustedGoals55 + adjustedAssists55;

    /* SEASON 1955-56 */
    var Goals56 = document.getElementById("myGoals56").value;
    var Assists56 = document.getElementById("myAssists56").value;
    var Games56 = document.getElementById("myGames56").value;
    var teams56 = 6;

    let adjustedGames56 = parseInt(Games56)/70*82;
    let adjustedGoals56 = parseInt(Goals56)/((402-parseInt(Goals56))/(teams56*3-1))*26.8;
    let adjustedAssists56 = parseInt(Assists56)/((639-parseInt(Assists56))/(teams56*3-1))*43.3145;
    let totalPoints56 = adjustedGoals56 + adjustedAssists56;

    /* SEASON 1956-57 */
    var Goals57 = document.getElementById("myGoals57").value;
    var Assists57 = document.getElementById("myAssists57").value;
    var Games57 = document.getElementById("myGames57").value;
    var teams57 = 6;
    
    let adjustedGames57 = parseInt(Games57)/70*82;
    let adjustedGoals57 = parseInt(Goals57)/((429-parseInt(Goals57))/(teams57*3-1))*26.8;
    let adjustedAssists57 = parseInt(Assists57)/((627-parseInt(Assists57))/(teams57*3-1))*43.3145;
    let totalPoints57 = adjustedGoals57 + adjustedAssists57;

    /* SEASON 1957-58 */
    var Goals58 = document.getElementById("myGoals58").value;
    var Assists58 = document.getElementById("myAssists58").value;
    var Games58 = document.getElementById("myGames58").value;
    var teams58 = 6;

    let adjustedGames58 = parseInt(Games58)/70*82;
    let adjustedGoals58 = parseInt(Goals58)/((471-parseInt(Goals58))/(teams58*3-1))*26.8;
    let adjustedAssists58 = parseInt(Assists58)/((629-parseInt(Assists58))/(teams58*3-1))*43.3145;
    let totalPoints58 = adjustedGoals58 + adjustedAssists58;

    /* SEASON 1958-59 */
    var Goals59= document.getElementById("myGoals59").value;
    var Assists59= document.getElementById("myAssists59").value;
    var Games59 = document.getElementById("myGames59").value;
    var teams59 = 6;
    
    let adjustedGames59= parseInt(Games59)/70*82;
    let adjustedGoals59 = parseInt(Goals59)/((514-parseInt(Goals59))/(teams59*3-1))*26.8;
    let adjustedAssists59 = parseInt(Assists59)/((684-parseInt(Assists59))/(teams59*3-1))*43.3145;
    let totalPoints59 = adjustedGoals59 + adjustedAssists59;

    /* SEASON 1959-60 */
    var Goals60 = document.getElementById("myGoals60").value;
    var Assists60 = document.getElementById("myAssists60").value;
    var Games60 = document.getElementById("myGames60").value;
    var teams60 = 6;

    let adjustedGames60 = parseInt(Games60)/70*82;
    let adjustedGoals60 = parseInt(Goals60)/((473-parseInt(Goals60))/(teams60*3-1))*26.8;
    let adjustedAssists60 = parseInt(Assists60)/((690-parseInt(Assists60))/(teams60*3-1))*43.3145;
    let totalPoints60 = adjustedGoals60 + adjustedAssists60;

    /* SEASON 1960-61 */
    var Goals61 = document.getElementById("myGoals61").value;
    var Assists61 = document.getElementById("myAssists61").value;
    var Games61 = document.getElementById("myGames61").value;
    var teams61 = 6;
    
    let adjustedGames61 = parseInt(Games61)/70*82;
    let adjustedGoals61 = parseInt(Goals61)/((485-parseInt(Goals61))/(teams61*3-1))*26.8;
    let adjustedAssists61 = parseInt(Assists61)/((710-parseInt(Assists61))/(teams61*3-1))*43.3145;
    let totalPoints61 = adjustedGoals61 + adjustedAssists61;

    /* SEASON 1961-62 */
    var Goals62 = document.getElementById("myGoals62").value;
    var Assists62 = document.getElementById("myAssists62").value;
    var Games62 = document.getElementById("myGames62").value;
    var teams62 = 6;

    let adjustedGames62 = parseInt(Games62)/70*82;
    let adjustedGoals62 = parseInt(Goals62)/((484-parseInt(Goals62))/(teams62*3-1))*26.8;
    let adjustedAssists62 = parseInt(Assists62)/((691-parseInt(Assists62))/(teams62*3-1))*43.3145;
    let totalPoints62 = adjustedGoals62 + adjustedAssists62;

    /* SEASON 1962-63 */
    var Goals63 = document.getElementById("myGoals63").value;
    var Assists63 = document.getElementById("myAssists63").value;
    var Games63 = document.getElementById("myGames63").value;
    var teams63 = 6;
    
    let adjustedGames63 = parseInt(Games63)/70*82;
    let adjustedGoals63 = parseInt(Goals63)/((486-parseInt(Goals63))/(teams63*3-1))*26.8;
    let adjustedAssists63 = parseInt(Assists63)/((688-parseInt(Assists63))/(teams63*3-1))*43.3145;
    let totalPoints63 = adjustedGoals63 + adjustedAssists63;

    /* SEASON 1963-64 */
    var Goals64 = document.getElementById("myGoals64").value;
    var Assists64 = document.getElementById("myAssists64").value;
    var Games64 = document.getElementById("myGames64").value;
    var teams64 = 6;

    let adjustedGames64 = parseInt(Games64)/70*82;
    let adjustedGoals64 = parseInt(Goals64)/((454-parseInt(Goals64))/(teams64*3-1))*26.8;
    let adjustedAssists64 = parseInt(Assists64)/((713-parseInt(Assists64))/(teams64*3-1))*43.3145;
    let totalPoints64 = adjustedGoals64 + adjustedAssists64;

    /* SEASON 1964-65 */
    var Goals65 = document.getElementById("myGoals65").value;
    var Assists65 = document.getElementById("myAssists65").value;
    var Games65 = document.getElementById("myGames65").value;
    var teams65 = 6;
    
    let adjustedGames65 = parseInt(Games65)/70*82;
    let adjustedGoals65 = parseInt(Goals65)/((425-parseInt(Goals65))/(teams65*3-1))*26.8;
    let adjustedAssists65 = parseInt(Assists65)/((646-parseInt(Assists65))/(teams65*3-1))*43.3145;
    let totalPoints65 = adjustedGoals65 + adjustedAssists65;

    /* SEASON 1965-66 */
    var Goals66 = document.getElementById("myGoals66").value;
    var Assists66 = document.getElementById("myAssists66").value;
    var Games66 = document.getElementById("myGames66").value;
    var teams66 = 6;

    let adjustedGames66 = parseInt(Games66)/70*82;
    let adjustedGoals66 = parseInt(Goals66)/((507-parseInt(Goals66))/(teams66*3-1))*26.8;
    let adjustedAssists66 = parseInt(Assists66)/((658-parseInt(Assists66))/(teams66*3-1))*43.3145;
    let totalPoints66 = adjustedGoals66 + adjustedAssists66;

    /* SEASON 1966-67 */
    var Goals67 = document.getElementById("myGoals67").value;
    var Assists67 = document.getElementById("myAssists67").value;
    var Games67 = document.getElementById("myGames67").value;
    var teams67 = 6;
    
    let adjustedGames67 = parseInt(Games67)/70*82;
    let adjustedGoals67 = parseInt(Goals67)/((420-parseInt(Goals67))/(teams67*3-1))*26.8;
    let adjustedAssists67 = parseInt(Assists67)/((651-parseInt(Assists67))/(teams67*3-1))*43.3145;
    let totalPoints67 = adjustedGoals67 + adjustedAssists67;

    let totaltotalGames = adjustedGames17 + adjustedGames18 + adjustedGames19 + adjustedGames20 + adjustedGames21 + adjustedGames22 + adjustedGames23 + adjustedGames24 + 
    adjustedGames25 + adjustedGames26 + adjustedGames27 + adjustedGames28 + adjustedGames29 + adjustedGames31 + adjustedGames32 + adjustedGames33 + adjustedGames34 + adjustedGames35 + adjustedGames36 + adjustedGames37 + adjustedGames38 + 
    adjustedGames39 + adjustedGames40 + adjustedGames41 + adjustedGames42 + adjustedGames43 + adjustedGames44 + adjustedGames45 + adjustedGames46 + adjustedGames47 + adjustedGames48 + adjustedGames49 + adjustedGames50 + adjustedGames51 + adjustedGames52 + adjustedGames53 + 
    adjustedGames54 + adjustedGames55 + adjustedGames56 + adjustedGames57 + adjustedGames57 + adjustedGames59 + adjustedGames60 + adjustedGames61 + adjustedGames62 + 
    adjustedGames63 + adjustedGames64 + adjustedGames65 + adjustedGames66 + adjustedGames67;
    let totaltotalGoals = adjustedGoals17 + adjustedGoals18 + adjustedGoals19 + adjustedGoals20 + adjustedGoals21 + adjustedGoals22 + adjustedGoals23 + adjustedGoals24 + 
    adjustedGoals25 + adjustedGoals26 + adjustedGoals27 + adjustedGoals28 + adjustedGoals29 + adjustedGoals31 + adjustedGoals32 + adjustedGoals33 + adjustedGoals34 + adjustedGoals35 + adjustedGoals36 + adjustedGoals37 + adjustedGoals38 + 
    adjustedGoals39 + adjustedGoals40 + adjustedGoals41 + adjustedGoals42 + adjustedGoals43 +adjustedGoals44 + adjustedGoals45 + adjustedGoals46 + adjustedGoals47 + adjustedGoals48 + adjustedGoals49 + adjustedGoals50 + adjustedGoals51 + adjustedGoals52 + adjustedGoals53 + 
    adjustedGoals54 + adjustedGoals55 + adjustedGoals56 + adjustedGoals57 + adjustedGoals58 +adjustedGoals59 + adjustedGoals60 + adjustedGoals61 + adjustedGoals62 + 
    adjustedGoals63 + adjustedGoals64 + adjustedGoals65 + adjustedGoals66 + adjustedGoals67;
    let totaltotalAssists = adjustedAssists17 + adjustedAssists18 + adjustedAssists19 + adjustedAssists20 + adjustedAssists21 + adjustedAssists22 +adjustedAssists23 +
    adjustedAssists24 + adjustedAssists25 + adjustedAssists26 + adjustedAssists27 + adjustedAssists28 + adjustedAssists29 + adjustedAssists31 + adjustedAssists32 + adjustedAssists33 + adjustedAssists34 + adjustedAssists35 + adjustedAssists36 +adjustedAssists37 +
    adjustedAssists38 + adjustedAssists39 + adjustedAssists40 + adjustedAssists41 + adjustedAssists42 + adjustedAssists43 + adjustedAssists44 + adjustedAssists45 + adjustedAssists46 + adjustedAssists47 + adjustedAssists48 + adjustedAssists49 + adjustedAssists50 + adjustedAssists51 +adjustedAssists52 +
    adjustedAssists53 + adjustedAssists54 + adjustedAssists55 + adjustedAssists56 + adjustedAssists57 + adjustedAssists58 + adjustedAssists59 + adjustedAssists60 + adjustedAssists61 + 
    adjustedAssists62 + adjustedAssists63 + adjustedAssists64 + adjustedAssists65 + adjustedAssists66 + adjustedAssists67;
    let totaltotalPoints = totaltotalGoals + totaltotalAssists;

    document.getElementById("demo").innerHTML = 
     name.bold() + "<br/>"  + 
    "Season: 1917-18 - " + "Games played: " + (adjustedGames17.toFixed(1)) + " - Goals: " + (adjustedGoals17.toFixed(1)) + " - Assists: " +  + (adjustedAssists17.toFixed(1)) 
    + " - " + " Points: " + (totalPoints17.toFixed(1))  + "<br/>" + 
    "Season: 1918-19 - " + "Games played: " + (adjustedGames18.toFixed(1)) + " - Goals: " + (adjustedGoals18.toFixed(1)) + " - Assists: " +  + (adjustedAssists18.toFixed(1)) 
    + " - " + " Points: " + (totalPoints18.toFixed(1))  + "<br/>" +
    "Season: 1919-20 - " + "Games played: " + (adjustedGames19.toFixed(1)) + " - Goals: " + (adjustedGoals19.toFixed(1)) + " - Assists: " +  + (adjustedAssists19.toFixed(1)) 
    + " - " + " Points: " + (totalPoints19.toFixed(1))  + "<br/>" +
    "Season: 1920-21 - " + "Games played: " + (adjustedGames20.toFixed(1)) + " - Goals: " + (adjustedGoals20.toFixed(1)) + " - Assists: " +  + (adjustedAssists20.toFixed(1)) 
    + " - " + " Points: " + (totalPoints20.toFixed(1))  + "<br/>" +
    "Season: 1921-22 - " + "Games played: " + (adjustedGames21.toFixed(1)) + " - Goals: " + (adjustedGoals21.toFixed(1)) + " - Assists: " +  + (adjustedAssists21.toFixed(1)) 
    + " - " + " Points: " + (totalPoints21.toFixed(1))  + "<br/>" +
    "Season: 1922-23 - " + "Games played: " + (adjustedGames22.toFixed(1)) + " - Goals: " + (adjustedGoals22.toFixed(1)) + " - Assists: " +  + (adjustedAssists22.toFixed(1)) 
    + " - " + " Points: " + (totalPoints22.toFixed(1))  + "<br/>" +
    "Season: 1923-24 - " + "Games played: " + (adjustedGames23.toFixed(1)) + " - Goals: " + (adjustedGoals23.toFixed(1)) + " - Assists: " +  + (adjustedAssists23.toFixed(1)) 
    + " - " + " Points: " + (totalPoints23.toFixed(1))  + "<br/>" +
    "Season: 1924-25 - " + "Games played: " + (adjustedGames24.toFixed(1)) + " - Goals: " + (adjustedGoals24.toFixed(1)) + " - Assists: " +  + (adjustedAssists24.toFixed(1)) 
    + " - " + " Points: " + (totalPoints24.toFixed(1))  + "<br/>" +
    "Season: 1925-26 - " + "Games played: " + (adjustedGames25.toFixed(1)) + " - Goals: " + (adjustedGoals25.toFixed(1)) + " - Assists: " +  + (adjustedAssists25.toFixed(1)) 
    + " - " + " Points: " + (totalPoints25.toFixed(1))  + "<br/>" +
    "Season: 1926-27 - " + "Games played: " + (adjustedGames26.toFixed(1)) + " - Goals: " + (adjustedGoals26.toFixed(1)) + " - Assists: " +  + (adjustedAssists26.toFixed(1)) 
    + " - " + " Points: " + (totalPoints26.toFixed(1))  + "<br/>" +
    "Season: 1927-28 - " + "Games played: " + (adjustedGames27.toFixed(1)) + " - Goals: " + (adjustedGoals27.toFixed(1)) + " - Assists: " +  + (adjustedAssists27.toFixed(1)) 
    + " - " + " Points: " + (totalPoints27.toFixed(1))  + "<br/>" +
    "Season: 1928-29 - " + "Games played: " + (adjustedGames28.toFixed(1)) + " - Goals: " + (adjustedGoals28.toFixed(1)) + " - Assists: " +  + (adjustedAssists28.toFixed(1)) 
    + " - " + " Points: " + (totalPoints28.toFixed(1))  + "<br/>" +
    "Season: 1929-30 - " + "Games played: " + (adjustedGames29.toFixed(1)) + " - Goals: " + (adjustedGoals29.toFixed(1)) + " - Assists: " +  + (adjustedAssists29.toFixed(1)) 
    + " - " + " Points: " + (totalPoints29.toFixed(1))  + "<br/>" +
     "Season: 1930-31 - " + "Games played: " + (adjustedGames31.toFixed(1)) + " - Goals: " + (adjustedGoals31.toFixed(1)) + " - Assists: " +  + (adjustedAssists31.toFixed(1)) 
    + " - " + " Points: " + (totalPoints31.toFixed(1))  + "<br/>" + 
    "Season: 1931-32 - " + "Games played: " + (adjustedGames32.toFixed(1)) + " - Goals: " + (adjustedGoals32.toFixed(1)) + " - Assists: " +  + (adjustedAssists32.toFixed(1)) 
    + " - " + " Points: " + (totalPoints32.toFixed(1))  + "<br/>" +
    "Season: 1932-33 - " + "Games played: " + (adjustedGames33.toFixed(1)) + " - Goals: " + (adjustedGoals33.toFixed(1)) + " - Assists: " +  + (adjustedAssists33.toFixed(1)) 
    + " - " + " Points: " + (totalPoints33.toFixed(1))  + "<br/>" +
    "Season: 1933-34 - " + "Games played: " + (adjustedGames34.toFixed(1)) + " - Goals: " + (adjustedGoals34.toFixed(1)) + " - Assists: " +  + (adjustedAssists34.toFixed(1)) 
    + " - " + " Points: " + (totalPoints34.toFixed(1))  + "<br/>" +
    "Season: 1934-35 - " + "Games played: " + (adjustedGames35.toFixed(1)) + " - Goals: " + (adjustedGoals35.toFixed(1)) + " - Assists: " +  + (adjustedAssists35.toFixed(1)) 
    + " - " + " Points: " + (totalPoints35.toFixed(1))  + "<br/>" +
    "Season: 1935-36 - " + "Games played: " + (adjustedGames36.toFixed(1)) + " - Goals: " + (adjustedGoals36.toFixed(1)) + " - Assists: " +  + (adjustedAssists36.toFixed(1)) 
    + " - " + " Points: " + (totalPoints36.toFixed(1))  + "<br/>" +
    "Season: 1936-37 - " + "Games played: " + (adjustedGames37.toFixed(1)) + " - Goals: " + (adjustedGoals37.toFixed(1)) + " - Assists: " +  + (adjustedAssists37.toFixed(1)) 
    + " - " + " Points: " + (totalPoints37.toFixed(1))  + "<br/>" +
    "Season: 1937-38 - " + "Games played: " + (adjustedGames38.toFixed(1)) + " - Goals: " + (adjustedGoals38.toFixed(1)) + " - Assists: " +  + (adjustedAssists38.toFixed(1)) 
    + " - " + " Points: " + (totalPoints38.toFixed(1))  + "<br/>" +
    "Season: 1938-39 - " + "Games played: " + (adjustedGames39.toFixed(1)) + " - Goals: " + (adjustedGoals39.toFixed(1)) + " - Assists: " +  + (adjustedAssists39.toFixed(1)) 
    + " - " + " Points: " + (totalPoints39.toFixed(1))  + "<br/>" +
    "Season: 1939-40 - " + "Games played: " + (adjustedGames40.toFixed(1)) + " - Goals: " + (adjustedGoals40.toFixed(1)) + " - Assists: " +  + (adjustedAssists40.toFixed(1)) 
    + " - " + " Points: " + (totalPoints40.toFixed(1))  + "<br/>" +
    "Season: 1940-41 - " + "Games played: " + (adjustedGames41.toFixed(1)) + " - Goals: " + (adjustedGoals41.toFixed(1)) + " - Assists: " +  + (adjustedAssists41.toFixed(1)) 
    + " - " + " Points: " + (totalPoints41.toFixed(1))  + "<br/>" +
    "Season: 1941-42 - " + "Games played: " + (adjustedGames42.toFixed(1)) + " - Goals: " + (adjustedGoals42.toFixed(1)) + " - Assists: " +  + (adjustedAssists42.toFixed(1)) 
    + " - " + " Points: " + (totalPoints42.toFixed(1))  + "<br/>" +
    "Season: 1942-43 - " + "Games played: " + (adjustedGames43.toFixed(1)) + " - Goals: " + (adjustedGoals43.toFixed(1)) + " - Assists: " +  + (adjustedAssists43.toFixed(1)) 
    + " - " + " Points: " + (totalPoints43.toFixed(1))  + "<br/>" +
    "Season: 1943-44 - " + "Games played: " + (adjustedGames44.toFixed(1)) + " - Goals: " + (adjustedGoals44.toFixed(1)) + " - Assists: " +  + (adjustedAssists44.toFixed(1)) 
    + " - " + " Points: " + (totalPoints44.toFixed(1))  + "<br/>" +
    "Season: 1944-45 - " + "Games played: " + (adjustedGames45.toFixed(1)) + " - Goals: " + (adjustedGoals45.toFixed(1)) + " - Assists: " +  + (adjustedAssists45.toFixed(1)) 
    + " - " + " Points: " + (totalPoints45.toFixed(1))  + "<br/>" +
    "Season: 1945-46 - " + "Games played: " + (adjustedGames46.toFixed(1)) + " - Goals: " + (adjustedGoals46.toFixed(1)) + " - Assists: " +  + (adjustedAssists46.toFixed(1)) 
    + " - " + " Points: " + (totalPoints46.toFixed(1))  + "<br/>" + 
    "Season: 1946-47 - " + "Games played: " + (adjustedGames47.toFixed(1)) + " - Goals: " + (adjustedGoals47.toFixed(1)) + " - Assists: " +  + (adjustedAssists47.toFixed(1)) 
    + " - " + " Points: " + (totalPoints47.toFixed(1))  + "<br/>" +
    "Season: 1947-48 - " + "Games played: " + (adjustedGames48.toFixed(1)) + " - Goals: " + (adjustedGoals48.toFixed(1)) + " - Assists: " +  + (adjustedAssists48.toFixed(1)) 
    + " - " + " Points: " + (totalPoints48.toFixed(1))  + "<br/>" +
    "Season: 1948-49 - " + "Games played: " + (adjustedGames49.toFixed(1)) + " - Goals: " + (adjustedGoals49.toFixed(1)) + " - Assists: " +  + (adjustedAssists49.toFixed(1)) 
    + " - " + " Points: " + (totalPoints49.toFixed(1))  + "<br/>" +
    "Season: 1949-50 - " + "Games played: " + (adjustedGames50.toFixed(1)) + " - Goals: " + (adjustedGoals50.toFixed(1)) + " - Assists: " +  + (adjustedAssists50.toFixed(1)) 
    + " - " + " Points: " + (totalPoints50.toFixed(1))  + "<br/>" +
    "Season: 1950-51 - " + "Games played: " + (adjustedGames51.toFixed(1)) + " - Goals: " + (adjustedGoals51.toFixed(1)) + " - Assists: " +  + (adjustedAssists51.toFixed(1)) 
    + " - " + " Points: " + (totalPoints51.toFixed(1))  + "<br/>" +
    "Season: 1951-52 - " + "Games played: " + (adjustedGames52.toFixed(1)) + " - Goals: " + (adjustedGoals52.toFixed(1)) + " - Assists: " +  + (adjustedAssists52.toFixed(1)) 
    + " - " + " Points: " + (totalPoints52.toFixed(1))  + "<br/>" +
    "Season: 1952-53 - " + "Games played: " + (adjustedGames53.toFixed(1)) + " - Goals: " + (adjustedGoals53.toFixed(1)) + " - Assists: " +  + (adjustedAssists53.toFixed(1)) 
    + " - " + " Points: " + (totalPoints53.toFixed(1))  + "<br/>" +
    "Season: 1953-54 - " + "Games played: " + (adjustedGames54.toFixed(1)) + " - Goals: " + (adjustedGoals54.toFixed(1)) + " - Assists: " +  + (adjustedAssists54.toFixed(1)) 
    + " - " + " Points: " + (totalPoints54.toFixed(1))  + "<br/>" +
    "Season: 1954-55 - " + "Games played: " + (adjustedGames55.toFixed(1)) + " - Goals: " + (adjustedGoals55.toFixed(1)) + " - Assists: " +  + (adjustedAssists55.toFixed(1)) 
    + " - " + " Points: " + (totalPoints55.toFixed(1))  + "<br/>" +
    "Season: 1955-56 - " + "Games played: " + (adjustedGames56.toFixed(1)) + " - Goals: " + (adjustedGoals56.toFixed(1)) + " - Assists: " +  + (adjustedAssists56.toFixed(1)) 
    + " - " + " Points: " + (totalPoints56.toFixed(1))  + "<br/>" +
    "Season: 1956-57 - " + "Games played: " + (adjustedGames57.toFixed(1)) + " - Goals: " + (adjustedGoals57.toFixed(1)) + " - Assists: " +  + (adjustedAssists57.toFixed(1)) 
    + " - " + " Points: " + (totalPoints57.toFixed(1))  + "<br/>" +
    "Season: 1957-58 - " + "Games played: " + (adjustedGames58.toFixed(1)) + " - Goals: " + (adjustedGoals58.toFixed(1)) + " - Assists: " +  + (adjustedAssists58.toFixed(1)) 
    + " - " + " Points: " + (totalPoints58.toFixed(1))  + "<br/>" +
    "Season: 1958-59 - " + "Games played: " + (adjustedGames59.toFixed(1)) + " - Goals: " + (adjustedGoals59.toFixed(1)) + " - Assists: " +  + (adjustedAssists59.toFixed(1)) 
    + " - " + " Points: " + (totalPoints59.toFixed(1))  + "<br/>" +
    "Season: 1959-60 - " + "Games played: " + (adjustedGames60.toFixed(1)) + " - Goals: " + (adjustedGoals60.toFixed(1)) + " - Assists: " +  + (adjustedAssists60.toFixed(1)) 
    + " - " + " Points: " + (totalPoints60.toFixed(1))  + "<br/>" +
    "Season: 1960-61 - " + "Games played: " + (adjustedGames61.toFixed(1)) + " - Goals: " + (adjustedGoals61.toFixed(1)) + " - Assists: " +  + (adjustedAssists61.toFixed(1)) 
    + " - " + " Points: " + (totalPoints61.toFixed(1))  + "<br/>" +
    "Season: 1961-62 - " + "Games played: " + (adjustedGames62.toFixed(1)) + " - Goals: " + (adjustedGoals62.toFixed(1)) + " - Assists: " +  + (adjustedAssists62.toFixed(1)) 
    + " - " + " Points: " + (totalPoints62.toFixed(1))  + "<br/>" +
    "Season: 1962-63 - " + "Games played: " + (adjustedGames63.toFixed(1)) + " - Goals: " + (adjustedGoals63.toFixed(1)) + " - Assists: " +  + (adjustedAssists63.toFixed(1)) 
    + " - " + " Points: " + (totalPoints63.toFixed(1))  + "<br/>" +
    "Season: 1963-64 - " + "Games played: " + (adjustedGames64.toFixed(1)) + " - Goals: " + (adjustedGoals64.toFixed(1)) + " - Assists: " +  + (adjustedAssists64.toFixed(1)) 
    + " - " + " Points: " + (totalPoints64.toFixed(1))  + "<br/>" +
    "Season: 1964-65 - " + "Games played: " + (adjustedGames65.toFixed(1)) + " - Goals: " + (adjustedGoals65.toFixed(1)) + " - Assists: " +  + (adjustedAssists65.toFixed(1)) 
    + " - " + " Points: " + (totalPoints65.toFixed(1))  + "<br/>" +
    "Season: 1965-66 - " + "Games played: " + (adjustedGames66.toFixed(1)) + " - Goals: " + (adjustedGoals66.toFixed(1)) + " - Assists: " +  + (adjustedAssists66.toFixed(1)) 
    + " - " + " Points: " + (totalPoints66.toFixed(1))  + "<br/>" +
    "Season: 1966-67 - " + "Games played: " + (adjustedGames67.toFixed(1)) + " - Goals: " + (adjustedGoals67.toFixed(1)) + " - Assists: " +  + (adjustedAssists67.toFixed(1)) 
    + " - " + " Points: " + (totalPoints67.toFixed(1))  + "<br/>" + "<br/>" + 

    "For a total of: Games played: " + (totaltotalGames.toFixed(1))  + " - Goals: " + (totaltotalGoals.toFixed(1)) + " - Assists: " + 
    (totaltotalAssists.toFixed(1)) + " - Points:  " + (totaltotalPoints.toFixed(1));
  }