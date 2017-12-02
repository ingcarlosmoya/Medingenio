using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace Medingenio.Business
{
    public class Company
    {
        public bool CheckById(int companyId)
        {
            return Data.Company.Get(companyId) != null;
        }
    }

    public class Menu
    {
        public string GetByCompany(int companyId)
        {
            var menuJson = string.Empty;
            var menu = new List<Model.Menu>();

            var dataMenu = Data.Menu.GetByCompany(companyId);

            if (dataMenu == null || !dataMenu.Any())
                return menuJson;


            dataMenu.ForEach(m => menu.Add(new Model.Menu()
            {
                Description = m.Description,
                Id = m.Id,
                Name = m.Name,
                ParentId = m.ParentId
            }));

            menuJson = JsonConvert.SerializeObject(menu);

            return menuJson;
        }

        public bool GetMenuAuthByCompany(int companyId, int id)
        {
            var menu = Data.Menu.GetByCompany(companyId);
            return menu != null && menu.Any() && menu.Any(m => m.Id == id);
        }
    }
}
