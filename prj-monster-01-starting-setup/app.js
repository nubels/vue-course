const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      gameOver: false,
    };
  },
  methods: {
    singleTurn() {
      if (!this.gameOver) {
        this.playerAttack();
        this.monsterAttack();
      }
    },
    playerAttack() {
      // random betweeen 5 and 10
      const damage = this.generateRandomNumber(5, 10);
      console.log(`Player hits Monster for ${damage}`);
      this.monsterHealth -= damage;
      console.log(`Monster has ${this.monsterHealth} health left`);

      if (this.monsterHealth <= 0) {
        this.monsterHealth = 0;
        this.gameOver = true;
        console.log("Player wins!");
      }
    },
    monsterAttack() {
      const damage = this.generateRandomNumber(8, 15);
      console.log(`Monster hits Player for ${damage}`);
      this.playerHealth -= damage;

      if (this.playerHealth <= 0) {
        this.playerHealth = 0;
        this.gameOver = true;
        console.log("Monster wins!");
      }
    },

    generateRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
  },
});

app.mount("#game");
