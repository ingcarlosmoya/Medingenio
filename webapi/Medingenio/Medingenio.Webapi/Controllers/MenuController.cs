using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace Medingenio.Webapi.Controllers
{
    public class MenuController : ApiController
    {
        [Authorize]
        public string Get()
        {
            return "is authorized!";
        }
    }
}