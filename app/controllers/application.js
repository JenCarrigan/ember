import Controller from '@ember/controller';

export default Controller.extend({
  appName: 'Counter',
  number: 0,

  actions: {
    incrementNumber() {
      this.incrementProperty('number');
    },

    decrementNumber() {
      this.decrementProperty('number');
    },              
  }
});