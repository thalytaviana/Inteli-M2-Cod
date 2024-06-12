module.exports = {
  attributes: {
    id:{
      type: 'string',
      columnName: "id",
      required: true,
      unique: true
    },
    name: {
      type: "string",
      required: true,
    },
    photo: {
      type: "string",
      required: true,
    },
    favoriteToy: {
      type: "string",
      required: true,
    },
    owner: { //chave-estrangeira
      model: "User",
      required: true,
    },
  },

  beforeCreate: async (values, proceed) =>{
    valued.id = uuidv4();
    return proceed();
  }

};