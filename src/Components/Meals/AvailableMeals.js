import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
    {id:'m1',name:'Sushi',Description:'Finest fish and veggies',price: 900},
    {id:'m2',name:'Schnitzel',Description:'A german specialty',price: 200},
    {id:'m3',name:'Barbecue Burger',Description:'American, veg and crunchy',price: 100},
    {id:'m4',name:'Green Bowl',Description:'Healthy... and green...',price: 120},
];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);
    return <section className={classes.meals}>
        <ul>
            {mealsList}
        </ul>
    </section>
};
export default AvailableMeals;