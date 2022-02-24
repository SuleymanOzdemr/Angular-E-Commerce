using API.Core.DbModels;
using API.Infrastructure.DataContext;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly StoreContext _context;
        public ProductsController(StoreContext context)
        {
            _context = context;
        }
        [HttpGet]
        public ActionResult<List<Product>> GetProducts()
        {
            var data = _context.Products.ToList();
            return data;
        }
        //note
        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            return await _context.Products.FindAsync(id);
        }

    }
}
 