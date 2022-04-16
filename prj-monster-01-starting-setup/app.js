const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      playerMana: 100,
      monsterHealth: 100,
      gameOver: false,
    };
  },
  computed: {},
  methods: {
    surrender() {
      this.playerHealth = 0;
      this.gameOver = true;
    },
    normalTurn() {
      if (!this.gameOver) {
        this.playerAttack();
        this.monsterAttack();
      }
    },
    specialTurn() {
      if (this.gameOver) {
        return;
      }

      if (this.playerMana <= 0) {
        console.log("Not enough mana");
        this.monsterAttack();
        return;
      }

      this.playerSpecialAttack();
      this.monsterAttack();
    },
    healTurn() {
      if (this.gameOver) {
        return;
      }

      if (this.playerHealth >= 100 || this.playerMana <= 0) {
        this.monsterAttack();
        return;
      }

      this.playerHeal();
      this.monsterAttack();
    },
    playerAttack() {
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
    playerHeal() {
      const heal = this.generateRandomNumber(15, 20);
      console.log(`Player heals for ${heal}`);
      this.playerHealth += heal;

      console.log(`Player has ${this.playerHealth} health left`);
    },
    playerSpecialAttack() {
      const damage = this.generateRandomNumber(10, 20);
      console.log(`Player hits Monster for ${damage}`);
      this.playerMana -= 50;
      this.monsterHealth -= damage;
      console.log(`Monster has ${this.monsterHealth} health left`);

      if (this.monsterHealth <= 0) {
        this.monsterHealth = 0;
        this.gameOver = true;
        console.log("Player wins!");
      }
    },
    monsterAttack() {
      const damage = this.generateRandomNumber(6, 12);
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
