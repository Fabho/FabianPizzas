using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using FabianPizzas.Data;
using FabianPizzas.Models;

namespace FabianPizzas.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ToppingsController : ApiController
    {
        private FabianPizzasContext db = new FabianPizzasContext();

        // GET: api/Toppings
        public IQueryable<Topping> GetToppings()
        {
            return db.Toppings;
        }

        // GET: api/Toppings/5
        [ResponseType(typeof(Topping))]
        public async Task<IHttpActionResult> GetTopping(int id)
        {
            Topping topping = await db.Toppings.FindAsync(id);
            if (topping == null)
            {
                return NotFound();
            }

            return Ok(topping);
        }

        // PUT: api/Toppings/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutTopping(int id, Topping topping)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != topping.ToppingID)
            {
                return BadRequest();
            }

            db.Entry(topping).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ToppingExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Toppings
        [ResponseType(typeof(Topping))]
        public async Task<IHttpActionResult> PostTopping(Topping topping)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Toppings.Add(topping);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = topping.ToppingID }, topping);
        }

        // DELETE: api/Toppings/5
        [ResponseType(typeof(Topping))]
        public async Task<IHttpActionResult> DeleteTopping(int id)
        {
            Topping topping = await db.Toppings.FindAsync(id);
            if (topping == null)
            {
                return NotFound();
            }

            db.Toppings.Remove(topping);
            await db.SaveChangesAsync();

            return Ok(topping);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ToppingExists(int id)
        {
            return db.Toppings.Count(e => e.ToppingID == id) > 0;
        }
    }
}