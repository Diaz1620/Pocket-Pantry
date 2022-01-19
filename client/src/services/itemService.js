var data = [
  { _id: 1, name: "apples", amount: 2, unit: "oz", category: "fruit" },
  {
    _id: 2,
    name: "celery",
    amount: 3,
    unit: "sticks",
    category: "vegetable",
  },
];

class ItemService {
  getList() {
    return data;
  }

  removeMultiple(products) {
    let newData = [...data];
    for (let i = 0; i < products.length; i++) {
      let selected = products[i];
      if (selected.selected) {
        for (let f = 0; f < data.length; f++) {
          let item = data[f];
          if (selected._id === item._id) {
            data.splice(f, 1);
          }
        }
      }
    }

    console.log(data);
  }
}

export default ItemService;
