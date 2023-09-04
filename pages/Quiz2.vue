<template>
  <div class="container">
    <div class="current-card">
      <template v-if="task < tasks[lang].length">
        <div v-if="taskPhotos[task]" class="photo"><img :src="photoUrl" alt="Image" style="max-width: 100%"></div>
        <h1 v-if="tasks[lang][task].name" class="name">{{ tasks[lang][task].name }}</h1>
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
            name: "Zamek Pieskowa Skała",
            task: "Task1 - type \"Answer1\"",
            answer: "Answer1",
          },
          {
            name: "Zamek Pieskowa Skała 2",
            task: "Task2",
            answer: "Correct answer",
            options: [
              "Wrong answer 1",
              "Correct answer",
              "Wrong answer 2",
              "Wrong answer 3"
            ]
          },
        ],
        EN: [
          {
            task: "Task1",
            answer: "Answer1",
          },
          {
            task: "Task2",
            answer: "Answer2",
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
          finishText: ""
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
