using API.Core.DbModels.Identity;
using Microsoft.AspNetCore.Identity;
using System.Linq;
using System.Threading.Tasks;

namespace API.Infrastructure.DataContext
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUserAsync(UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var user = new AppUser
                {
                    DisplayName = "suleyman",
                    Email = "suleymanoz385@gmail.com",
                    UserName = "suleymanoz385@gmail.com",
                    Adress = new Address
                    {
                        FirstName = "Suleyman",
                        LastName = "Ozdemir",
                        Street = "Batman Cad",
                        City = "Batman",
                        State = "TR",
                        ZipCode = "72000"
                    }
                };
              await  userManager.CreateAsync(user, "Mermer.123");
            }
        }

    }
}
