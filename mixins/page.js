export default {
  methods: {
    animateHeader() {
      const letters = this.$refs.headerText.querySelectorAll('.anim-letter');
      const bang = this.$refs.headerText.querySelector('.anim-letter--bang');
      const para = this.$refs.headerPara;
      setTimeout(() => {
        this.$anime
          .timeline({
            easing: 'easeInOutSine'
          })
          .add({
            targets: letters,
            scale: [0, 1],
            duration: 600,
            delay: this.$anime.stagger(100)
          })
          .add({
            targets: bang,
            scale: [0, 1],
            rotateZ: [45, 15],
            duration: 600
          })
          .add({
            targets: para,
            opacity: [0, 1],
            duration: 600
          });
      }, 500);
    }
  }
};
