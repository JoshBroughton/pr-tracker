class Entry {
  #reps
  #weight
  #date
  #e1rm

  constructor(reps, weight = 0, date = new Date) {
    this.#reps = reps;
    this.#weight = weight;
    this.#date = new Date(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate(),
      date.getUTCHours(),
      date.getUTCMinutes(),
      date.getUTCSeconds(),
      date.getUTCMilliseconds(),
    );
    this.#e1rm = this.#estimate1RepMax();
  }

  #estimate1RepMax() {
    return (this.#weight / (1.0278 - (0.0278 * this.#reps)));
  }

  #formatDate(date) {
    let dateString = date.toDateString();
    dateString = dateString.slice(4, 10) + ',' + dateString.slice(10); 
    return dateString;
  }

  getReps() {
    return this.#reps;
  }

  getWeight() {
    return this.#weight;
  }

  getDate() {
    return this.#formatDate(this.#date);
  }

  getE1rm() {
    return this.#e1rm.toFixed();
  }

  setReps(reps) {
    this.#reps = reps;
    this.#e1rm = this.#estimate1RepMax();
  }
  
  setWeight(weight) {
    this.#weight = weight;
    this.#e1rm = this.#estimate1RepMax();
  }
  
  setDate(date) {
    this.#date = date;
  }

  saveString() {
    const saveString = [String(this.#reps), String(this.#weight), this.getDate()];
    console.log(saveString);
    return saveString;
  }
}

export default Entry
