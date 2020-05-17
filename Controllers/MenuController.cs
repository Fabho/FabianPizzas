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
using System.Web.Http.Description;
using FabianPizzas.Data;
using FabianPizzas.Models;

namespace FabianPizzas.Controllers
{
    public class MenuController : ApiController
    {
        private FabianPizzasContext db = new FabianPizzasContext();

        // GET: api/Menu
        public IQueryable<Menu> GetMenus()
        {
            return db.Menus;
        }

        // GET: api/Menu/5
        [ResponseType(typeof(Menu))]
        public async Task<IHttpActionResult> GetMenu(int id)
        {
            Menu menu = await db.Menus.FindAsync(id);
            if (menu == null)
            {
                return NotFound();
            }

            return Ok(menu);
        }

        // PUT: api/Menu/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutMenu(int id, Menu menu)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != menu.MenuID)
            {
                return BadRequest();
            }

            db.Entry(menu).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MenuExists(id))
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

        // POST: api/Menu
        [ResponseType(typeof(Menu))]
        public async Task<IHttpActionResult> PostMenu(Menu menu)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Menus.Add(menu);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = menu.MenuID }, menu);
        }

        // DELETE: api/Menu/5
        [ResponseType(typeof(Menu))]
        public async Task<IHttpActionResult> DeleteMenu(int id)
        {
            Menu menu = await db.Menus.FindAsync(id);
            if (menu == null)
            {
                return NotFound();
            }

            db.Menus.Remove(menu);
            await db.SaveChangesAsync();

            return Ok(menu);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool MenuExists(int id)
        {
            return db.Menus.Count(e => e.MenuID == id) > 0;
        }
    }
}