using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using Medingenio.Webapi.Models;
using Microsoft.AspNet.Identity;

namespace Medingenio.Webapi.Controllers
{
    public class CompanyController : ApiController
    {
        // GET: Company
        [Authorize]
        public async Task<IHttpActionResult> Post()
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            return Ok();
        }


    }
}