using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Medingenio.Data.Context;

namespace Medingenio.Data
{
    public static class Company
    {
        public static Model.Company Get(int companyId)
        {
            Model.Company company;

            using (var context = new MedingenioContext())
            {
                company = context.Companies.FirstOrDefault(c => c.Id == companyId);
            }

            return company;
        }
    }

    public static class Menu
    {
        public static List<Model.Menu> GetByCompany(int companyId)
        {
            List<Model.Menu> menus;

            using (var context = new MedingenioContext())
            {
                menus = context.Menus.Where(m => m.Companies.Any(c => c.Id == companyId)).ToList();
            }

            return menus;
        }
    }
}
