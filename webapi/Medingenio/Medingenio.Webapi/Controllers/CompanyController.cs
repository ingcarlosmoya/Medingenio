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
using Microsoft.AspNet.Identity.Owin;

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

        // GET: Company
        [HttpGet]
        [Route("MenuAuth")]
        public HttpResponseMessage GetMenuAuth(int id)
        {
            ApplicationUser user = HttpContext.Current.GetOwinContext().GetUserManager<ApplicationUserManager>().FindById(HttpContext.Current.User.Identity.GetUserId());
            if (user == null)
                return Request.CreateResponse(HttpStatusCode.OK, false);

            var menu = new Business.Menu();
            var result = menu.GetMenuAuthByCompany(user.CompanyId, id);

            return Request.CreateResponse(HttpStatusCode.OK, result);


        }

    }
}