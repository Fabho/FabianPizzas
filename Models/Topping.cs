using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace FabianPizzas.Models
{
    public class Topping
    {
        [Required]
        public int ToppingID { get; set; }
        public string Name { get; set; }
        public virtual ICollection<Pizza> Pizzas { get; set; }
    }
}