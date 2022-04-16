const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      playerMana: 100,
      monsterHealth: 100,
      gameOver: false,
      battleLog: [],
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
        this.battleLog.push(
          "Player tries to use special attack but has no mana"
        );
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

      if (this.playerMana <= 0) {
        this.battleLog.push("Player tries to use heal but has no mana");
        this.monsterAttack();
        return;
      }

      if (this.playerHealth >= 100) {
        this.battleLog.push(
          "Player tries to use heal but is already at full health"
        );
        this.monsterAttack();
        return;
      }

      this.playerHeal();
      this.monsterAttack();
    },
    playerAttack() {
      const damage = this.generateRandomNumber(5, 10);
      this.battleLog.push(`Player hits monster for ${damage} damage`);
      this.monsterHealth -= damage;

      if (this.monsterHealth <= 0) {
        this.monsterHealth = 0;
        this.gameOver = true;
        this.battleLog.push("Player wins!");
      }
    },
    playerHeal() {
      const heal = this.generateRandomNumber(15, 20);
      this.battleLog.push(
        `Player heals himself for ${heal} health, consuming 20 mana`
      );
      this.playerMana -= 20;
      this.playerHealth += heal;

      console.log(`Player has ${this.playerHealth} health left`);
    },
    playerSpecialAttack() {
      const damage = this.generateRandomNumber(10, 20);
      this.battleLog.push(
        `Player uses special attack to hit Monster for ${damage}, consuming 50 mana`
      );
      this.playerMana -= 50;
      this.monsterHealth -= damage;
      console.log(`Monster has ${this.monsterHealth} health left`);

      if (this.monsterHealth <= 0) {
        this.monsterHealth = 0;
        this.gameOver = true;
        this.battleLog.push("Player wins!");
      }
    },
    monsterAttack() {
      const damage = this.generateRandomNumber(6, 12);
      this.battleLog.push(`Monster hits Player for ${damage} damage`);
      this.playerHealth -= damage;

      if (this.playerHealth <= 0) {
        this.playerHealth = 0;
        this.gameOver = true;
        this.battleLog.push("Monster wins!");
      }
    },
    generateRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
  },
});

app.mount("#game");
