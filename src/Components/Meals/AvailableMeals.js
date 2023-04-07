import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 900,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty",
    price: 200,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, veg and crunchy",
    price: 100,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy... and green...",
    price: 120,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
