const { sequelize } = require("../db");
const { Item } = require("./item");
import "regenerator-runtime/runtime";

describe("Item model", () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true });
  });

  test("can create an item", async () => {
    const testItem = await Item.create({
      title: "testitem",
      price: 12.01,
      description:
        "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    });
    expect(testItem.title).toBe("testitem");
    expect(testItem.category).toBe("women's clothing");
    expect(testItem.price).toBe(12.01);
  });
});
