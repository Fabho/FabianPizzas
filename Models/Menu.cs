using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace FabianPizzas.Models
{
    public class Menu
    {
        [Required]
        public int MenuID { get; set; }
        public string Name { get; set; }
        public virtual ICollection<Pizza> Pizzas { get; set; }
    }
}