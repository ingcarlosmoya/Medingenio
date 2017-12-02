using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using Medingenio.Webapi.Models;
using Microsoft.AspNet.Identity;

namespace Medingenio.Webapi.Controllers
{
    [RoutePrefix("api/Company")]
    public class CompanyController : ApiController
    {
        // GET: Company
        [HttpGet]
        [Route("MenuByCompany")]
        public HttpResponseMessage GetMenuByCompany(int id)
        {
            var menu = new Business.Menu();
            var result = menu.GetByCompany(id);
            return Request.CreateResponse(HttpStatusCode.OK, result);
        }


    }
}