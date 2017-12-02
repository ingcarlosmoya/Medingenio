using Medingenio.Webapi.Context;
using Medingenio.Webapi.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Medingenio.Webapi.Tests.Controllers
{
    [TestClass]
    public class RegionControllerTest
    {
        private MedingenioContext _medingenioContext;

        [TestMethod]
        public void StatePost()
        {
            _medingenioContext = new MedingenioContext();

            var state = new State { Name = "Test State" };

            _medingenioContext.States.Add(state);
            _medingenioContext.SaveChanges();
        }

        [TestMethod]
        public void CityPost()
        {
            _medingenioContext = new MedingenioContext();

            var city = new City { Name = "Test State", StateId = 1};

            _medingenioContext.Cities.Add(city);
            _medingenioContext.SaveChanges();
        }
    }
}
