using System.Collections.Generic;
using System.Data.Entity;
using Medingenio.Model;

namespace Medingenio.Data.Context
{
    public class RegionContext : DbContext
    {
        public RegionContext() : base("MedingenioConnection")
        {
            Database.SetInitializer(new RegionDbInitializer());
        }

        public DbSet<Model.City> Cities { get; set; }
        public DbSet<Model.State> States { get; set; }
    }

    public class RegionDbInitializer : DropCreateDatabaseAlways<RegionContext>
    {
        protected override void Seed(RegionContext context)
        {
            base.Seed(context);
        }
    }
}
