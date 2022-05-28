using API.Core.DbModels.Identity;
using API.Infrastructure.DataContext;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Threading.Tasks;

namespace API
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        //public static async Task Main(string[] args)
        //{
        //   var host = CreateHostBuilder(args).Build();
        //    using (var scope = host.Services.CreateScope())
        //    {
        //        var services = scope.ServiceProvider;
        //        var loggerFactory = services.GetRequiredService<ILoggerFactory>();

        //        try
        //        {
        //            var userManager = services.GetRequiredService<UserManager<AppUser>>();
        //            var identityContext = services.GetRequiredService<StoreContext>();
        //            await identityContext.Database.MigrateAsync();
        //            await AppIdentityDbContextSeed.SeedUserAsync(userManager);


        //        }
        //       catch (Exception ex)
        //        {
        //            var logger = loggerFactory.CreateLogger<Program>();
        //            logger.LogError(ex, "migration esnas�nda bir hata olu�tu.");
        //        }
        //    }
        //}
        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
