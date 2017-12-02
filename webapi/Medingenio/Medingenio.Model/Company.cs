using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Medingenio.Model
{
    public class Company
    {

        public Company()
        {
            this.Menus = new HashSet<Menu>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        [Display(Name = "Address")]
        public string Address { get; set; }

        public City City { get; set; }

        [Required]
        [ForeignKey("City")]
        public int CityId { get; set; }

        [Required]
        [Display(Name = "Email")]
        [EmailAddress(ErrorMessage = "Invalid Email Address")]
        public string Email { get; set; }

        [Required]
        [Display(Name = "Legal Identification")]
        public string LegalId { get; set; }

        [Required]
        [Display(Name = "Name")]
        public string Name { get; set; }

        [Required]
        [Display(Name = "Phone")]
        public string Phone { get; set; }

        public virtual ICollection<Menu> Menus { get; set; }
    }

    public class Menu
    {

        public Menu()
        {
            this.Companies = new HashSet<Company>();
        }

        [Key]
        [DatabaseGenerated((DatabaseGeneratedOption.Identity))]
        public int Id { get; set; }

        [Required]
        [StringLength(30, MinimumLength = 3, ErrorMessage = "The menu must have at least 3 characters")]
        public string Name { get; set; }

        public string Description { get; set; }

        [ForeignKey("Parent")]
        public int? ParentId { get; set; }

        public virtual Menu Parent { get; set; }

        public virtual ICollection<Company> Companies { get; set; }
    }
}
