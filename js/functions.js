
var state = 1;
var temp_ant;

var d = new Date();
var hours = d.getHours();
  if (hours.toString().length < 2) {
    hours = "0" + hours;
  }

setTimeout(function () {
  $('.messages').append('<div class="p1 loader" style="width: 30%"><div class="text"><img src="img/loader.GIF"></div></div>');
  scroll();
}, 1000);

var mess = ["Ich bin auf einer Raumstation gefangen und habe es anscheinend endlich geschafft Kontakt zu jemandem auf Erde aufzunehmen. Arbeitest du bei der NASA?",
            "Okay, sehr gut. Du musst mir helfen. ISRO, die Organisation, die mich hier rauf geschickt hat wurde soeben von Hackern angegriffen. Ihr ganzes Netzwerk ist ausgefallen.",
            "Schade.... Wer bist du?",
            "Nein. Hier scheint gar nichts mehr zu funktionieren. Im Moment habe ich noch 36% 0² in meinem Raumanzug.. In dem Raum, indem ich mich befinde gibt es keine Atemluft. Es scheint als hätten die Hacker die Luft abgelasen. Und dieser unkontrollierte Luftstoß hat die Raumstation vom Kurs abgebracht..",
            "Ich weiß es nicht. Ich habe jetzt nicht genug Zeit um mich woanders hin zu verbinden. Du musst mir helfen. Bitte!",
            "Webdeveloper oder was? Vielleicht kannst du mir wirklich helfen..  Weißt du wie ich einen Computer über das BIOS resetten kann? Dann könnte ich vielleicht so die Luftschleuse nach draußen öffnen..",
            "Es gibt eine Schleuse, aber da die Elektronik ausgefallen ist, habe ich keinen Motor der diese öffnet",
            "Nicht viel. Es gibt einen TORX-6 Schraubenzieher, einen Staubsauger und einen RXTv420.",
            "Bitte! Es geht um Leben und Tod!",
            "Ich bräuchte irgendwelche Hilfsmittel.",
            "Ja.. Bis auf die Panzerglas-Scheibe..",
            "Das wird schwierig. Ich habe schon die letzten Reserven bei mir.",
            "Verdammt. Egal, du musst mir helfen",
            "Moment.. Ich glaube es funktioniert! Haha! JA, ich habe Kontrolle über die Luftschleuse! Soll ich gleich raus? Ich hab nicht mehr viel Sauerstoff..",
            "",
            "Ja, ich glaube das sollte funktionieren. Das Signal meines Notfall-Handy's läuft über den Astra-Sattelit. Damit hat man hier auch bei schlechtem Wetter immer Empfang..",
            "Es ist so still.. Und die restliche Luft in meinem Raumanzug riecht nach Metall.. Aber wahnsinnig schön hier oben..",
            "#nofilter",
            "Zum Zentral-PC, der ist nicht weit von hier.",
            "Achso ja, das hätte ich vielleicht erwähnen sollen.",
            "",
            "Das ist ein bisschen kompliziert. Ich wurde hier von der ISRO (Indische Raumfahrtorganisation) her gebracht.. Es ist eigentlich Top Secret, aber ich glaube in meiner aktuellen Situation sollte ich vielleicht alle Infos mit dir Teilen.. Zwei Köpfe sind besser als einer. Also.. kurz gesagt: Der erste Kontakt steht bevor. Indische Wissenschaftler haben es geschafft mit einem Strahlenbeschleuniger Kontakt mit Etwas aufzunehmen. Es oder Sie sind seit mehreren Jahren auf den Weg hier her. Sie kommen aus 'Cosmos Redshift 7'. Ich glaube den paranoiden Anführeren unserer Welt war es sehr wichtig eine friedliche Begegnung zu ermöglichen. Darum bin ich hier. ",
            "Wir konnten ihre Ankunft nur auf ein Zeitfenster von 4 Tagen berechnen. Sie könnten jeden Moment ankommen, und hier läuft gerade alles schief..",
            "Darüber hab ich noch nicht nachgedacht.. Du meinst die Aliens könnten hier alles lahm gelegt haben?",
            "",
            "Hilfe, mein Raumanzug hat ein Loch!",
            "Ich bewege mich gerade langsam die Außenhülle der Raumstation entlang. Ich muss extrem aufpassen nicht den Halt zu verlieren.. Ich müsste gleich bei der nächsten Raumschleuse sein.. Warte mal kurz! Leise!",
            "Ok, bin wieder da.Da war gerade irgend was. Es war glänzend Schwarz.",
            "Verdammt, sie haben mich gehörlkjhvcx",
            "Okay ich bin drin.. Oh.. Verdammt.. Hier ist alle voller Gedärme.. Schaut so aus als hätte er seinen Raumanzug nicht schnell genug angezogen..",
            "Verdammt, mein Anzug brennt!!!",
            "So makaber es ist.. Ja. Ich nehme mir seine Sauerstofftanks.",
            " ",
            "Glaubst du dass kann ich jetzt an den Gedärmen erkennen?",
            " ",
            "Meine Sauerstoff-Reserven sind jetzt zumindest wieder bei 42%. Ich glaub ich kann von hier aus zur Haupt-Schleuse laufen. Dort war die erste Begegnung geplant, wenn nicht alles ausgefallen wäre. Soll ich weiter oder mich lieber noch ein bisschen Umschauen?",
            "Okay.. Hier scheint eine Art Satellit in die Außenwand eingebaut zu sein.. Zwei orange Knöpfe leuchten noch. Es scheint russisch zu sein.. Hier steht 'Прямой эфир' und ' '. Was soll ich drücken?",
            "Ok. Ich bin mir nicht sicher ob das jetzt etwas ausgelöst hat. Aber jetzt leuchten keine Knöpfe mehr. Was jetzt? Hier gibt es eine Luke, zum 'Punkt der ersten Begegnung' oder zum 'Maschinenraum'?",
            "Hm. Hier ist es ziemlich dunkel. Ich höre aber noch ein leises Surren. Hier ist es feucht.. Moment.. Wasser? Das ist nicht gut!",
            "Oh nein.. Ich glaube das ist nicht gut...  hier steht 'Ад наступит'....   'ад' bedeutet Hölle!",
            "OK, hör mal, ich bin gerade jemandem begegnet. Sein name ist 'Kek'. Er spricht Englisch mit Arabischem Akzent. Ich hätte nicht erwartet hier noch jemandem zu Begegnen. Er sieht aus, als ob er schon sehr lange in der Schwerelosigkeit lebt. Trotzdem ist er ganz klar ein Mensch. Und hier kommt das Merkwürdige: Er gibt sich als Botschafter des المملكة المصرية aus. Er sagt er sei Teil eines Todes-Heimats-Komandos. Er hat mir stichhaltig anhand von wissenschaftlichen Fakten erklärt, dass die alten Ägypter die Erde schon vor tausenden von Jahren aufgrund einer Diktator-AI verlassen hatten. Sie haben für mehr als 3.000 Jahre in der 'Cosmos Redshift 7' Galaxie gelebt, und dort eine 3 Klassen Gesellschaft mit vielen Pyramiden etabliert. Seitdem Abtreibung bestraft wird leiden alle bewohnbaren Planeten an Überbevölkerung, und nun sei es zeit, wieder nach Hause zu kommen. Einen homo-sapiens vernichtenden Todestrahl haben sie auch dabei. Und jetzt?",
            " ",
            "Er sagt: Dieser Planet ist nicht groß genug für uns beide.",
            "Die  المملكة المصرية können nicht nachvollziehen was wir auf der Erde veranstaltet haben, seit sie Weg sind. Besonders die Deutschen und Amerikaner hätten sich Fehlverhalten. Er bietet an nur Amerikaner und Deutsche zu töten.",
            "Kek sagt, dass das was sie die  المملكة المصرية am meisten aufregt, die hässliche Architektur von uns sei. Besonders alle vertikalen parallelen seien eine Schande. Ich weiß nicht genau was er meint.",
            "Ich glaube das hat einen interplanetaren Krieg ausgelöst...",
            "Ich glaube sie haben zuerst auf Dresden gezielt.. Tut mir leid.",
            "Die Idee findet 'Kek' ganz gut. Ich soll ihm in einen anderen Raum foglen.",
            "Hier hat ein riesiges schwarzes Tarnschiff angedockt! Sie waren schon die ganze Zeit über hier, und haben mich getestet.",
            "Kek insistiert.",
            "Da hast du Recht. Ägypter passen Design-Mäßig einfach gut in den Weltraum. Vor mir sitzt 'Snofru' der Pharao! Er sollte seit 4.500 Jahren Tod sein.. Verrückt oder? ",
            "Das fand er nicht so lustig.. ",
            " "
           ];
var ans = [
            "Ja",
            "Nein",
            "Aber das Netzwerk bei dir auf der Station funktioniert noch?",
            "Ähm, in Wirklichkeit bin ich gar nicht bei der NASA.",
            "Ich bin nur ein random Dude. Wie kommt es, dass du deine Nachrichten ausgerechnet bei mir ankommen?",
            "Ich bin zwar nur ein random Dude, aber ich kenne mich ganz gut mit Technik aus.",
            "Gibt es einen Weg nach Draußen?",
            "Was siehst du um dich? Könntest du irgendetwas basteln?",
            "Wie kann ich helfen?",
            "Ehrlich gesagt wollte ich jetzt gerade Feierabend machen...",
            "Guckmal nach Sauerstoff!",
            "Versuch mal den PC zu starten und drück F13 beim booten. Sollte NASA-Standart sein.",
            "Kannst du sie manuell öffnen?",
            "Ist das der einzige Weg nach draußen?",
            "Ich weiß nicht, was diese begriffe bedeuten.",
            "Versuch es mal mit dem RTXv420.",
            "Na gut, wie ist die Lage?",
            "Nein ernsthaft, ich habe Feierabend. Lass dir von wem anderen helfen. Es ist schon nach "+hours+" Uhr!",
            "Hast du in deinem Raum irgendwas, was dir helfen könnte?",
            " ",
            "Bekommst du die auf?",
            "Verdammt, Ich weiß auch nicht..",
            "Okay. Dann musst du aus diesem Raum. Kommst du irgendwie anders raus?",
            " ",
            "Kann ich nicht, tut mir leid.",
            "Kommst du irgendwie noch an Sauerstoff?",
            "ja!",
            "Kannst du da draußen auch mit mir Kommunizieren?",
            "",
            "",
            "OK. Dann schau dich mal draußen um.",
            "Du hast ein Handy? Warum schickst du mir kein Foto?",
            "Du verarscht mich doch? Ich denke du stirbst gerade?",
            "Wohin musst du jetzt?",
            "Oh mein Gott... Bist du Gandi??",
            "Wirklich schön dort oben. Okay, ich vertraue dir, aber weiter jetzt!",
            "Dann los! Was machst du eigentlich im Weltall?",
            "",
            "Was machst du denn im Weltraum?",
            "Lit 🔥",
            "",
            "",
            "Ach du scheiße! Ich wusste es! Und wann kommen sie an?",
            "",
            "Sicher, dass die Hacker von der Erde stammen?",
            "Das heißt sie könnten jeden Moment ankommen! Weiter, der erste Eindruck zählt!",
            "Ich glaube wir sind verloren..",
            "Denk nicht drüber nach. Siehst du schon irgend etwas? Wo bist du gerade?",
            " ",
            " ",
            " ",
            " ",
            "...",
            "Was ist da??",
            "Geh wieder in die Raumstation, beeil dich!",
            "Was war das??",
            "",
            "",
            "Siehst du den Raumanzug? Ist dort noch Sauerstoff?",
            "Oh mein Gott. Tut mir leid.. Einfach weiter!",
            "",
            "",
            "Kanntest du ihn?",
            "Hast du wieder genug Sauerstoff?",
            "",
            "",
            "Anscheinend kanntest du ihn nur äußerlich.. ",
            "Tut mir leid.",
            "",
            "",
            "Umschauen.",
            "Nein, lieber schnell weiter.",
            "любовь",
            "ад",
            "Durch die Luke!",
            "Zum Maschinenraum!",
            "Verdammt, es steht unter Strom!",
            "",
            "",
            "",
            "Wir kämpfen!",
            "Frag ihn nach einer anderen Lösung.",
            "",
            "",
            "Aber wir sind doch alle Menschen! One Love? :(",
            "Gibt es keinen Kompromiss?",
            "Das finde ich nicht so gut, da ich Deutscher bin..",
            "",
            "Sag ihm wir zwingen sie. Wenn sie nicht Kooperieren zerstören wir die Pyramiden!",
            "Wir organisieren staatliche Fördergelder für die Stein-Industrie und wechseln mal die Tapete.",
            "Verdammt",
            "",
            "Verdammt",
            "",
            "OK.",
            "NOOOOIN GEEH NIICHT",
            "Verdammt, das ist gemein. Sie haben Leute getötet!",
            "War doch vorherzusehen der Plot-Twist.",
            "OK",
            "",
            "Brains...",
            "Na dann setzt ihr beide jetzt mal schön nen Völker-Vertrag auf.",
            "Verdammt",
            "",
            "ende",
            "",
          ];


function scroll() {
  $(".messages").each( function(){
     // certain browsers have a bug such that scrollHeight is too small
     // when content does not fill the client area of the element
     var scrollHeight = Math.max(this.scrollHeight, this.clientHeight) + 50;
     this.scrollTop = scrollHeight - this.clientHeight;
  });
}

function draw(m1, a1, a2, s1, s2 ) {
  delay = mess[m1].length * 50;
  console.log(state);
  setTimeout(function () {
    var d = new Date();
    var hours = d.getHours();
      if (hours.toString().length < 2) {
        hours = "0" + hours;
      }
    var minutes = d.getMinutes();
      if (minutes.toString().length < 2) {
        minutes = "0" + minutes;
      }
    var time = hours + ":" + minutes;
    $('.loader').remove();
    $('.messages').append('<div class="p1"><div class="text"><p>'+ mess[m1] +'</p></div><div class="time"><p>'+time+'</p></div></div>');
    $('.a1').append('<a onclick="change_state('+s1+', '+a1+')"><p>'+ ans[a1] +'</p></a>');
    $('.a2').append('<a onclick="change_state('+s2+', '+a2+')"><p>'+ ans[a2] +'</p></a>');
    scroll();
  }, delay);
}


function run(){

  if (state === 9999) {
    console.log('game over');
    setTimeout(function () {
      $('.loader').remove();
      //$('.messages').append('<div class="p1"><div class="text"><p>GAME OVER</p></div></div>');
      $('.gameover').css({'display': 'block', 'animation': 'bgshow 1s forwards'});
    }, 1000);
  }

  if (state === 1) {
    draw(0, 0, 1, 2, 3 );
  }
  if (state === 2) {
    draw(1, 2, 3, 4, 3 );
  }
  if (state === 3) {
    draw(2, 4, 5 , 5, 6);
  }
  if (state === 4) {
    draw(3, 6, 7 , 7, 8);
  }
  if (state === 5) {
    draw(4, 8, 9, 7, 9);
  }
  if (state === 6) {
    draw(5, 10, 11, 12, 14);
  }
  if (state === 7) {
    draw(6, 12, 13, 10, 11);
  }
  if (state === 8) {
    draw(7, 14, 15, 13, 16);
  }
  if (state === 9) {
    draw(8, 16, 17, 7, 9999);
  }
  if (state === 10) {
    draw(9, 18, 19, 8, 8);
  }
  if (state === 11) {
    draw(10, 20, 21, 12, 13);
  }
  if (state === 12) {
    draw(11, 22, 23, 10, 10);
  }
  if (state === 13) {
    draw(12, 24, 25, 9999, 12);
  }
  if (state === 14) {
    draw(13, 26, 27, 17, 16);
  }
  if (state === 15) {
    draw(14, 28, 29, 1, 1);
  }
  if (state === 16) {
    draw(15, 30, 31, 17, 18);
  }
  if (state === 17) {
    setTimeout(function () {
      var d = new Date();
      var hours = d.getHours();
        if (hours.toString().length < 2) {
          hours = "0" + hours;
        }
      var minutes = d.getMinutes();
        if (minutes.toString().length < 2) {
          minutes = "0" + minutes;
        }
      var time = hours + ":" + minutes;
      $('.loader').remove();
      $('.messages').append('<div class="p1"><div class="text"><p>Wow... Wenn du das nur sehen könntest.. Die Erde.. Wenn man wahrscheinlich nur noch wenige Minuten zu Leben haben wird sieht sie noch viel schöner aus..</p></div><div class="time"><p>'+time+'</p></div></div>');
    }, 2000);
    draw(16, 32, 33, 18, 19);
  }
  if (state === 18) {
    setTimeout(function () {
      $('.messages').append('<div class="p1"><div class="text"><img src="img/img01.jpg"></div></div>');
    }, 300);
    draw(17, 35, 34, 20, 27);
    setTimeout(function () {
      $('.loader').remove();
    }, 1000);
  }
  if (state === 19) {
    draw(18, 36, 37, 22, 22);
  }
  if (state === 20) {
    draw(19, 38, 39, 22, 31);
  }
  if (state === 21) {
    draw(20, 40, 41, 1, 1);
  }
  if (state === 22) {
    draw(21, 42, 43, 23, 23);
  }
  if (state === 23) {
    draw(22, 44, 45, 24, 25);
  }
  if (state === 24) {
    draw(23, 46, 47, 26, 27);
  }
  if (state === 25) {
    draw(24, 48, 49, 1, 1);
  }
  if (state === 26) {
    draw(25, 50, 51, 9999, 9999);
  }
  if (state === 27) {
    draw(26, 52, 53, 28, 29);
  }
  if (state === 28) {
    draw(27, 54, 55, 30, 31);
  }
  if (state === 29) {
    draw(28, 56, 57, 9999, 9999);
  }
  if (state === 30) {
    draw(29, 58, 59, 32, 33);
  }
  if (state === 31) {
    draw(30, 60, 61, 9999, 9999);
  }
  if (state === 32) {
    draw(31, 62, 63, 34, 36);
  }
  if (state === 33) {
    draw(32, 64, 65, 1, 1);
  }
  if (state === 34) {
    draw(33, 66, 67, 9999, 36);
  }
  if (state === 35) {
    draw(34, 68, 69, 1, 1);
  }
  if (state === 36) {
    draw(35, 70, 71, 37, 39);
  }
  if (state === 37) {
    draw(36, 72, 73, 38, 40);
  }
  if (state === 38) {
    draw(37, 74, 75, 41, 39);
  }
  if (state === 39) {
    draw(38, 76, 77, 9999, 9999);
  }
  if (state === 40) {
    draw(39, 78, 79, 9999, 9999);
  }
  if (state === 41) {
    //special nachtichten
    draw(40, 80, 81, 9999, 43);
  }
  if (state === 42) {
    draw(41, 82, 83, 1, 1);
  }
  if (state === 43) {
    draw(42, 84, 85, 44, 45);
  }
  if (state === 44) {
    draw(43, 86, 87, 47, 47);
  }
  if (state === 45) {
    draw(44, 88, 89, 46, 48);
  }
  if (state === 46) {
    draw(45, 90, 91, 9999, 9999);
  }
  if (state === 47) {
    draw(46, 92, 93, 9999, 99999);
  }
  if (state === 48) {
    draw(47, 94, 95, 49, 50);
  }
  if (state === 49) {
    draw(48, 96, 97, 46, 51);
  }
  if (state === 50) {
    draw(49, 98, 99, 49, 49);
  }
  if (state === 51) {
    draw(50, 100, 101, 52, 53);
  }
  if (state === 52) {
    draw(51, 102, 103, 9999, 9999);
  }
  if (state === 53) {
    //end
    draw(52, 104, 105, 8888, 8888);
    setTimeout(function () {
      $('.loader').remove();
      //$('.messages').append('<div class="p1"><div class="text"><p>GAME OVER</p></div></div>');
      $('.win').css({'display': 'block', 'animation': 'bgshow 1s forwards'});
    }, 1000);
  }

}

function change_state(x , y) {
  state = x;

  var d = new Date();
  var hours = d.getHours();
    if (hours.toString().length < 2) {
      hours = "0" + hours;
    }
  var minutes = d.getMinutes();
    if (minutes.toString().length < 2) {
      minutes = "0" + minutes;
    }
  var time = hours + ":" + minutes;
  $('.a1>a').remove();
  $('.a2>a').remove();
  $('.messages').append('<div class="p2"><div class="text"><p>'+ ans[y] +'</p></div><div class="time"><p>'+time+'</p></div></div>');
  scroll();
  setTimeout(function () {
    $('.messages').append('<div class="p1 loader" style="width: 30%"><div class="text"><img src="img/loader.GIF"></div></div>');
    scroll();
  }, 1000);

  run();
}

run();


$(function() {
  "use strict";
    // grab the initial top offset of the navigation
    var sticky_navigation_offset_top = $('.about').offset().top - 220;

    // our function that decides weather the navigation bar should have "fixed" css position or not.
    var sticky_navigation = function(){
        var scroll_top = $(window).scrollTop(); // our current vertical position from the top

        // if we've scrolled more than the navigation, change its position to fixed to stick to top,
        // otherwise change it back to relative
        if (scroll_top > sticky_navigation_offset_top) {
          console.log("test1");
          $('.bg2').css({ 'animation': 'bghide 1s forwards'});
        } else {
          $('.bg2').css({ 'animation': 'bgshow 1s forwards'});

        }
    };

    // run our function on load
    sticky_navigation();

    // and run it again every time you scroll
    $(window).scroll(function() {
         sticky_navigation();
    });

});
