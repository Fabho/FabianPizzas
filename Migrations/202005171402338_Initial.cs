namespace FabianPizzas.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Menus",
                c => new
                    {
                        MenuID = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.MenuID);
            
            CreateTable(
                "dbo.Pizzas",
                c => new
                    {
                        PizzaID = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Menu_MenuID = c.Int(),
                    })
                .PrimaryKey(t => t.PizzaID)
                .ForeignKey("dbo.Menus", t => t.Menu_MenuID)
                .Index(t => t.Menu_MenuID);
            
            CreateTable(
                "dbo.Toppings",
                c => new
                    {
                        ToppingID = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.ToppingID);
            
            CreateTable(
                "dbo.ToppingPizzas",
                c => new
                    {
                        Topping_ToppingID = c.Int(nullable: false),
                        Pizza_PizzaID = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.Topping_ToppingID, t.Pizza_PizzaID })
                .ForeignKey("dbo.Toppings", t => t.Topping_ToppingID, cascadeDelete: true)
                .ForeignKey("dbo.Pizzas", t => t.Pizza_PizzaID, cascadeDelete: true)
                .Index(t => t.Topping_ToppingID)
                .Index(t => t.Pizza_PizzaID);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Pizzas", "Menu_MenuID", "dbo.Menus");
            DropForeignKey("dbo.ToppingPizzas", "Pizza_PizzaID", "dbo.Pizzas");
            DropForeignKey("dbo.ToppingPizzas", "Topping_ToppingID", "dbo.Toppings");
            DropIndex("dbo.ToppingPizzas", new[] { "Pizza_PizzaID" });
            DropIndex("dbo.ToppingPizzas", new[] { "Topping_ToppingID" });
            DropIndex("dbo.Pizzas", new[] { "Menu_MenuID" });
            DropTable("dbo.ToppingPizzas");
            DropTable("dbo.Toppings");
            DropTable("dbo.Pizzas");
            DropTable("dbo.Menus");
        }
    }
}
