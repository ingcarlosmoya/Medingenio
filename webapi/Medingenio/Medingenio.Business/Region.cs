    using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace Medingenio.Business
{
    public class City
    {
        public string GetByState(int stateId)
        {
            var citiesJson = string.Empty;

            var cities = Data.Region.GetCitiesByState(stateId);

            if (cities != null && cities.Any())
                citiesJson = JsonConvert.SerializeObject(cities);

            return citiesJson;
        }
    }

    public class State
    {
        public string Get()
        {
            var statesJson = string.Empty;

            var states = Data.Region.GetStates();

            if (states != null && states.Any())
                statesJson = JsonConvert.SerializeObject(states);

            return statesJson;
        }
    }
}
