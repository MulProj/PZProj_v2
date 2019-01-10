using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace WebApplication3.Models.Database
{
    public class DatabaseContext : IdentityDbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
        {

        }

        public DbSet<House> Houses { get; set; }
        public DbSet<Sensor> Sensors { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<TemperatureSensor>();
            builder.Entity<HumiditySensor>();
            builder.Entity<SmokeSensor>();
            builder.Entity<MotionSensor>();

            base.OnModelCreating(builder);  
        }
    }
}
