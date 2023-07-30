class Schema {
  constructor(object) {
    let key = Object.keys(object);
    return key.map((e) => {
      return {
        name: e,
        type: object[e].type,
        req: object[e].req ? true : false,
        defaults: object[e].defaults ? object[e].defaults : "",
      };
    });
  }
}

module.exports = Schema;
