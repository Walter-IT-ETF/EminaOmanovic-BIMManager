using BIMManager.Models.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace BIMManager.Data
{
    public class BIMManagerContext : IdentityDbContext
    {
        public BIMManagerContext(DbContextOptions<BIMManagerContext> options) : base(options) {}

        public DbSet<Project> Projects { get; set; }
        public DbSet<BIMModel> BIMModels { get; set; }
    }
}
