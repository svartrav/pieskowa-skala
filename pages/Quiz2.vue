<template>
  <div class="container">
    <div class="current-card">
      <template v-if="task < tasks[lang].length">
        <div v-if="taskPhotos[task]" class="photo"><img :src="photoUrl" alt="Image" style="max-width: 100%"></div>
        <h1 v-if="tasks[lang][task].name" class="name">{{ `${task+1}/11. ${tasks[lang][task].name}` }}</h1>
        <div class="desc">{{ tasks[lang][task].task }}</div>

        <div v-if="!tasks[lang][task].options" class="form form--text">
          <input @keyup.enter="verifyAnswer" v-model="currentAnswer" :placeholder="texts[lang].answer">
        </div>

        <div v-else-if="tasks[lang][task].options" class="form form--radio">
          <v-radio-group v-model="currentAnswer">
            <v-radio v-for="(option, index) in tasks[lang][task].options" :key="index" :label="option" :value="option" dark></v-radio>
          </v-radio-group>
        </div>

        <button @click="verifyAnswer" type="button" class="submit" :disabled="!currentAnswer || currentAnswer.length === 0">
          {{ texts[lang].check }}
        </button>
      </template>

      <template v-else>
        <h1 class="name"> {{texts[lang].congratulations}} </h1>
        <div class="desc"> {{texts[lang].finishText}} </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "Quiz2",
  data () {
    return {
      lang: "PL",
      currentAnswer: undefined,
      task: 0,
      message: "Zaglądając tu psujesz zabawę tylko sobie. Na tak prostej skrytce nie ma sensu jakoś tego kodu chować bo i zysk z ominięcia quizu jest dla rozwiązującego niewielki.",
      tasks: {
        PL: [
          {
            name: "Dziedziniec zewnętrzny",
            task: "Witamy na zamkowym dziedzińcu! Twoim pierwszym zadaniem będzie rozejrzeć się dokładnie po okolicy i znaleźć metalową makietę zamku. Zapoznaj się z nią a znajdziesz herb rodziny Szafrańców związanej nierozerwalnie z historią Pieskowej Skały. Na lewo od herbu widnieje podpis w języku polskim oraz angielskim. Podaj z ilu liter składa się pierwsze słowo tego podpisu.",
            answer: "8",
          },
          {
            name: "Umocnienia obronne",
            task: "Stojąc przodem do herbu odwróć się o 180 stopni. W narożnikach dziedzińca zobaczysz elementy 2 bastionów, które wraz z łączącym je budynkiem kurtynowym fortyfikacje zostały wniesione tuż przed najazdem szwedzkim w 1655 roku. Na lewym bastionie znajduje się wąska baszta - podaj ile niezamurowanych wysokich okien jest widocznych z terenu dziedzińca.",
            answer: "2"
          },
          {
            name: "Baszta gotycka",
            task: "Przenosząc wzrok dalej na lewo zobaczysz wysoką, surową wieżę. Jest to jedna z 2 baszt artyleryjskich powstałych w XVw. celem obrony zamku od strony wschodniej. Otwory strzelnicze rozmieszczone były aż na 10 poziomach. Czy baszta ta jest wyższa od współcześnie sąsiadujących z nią budynków?",
            answer: "Tak",
            options: [
              "Tak",
              "Nie",
            ]
          },
          {
            name: "Loggia widokowa",
            task: "Podążając ponownie w lewo wzdłuż widocznych zabudowań zobaczysz loggię widokową z XVIw. Jej piękne łuki zostały zamurowane w wieku XVIII. ale w trakcie remontu po II Wojnie Światowej przywrócono jej renesansowy charakter. Na prawo od loggi zobaczysz zegar ze znakami zodiaku. Podaj, który znak zodiaku znajduje się między godzinami I a II.",
            answer: "Skorpion",
            options: [
              "Lew",
              "Panna",
              "Wodnik",
              "Skorpion",
              "Strzelec"
            ]
          },
          {
            name: "Brama dziedzińca wewnętrznego",
            task: "Kierując się w stronę dziedzińca wewnętrznego zamku zobaczysz ostrołukowy portal z XVw. stanowiący jeden ze średniowiecznych elementów zamku. Na lewo od bramy nad dwoma niewielkimi oknami zobaczysz wyryte dwie sentencje. O ile prawa jest częściowo zniszczona o tyle na lewej znajdziesz napis \"MNIE TV DLA OBRONY ZBVDOWANO A BOGU WOPIEKE PODANO GDIZ BEZ RATVNKV IEGO NIEOBRONI NIKT NICZEGO\". Podaj ile liter z tej sentencji znajduje się w 3 linii tekstu.",
            answer: "20",
          },
          {
            name: "Dziedziniec arkadowy",
            task: "Teraz możesz wejść na dziedziniec wewnętrzny zamku. Arkady ozdobione są maszkaronami a na wprost wejścia na wysokości 1 piętra znajdziesz 2 herby - herb Szafrańców - Starykoń oraz herb Rawicz należący do żony Stanisława Szafrańca - Anny Dębińskiej. Na tarczy herbowej odnajdziemy kobietę w koronie, która dosiada wielkiego zwierza, jest to...",
            answer: "Niedźwiedź",
            options: [
              "Koń",
              "Niedźwiedź",
              "Łoś",
              "Lew"
            ]
          },
          {
            name: "Studnia zamkowa",
            task: "Poniżej herbów znajdziesz elementy studni zamkowej z XIV. lub XV. wieku. Ze względu na wysokość na jakiej znajduje się zamek dostęp do wody był mocno utrudniony więc studnia ta cechuje się robiącą wrażenie głębokością aż 50m. W dawnych czasach od studni odchodziło szerokie koryto do którego służący wlewali pozyskaną wodę. Korytem tym woda docierała do drewnianych rur które prowadziły do znajdujących się w podziemiach zamkowej pralni i kuchni. Na wyższe piętra wnoszono ją natomiast w wiadrach. Z jakiego materiału wykonano górne elementy studni?",
            answer: "Drewno",
            options: [
              "Marmur",
              "Wapień",
              "Szkło",
              "Drewno"
            ]
          },
          {
            name: "Lamus",
            task: "Na przeciwnym rogu dziedzińca zobaczysz metalową czarną kratę. Znajduje się za nią lamus czyli pomieszczenie gospodarcze pełniące funkcję składu gospodarczego. Wejdź do środka i podaj ile lamp znajduje się na suficie tego pomieszczenia. Jeśli lamus jest zamknięty lub znajduje się tam grupa z przewodnikiem spróbuj zgadnąć odpowiedź - lamp jest mniej niż 10.",
            answer: "5",
          },
          {
            name: "Arkady",
            task: "Na lewo od wejścia na dziedziniec znajdziesz schody prowadzące na 1. piętro krużganków arkadowych. Na ścianie, u ich szczytu na ścianie znajdziesz pochodzący z XIX wieku fragment psalmu 127. zapisany po francusku. W polskiej wersji tekst ten brzmi \"Jeżeli Pan domu nie zbuduje na próżno się trudzą ci, którzy go wznoszą\". W ilu liniach zapisano francuską wersję?",
            answer: "3",
          },
          {
            name: "Skała Dorotki",
            task: "Znajdź schody prowadzące na kolejne piętro arkad. Tam na jednej ze ścian krużganków znajdują się kolorowe okna. Ściana ta oddzielała nieistniejący już Zamek Górny od Zamku Dolnego. Jeżeli będziesz mieć szczęście jedno z tych okien będzie otwarte i zobaczysz za nim Skałę Dorotki. Wedle legendy Dorotka była niewierną żoną jednego z Szafrańców, którą to okrutny mąż kazał zamurować żywcem w piwnicy pod wieżą. Podaj ile takich kolorowych okien znajduje się na w tym miejscu.",
            answer: "2",
          },
          {
            name: "Nagrobki",
            task: "Na tym samym piętrze odnajdziesz pochodzące z początków XVII stulecia pomniki nagrobne z figurami rycerzy. Warto zwrócić uwagę na miejsce, w którym się znajdują. Pomieszczenie to posiada pewną ciekawą własność - ze względu na kształt sklepienia dwie osoby mogą stanąć w przeciwległych kątach i twarzą do ściany porozumiewać się szeptem. Będą się one dobrze słyszeć ale ktoś stojący pośrodku nie podsłucha ich rozmowy. Podaj ile nagrobków znajduje się w tym miejscu.",
            answer: "2",
          }
        ],
        EN: [
          {
            name: "Outer courtyard",
            task: "Welcome to the castle courtyard! Your first task will be to look carefully around the area and find a metal model of the castle. Familiarize yourself with it and you will find the coat of arms of the Szafraniec family, inextricably linked with the history of Pieskowa Skała. To the left of the coat of arms there is a caption in Polish and English. How many letters the first word of this caption consists of?",
            answer: "8",
          },
          {
            name: "Defensive fortifications",
            task: "When facing the coat of arms, turn 180 degrees. In the corners of the courtyard you will see the elements of two bastions, which, together with the curtain building connecting them, were built just before the Swedish invasion in 1655. On the left bastion there is a narrow tower - How many high windows which were not bricked up are visible from the courtyard?",
            answer: "2"
          },
          {
            name: "Gothic tower",
            task: "If you look further to the left, you will see a tall, ascetic tower. It is one of the two artillery towers built in the 15th century to defend the castle from the eastern side. The gunholes were located on as many as 10 levels. Is this tower higher than the buildings surrounding it today?",
            answer: "Yes",
            options: [
              "Yes",
              "No",
            ]
          },
          {
            name: "Viewing loggia",
            task: "Going left again along the visible buildings, you will see a viewing loggia from the 16th century. Its beautiful arches were bricked up in the 18th century but during renovations after World War II, its Renaissance character was restored. To the right of the loggia you will see a clock with zodiac signs. Which zodiac sign is located between 1 and 2 o'clock?",
            answer: "Scorpio",
            options: [
              "Leo",
              "Virgo",
              "Aquarius",
              "Scorpio",
              "Sagittarius"
            ]
          },
          {
            name: "Gate of the inner courtyard",
            task: "Heading towards the inner courtyard of the castle, you will see a pointed portal from the 15th century being one of the medieval elements of the castle. To the left of the gate, above two small windows, you will see two engraved texts. While the right one is partially destroyed, on the left you will find the inscription \"MNIE TV DLA OBRONY ZBVDOWANO A BOGU WOPIEKE PODANO GDIZ BEZ RATVNKV IEGO NIEOBRONI NIKT NICZEGO\" which roughly means \"For the defence I was built and to the God's protection entrusted for without his protection no-one will defend anything\". How many letters from this sentence are in the 3rd line of text?",
            answer: "20",
          },
          {
            name: "Arcaded courtyard",
            task: "Now you can enter the inner courtyard of the castle. The arcades are decorated with mascarons and in front of the entrance, at the height of the 1st floor, you will find two coats of arms - the Szafraniec coat of arms - Starykoń (Old-horse) and the Rawicz coat of arms belonging to Stanisław Szafraniec's wife - Anna Dębińska. On this coat of arms we will find a woman in a crown riding a large animal, which is a...",
            answer: "Bear",
            options: [
              "Horse",
              "Bear",
              "Moose",
              "Lion"
            ]
          },
          {
            name: "Castle well",
            task: "Below the coats of arms you will find elements of the castle well from the XIVth or XVth century. Due to the height at which the castle is located, access to water was very difficult, so this well has an impressive depth of 50 m. In medieval times, there was a wide channel extending from the well into which servants poured the water they obtained. Through this channel, the water reached wooden pipes that led to the castle's laundry and kitchen located in the basement. To the upper floors the water was carried in buckets. What material are the upper elements of the well made of?",
            answer: "Wood",
            options: [
              "Marble",
              "Limestone",
              "Glass",
              "Wood"
            ]
          },
          {
            name: "Lamus",
            task: "On the opposite corner of the courtyard you will see a black metal gate. Behind it there is Lamus - a room serving as a utility storage. Go inside and look around. How many lamps are on the ceiling of this room? If Lamus is closed or there is a guided group there, try to guess the answer - there are fewer than 10 lamps.",
            answer: "5",
          },
          {
            name: "Arcades",
            task: "To the left of the entrance to the courtyard you will find stairs leading to the 1st floor of the arcade cloisters. At their top, on the wall, you will find a fragment of the 127th Psalm from the 19th century that was written in French. In the English version, the text reads: \"Unless the Lord builds the house, its builders labor in vain.\" In how many lines was the French version written on the wall?",
            answer: "3",
          },
          {
            name: "Dorothy's Rock",
            task: "Find the stairs leading to the next floor of the cloisters. There are colorful windows on one of the cloister walls. This wall separated the now non-existent Upper Castle from the Lower Castle. If you're lucky, one of these windows will be open and you'll see Dorothy's Rock behind it. According to legend, Dorothy (pl. Dorotka) was the unfaithful wife of one of the Szafraniec family, who was walled up alive by her cruel husband in the basement under the tower. How many such colored windows there are in here?",
            answer: "2",
          },
          {
            name: "Tombstones",
            task: "On the same floor you will find tombstones with figures of knights from the early 17th century. It's worth mention that the place where they are located has an interesting feature - due to the shape of the roof, two people can stand in opposite corners facing the wall and communicate by whispering. They will hear each other well, but someone standing in the middle will not overhear their conversation. How many gravestones there are in this place?",
            answer: "2",
          }
        ],
        UA: [
          {
            task: "Task1",
            answer: "Answer1",
          },
          {
            task: "Task2",
            answer: "Answer2",
          }
        ],
        DE: [
          {
            task: "Task1",
            answer: "Answer1",
          },
          {
            task: "Task2",
            answer: "Answer2",
          }
        ],
        CZ: [
          {
            task: "Task1",
            answer: "Answer1",
          },
          {
            task: "Task2",
            answer: "Answer2",
          }
        ],
      },
      taskPhotos: [
        undefined,
        "pieskowa-skala.jpg",
      ],
      texts: {
        PL: {
          answer: "Odpowiedź",
          check: "Sprawdź",
          congratulations: "Gratulacje!",
          finishText: "Udało Ci się rozwiązać ten prosty quiz. W nagrodę podam Ci hasło do PRAWEJ kłódki. Jest to data powstania skrytki geocache w Zamku na Pieskowej Skale - 2023. Dodatkowo zapisz sobie współrzędne wschodnie skrytki - E 19° 46.798'"
        },
        EN: {
          answer: "Answer",
          check: "Check",
          congratulations: "Congratulations!",
          finishText: "You have successfully completed the quiz. As a reward, I will give you the password to the RIGHT padlock. This is the date of creation of the geocache in the Pieskowa Skała Castle - 2023. Additionally, you can write down the eastern coordinates of the cache - E 19° 46.798'"
        },
        UA: {
          answer: "Відповідь",
          check: "підтвердити",
          congratulations: "",
          finishText: ""
        },
        DE: {
          answer: "Antwort",
          check: "Bestätigen",
          congratulations: "",
          finishText: ""
        },
        CZ: {
          answer: "Odpověď",
          check: "Potvrdit",
          congratulations: "",
          finishText: ""
        }
      }
    }
  },
  methods: {
    verifyAnswer() {
      const form = document.querySelector('.form')
      const submit = document.querySelector('.submit')

      if (this.currentAnswer === this.tasks[this.lang][this.task].answer) {
        this.currentAnswer = undefined;
        this.task++;
      } else {
        form.classList.add('has-error')
        form.addEventListener('animationend', () => form.classList.remove('has-error'))
      }

      submit.blur()
    }
  },
  computed: {
    photoUrl: function () {
      return require(`@/assets/quiz-images/${this.taskPhotos[this.task]}`)
    },
  },
  created() {
    if (this.$route.query.lang && this.texts[this.$route.query.lang])
    {
      this.lang = this.$route.query.lang;
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  background-image: url("~@/assets/listing-bg.jpeg");
  background-repeat: repeat;
  max-width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  $spacer: 2rem;
  $success: #4CAF50;
  $danger: #ef5350;

  @keyframes shake {
    10%, 90% { transform: translate3d(-1px, 0, 0); }
    20%, 80% { transform: translate3d(2px, 0, 0); }
    30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
    40%, 60% { transform: translate3d(4px, 0, 0); }
  }

  .current-card {
    width: 600px;
    height: min-content;
    background: #fff;
    box-shadow: 0 0 3rem rgba(#000, .15);
    border-radius: 10px;
  }
  .name {
    color: black;
    padding-top: $spacer;
    margin: 0 $spacer $spacer;
  }
  .photo {
    text-align: center;
    background: #FAFAFA;
    padding: $spacer;

    img { display: inline-block; }
  }
  .desc {
    color: black;
    margin: $spacer;
  }
  .form {
    color: #fff;
    background: #37474F;
    transition: background 250ms;

    &--radio {
      padding: $spacer;
    }

    input {
      color: #fff;
      font-size: 1.5rem;
      background: none;
      padding: $spacer;
      width: 100%;

      &:focus {
        outline: 0;
      }
    }

    &.has-error {
      background: $danger;
      animation: shake 1s ease-in-out;
    }
  }
  .submit {
    color: #fff;
    font-weight: bold;
    font-size: 1.15rem;
    text-align: center;
    padding: 1rem;
    background: $success;
    display: block;
    width: 100%;
    transition: background 250ms ease-in-out, opacity 250ms ease-in-out;
    cursor: pointer;
    border-radius: 0 0 10px 10px;

    &[disabled] {
      opacity: .75;
      pointer-events: none;
    }

    &:hover {
      background: lighten($success, 5%);

    }

    &:focus {
      background: darken($success, 5%);
      box-shadow: 0 0 0 .25rem rgba($success, .5);
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
}


</style>
