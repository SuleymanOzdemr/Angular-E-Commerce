using API.Data.DataContext;
using API.Data.DbModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
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

        [HttpGet("{id}")]
        public string GetProduct(int id)
        {
            return "tek urun";
        }

    }
}
 