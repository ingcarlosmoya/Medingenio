using System;
using System.Collections.Generic;
using System.Linq;
using Medingenio.Data.Context;

namespace Medingenio.Data
{



    public static class Region  
    {

        public static List<Model.City> GetCitiesByState(int stateId)
        {
            List<Model.City> cities;

            using (var context = new RegionContext())
            {
               cities = context.Cities.Where(c => c.StateId == stateId).ToList();
            }

            return cities;
        }

        public static List<Model.State> GetStates()
        {
            List<Model.State> states;

            using (var context = new RegionContext())
            {
                states = context.States.ToList();
            }

            return states;
        }
    }

}
