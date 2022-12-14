import { Base } from "./Base";

class Confession extends Base{

  get confessions() {
    return{
      allConfessions: (category='') => this.get(`confession?category=${category}`),
      singleConfession: (id) => this.get(`confession/${id}`)
    }
  }
  
}

export default Confession = new Confession();