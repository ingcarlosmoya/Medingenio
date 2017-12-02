using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Migrations;
using System.Linq;
using Medingenio.Model;

namespace Medingenio.Data.Context
{
    public class MedingenioContext : DbContext
    {
        public MedingenioContext() : base("MedingenioConnection")
        {
            Database.SetInitializer(new MedingenioDbInitializer());
            Database.Initialize(true);
        }

        public DbSet<Model.City> Cities { get; set; }
        public DbSet<Model.State> States { get; set; }
        public DbSet<Model.Company> Companies { get; set; }
        public DbSet<Model.Menu> Menus { get; set; }
    }

    public class MedingenioDbInitializer : CreateDatabaseIfNotExists<MedingenioContext>
    {

        protected override void Seed(MedingenioContext context)
        {
            SeedStates(context);
            SeedCities(context);
            SeedCompanies(context);
            SeedMenu(context);
            SeedMenuCompanies(context);

            base.Seed(context);
        }
        
        private static void SeedMenuCompanies(MedingenioContext context)
        {
            var menu = context.Menus.FirstOrDefault(m => m.Name == "Menu 1");
            var company = context.Companies.FirstOrDefault(m => m.Name == "Company 1");


            if (menu == null || company == null)
                return;

            menu.Companies.Add(company);
            context.Menus.AddOrUpdate(x => x.Id,
                menu);
            context.SaveChanges();
        }

        private static void SeedMenu(MedingenioContext context)
        {
            context.Menus.AddOrUpdate(x => x.Id,
                   new Model.Menu() { Name = "Menu 1", Description = "The Menu 1" },
                   new Model.Menu() { Name = "Menu 1", Description = "The Menu 2" },
                   new Model.Menu() { Name = "Menu 1", Description = "The Menu 3" }
                   );

            context.SaveChanges();
        }

        private static void SeedCities(MedingenioContext context)
        {
            var state = context.States.FirstOrDefault(c => c.Name == "Antioquia");
            if (state != null)
            {
                context.Cities.AddOrUpdate(x => x.Id,
                    new City() { Name = "Medellin", StateId = state.Id },
                    new City() { Name = "Envigado", StateId = state.Id }
                    );
            }

            state = context.States.FirstOrDefault(c => c.Name == "Bogotá");
            if (state != null)
            {
                context.Cities.AddOrUpdate(x => x.Id,
                    new City() { Name = "Bogotá D.C.", StateId = state.Id }
                    );
            }

            context.SaveChanges();
        }

        private static void SeedStates(MedingenioContext context)
        {
            context.States.AddOrUpdate(x => x.Id,
                new State() { Name = "Antioquia" },
                new State() { Name = "Bogotá" },
                new State() { Name = "Cundinamarca" });
            context.SaveChanges();
        }

        private static void SeedCompanies(MedingenioContext context)
        {
            var bogota = context.Cities.FirstOrDefault(c => c.Name == "Bogotá D.C.");
            if (bogota != null)
                context.Companies.AddOrUpdate(x => x.Id,
                    new Model.Company()
                    {
                        Address = "Calle 1 Carrera 1",
                        CityId = bogota.Id,
                        Email = "company1@medingenio.com",
                        LegalId = "900123456-0",
                        Name = "Company 1",
                        Phone = "1234567890"
                    },
                    new Model.Company()
                    {
                        Address = "Calle 2 Carrera 2",
                        CityId = 1,
                        Email = "company2@medingenio.com",
                        LegalId = "900123456-1",
                        Name = "Company 2",
                        Phone = "2345678901"
                    });

            context.SaveChanges();
        }
    }
}
