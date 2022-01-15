using Friends.Core.Entities;
using Friends.Core.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Friends.Core
{
    public class FriendsDbContext : IdentityDbContext<User, IdentityRole<Guid>, Guid>
    {
        public FriendsDbContext(DbContextOptions<FriendsDbContext> options) : base(options)
        {

        }
        public DbSet<RefreshToken> RefreshTokens { get; set; }
    }
}
