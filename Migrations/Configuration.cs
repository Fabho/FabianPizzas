namespace FabianPizzas.Migrations
{
    using FabianPizzas.Models;
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<FabianPizzas.Data.FabianPizzasContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(FabianPizzas.Data.FabianPizzasContext context)
        {
            context.Menus.AddOrUpdate(new Menu
            {
                MenuID = 1,
                Name = "Fabian Pizzas",
                Pizzas = new List<Pizza>()
                {
                    new Pizza
                    {
                        PizzaID = 1,
                        Name = "Supreme",
                        Toppings = new List<Topping>()
                        {
                            new Topping
                            {
                                ToppingID = 1,
                                Name = "Mozzarella"
                            },
                            new Topping
                            {
                                ToppingID = 2,
                                Name = "Bacon"
                            }
                        }
                    },
                    new Pizza
                    {
                        PizzaID = 2,
                        Name = "Hawaiian ",
                        Toppings = new List<Topping>()
                        {
                            new Topping
                            {
                                ToppingID = 3,
                                Name = "Ham"
                            },
                            new Topping
                            {
                                ToppingID = 4,
                                Name = "pineapple"
                            }
                        }
                    }
                }
            });
        }
    }
}
