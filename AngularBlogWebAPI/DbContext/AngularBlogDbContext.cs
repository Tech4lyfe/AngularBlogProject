using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AngularBlogWebAPI.Entities;


namespace AngularBlogWebAPI.DbContext
{
    class AngularBlogDbContext : System.Data.Entity.DbContext
    {
        public DbSet<Post> Posts { get; set; }
        public DbSet<Comment> Comments { get; set; }
    }
}
