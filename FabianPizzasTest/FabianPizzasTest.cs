using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using FabianPizzas.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace FabianPizzasTest
{
    [TestClass]
    public class FabianPizzasTest
    {
        //TODO: I must learn how to moq and test entity framework instances
        
        [TestMethod]
        public void ToppingsModel_shouldBeValid()
        {
            Topping mockTopping = new Topping()
            {
                ToppingID = 1,
                Name = "Mozzarella"
            };

            Assert.IsNotNull(mockTopping);
            Assert.IsNotNull(mockTopping.ToppingID);
        }

        [TestMethod]
        public void PizzaModel_shouldBeValid()
        {
            Pizza mockPizza = new Pizza
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
            };


            Assert.IsNotNull(mockPizza);
            Assert.IsTrue(!String.IsNullOrEmpty(mockPizza.Name));
            Assert.IsTrue(mockPizza.Toppings.Count() > 0);
        }

        [TestMethod]
        public void MenuModel_shouldBeValid()
        {
            var mockMenu = new Menu
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
            };

            Assert.IsNotNull(mockMenu);
            Assert.IsTrue(!String.IsNullOrEmpty(mockMenu.Name));
            Assert.IsTrue(mockMenu.Pizzas.Count() > 0);
        }
    }
}
