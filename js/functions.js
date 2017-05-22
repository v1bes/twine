
var state = 1;
var temp_ant;

var d = new Date();
var hours = d.getHours();
  if (hours.toString().length < 2) {
    hours = "0" + hours;
  }

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
            " ",
            "Ja, ich glaube das sollte funktionieren. Das Signal meines Notfall-Handy's läuft über den Astra-Satelit. Damit hat man hier auch bei schlechtem Wetter immer Empfang..",
            "Es ist so still.. Und die restliche Luft in meinem Raumanzug riecht nach Metall.. Aber wahnsinnig schön hier oben..",
            "#nofilter",
            "Zum Zentral-PC, der ist nicht weit von hier.",
            "Achso ja, das hätte ich vielleicht erwähnen sollen.",
            ""
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
            "Ehrlich gesagt arbeite ich gar nicht bei der NASA. Ich weiß nicht, was diese begriffe bedeuten.",
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
            "Siehst du noch irgend was nützlicheswas du gebrauchen könntest?",
            "Kannst du da draußen auch mit mir Kommunizieren?",
            "13",
            "13",
            "OK. Dann schau dich mal draußen um.",
            " ",
            "Du verarscht mich doch? Ich denke du stirbst gerade?",
            "Wohin musst du jetzt?",
            "Oh mein Gott... Bist du Gandi??",
            "Wirklich schön dort oben. Okay, ich vertraue dir, aber weiter jetzt!",
            "Dann los! Was machst du eigentlich im Weltall?",
            "Was machst du denn im Weltraum?",
            "Lit 🔥",

          ];


function draw(m1, a1, a2, s1, s2 ) {
  delay = mess[m1].length * 50;
  console.log(delay);
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
  }, delay);
}


console.log(state);

function run(){

  if (state === 9999) {

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
    draw(13, 26, 27, 15, 16);
  }
  if (state === 15) {
    draw(14, 28, 29, 13, 14);
  }
  if (state === 16) {
    draw(15, 30, 31, 12, 14);
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
    draw(16, 32, 33, 12, 14);
  }
  if (state === 18) {
    setTimeout(function () {
      $('.loader').remove();
      $('.messages').append('<div class="p1"><div class="text"><img src="img/img01.jpg"></div></div>');
    }, 300);
    draw(17, 35, 34, 12, 14);
  }
  if (state === 19) {
    draw(18, 36, 37, 12, 14);
  }
  if (state === 20) {
    draw(19, 38, 39, 12, 14);
  }
  if (state === 21) {
    draw(20, 40, 41, 12, 14);
  }
  if (state === 22) {
    draw(21, 42, 43, 12, 14);
  }
  if (state === 23) {
    draw(22, 44, 45, 12, 14);
  }
  if (state === 24) {
    draw(23, 46, 47, 12, 14);
  }
  if (state === 25) {
    draw(24, 48, 49, 12, 14);
  }
  if (state === 26) {
    draw(25, 50, 51, 12, 14);
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
  setTimeout(function () {
    $('.messages').append('<div class="p1 loader" style="width: 30%"><div class="text"><img src="img/loader.GIF"></div></div>');
  }, 1000);

  run();
}

run();
