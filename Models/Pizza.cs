using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace FabianPizzas.Models
{
    public class Pizza
    {
        [Required]
        public int PizzaID { get; set; }
        public string Name { get; set; }
        public virtual ICollection<Topping> Toppings { get; set; }
    }
}