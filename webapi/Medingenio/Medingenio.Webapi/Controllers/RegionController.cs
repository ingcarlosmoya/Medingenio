using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.UI.WebControls;

namespace Medingenio.Webapi.Controllers
{
    [RoutePrefix("api/Region")]
    public class RegionController : ApiController
    {
        // GET: api/region/citiesbystate
        [HttpGet]
        [Route("CitiesByState")]
        public HttpResponseMessage GetCitiesByState(int id)
        {
            var city = new Business.City();
            var result = city.GetByState(id);
            return Request.CreateResponse(HttpStatusCode.OK, result);
        }

        // GET: api/region/getstates
        [HttpGet]
        [Route("States")]
        public HttpResponseMessage GetStates()
        {
            var state = new Business.State();
            var result = state.Get();
            return Request.CreateResponse(HttpStatusCode.OK, result);
        }
    }
}