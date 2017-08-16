using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace server
{
    [EnableCors("Dev")]
    [Route("api/[controller]")]
    public class HomeController : Controller
    {
        //// GET: /<controller>/
        //public IActionResult Index()
        //{
        //    return View();
        //}

        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "Hello", "World" };
        }
    }
}
