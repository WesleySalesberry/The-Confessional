import { Base } from "./Base";

class Confession extends Base{

  get confessions() {
    return{
      allConfessions: (category='', search="") => this.get(`confession?category=${category}&search=${search}`),
      singleConfession: (id) => this.get(`confession/${id}`),
      postConfession: (body) => this.post(`confession`, body)
    }
  }
  
}

export default Confession = new Confession();