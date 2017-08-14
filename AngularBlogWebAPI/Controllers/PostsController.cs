using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AngularBlogWebAPI.DbContext;
using AngularBlogWebAPI.Entities;
 using System.Data.Entity;
using System.Data.Entity.Migrations;

namespace AngularBlogWebAPI.Controllers
{
    public class PostsController : ApiController
    {
        AngularBlogDbContext db = new AngularBlogDbContext();
        // GET: api/Posts
        public IEnumerable<Post> Get()
        {
            var posts = db.Posts.ToList();
            return posts;
        }

        // GET: api/Posts/5
        public Post Get(int id)
        {
            var post = db.Posts.First(x => x.PostId == id);
            return post;
            
        }

        // POST: api/Posts
        public IHttpActionResult Post([FromBody] Post post)
        {
          var newPostEntity =  db.Posts.Add(post);
            db.SaveChanges();

            return Ok(newPostEntity);
        }

        // PUT: api/Posts/5
        public void Put(int id, [FromBody]string value)
        {
            var post = db.Posts.First(x => x.PostId == id);
            db.Posts.AddOrUpdate(post);
            db.SaveChanges();
        }

        // DELETE: api/Posts/5
       
        public IHttpActionResult Delete(int id)
        {
            var post = db.Posts.First(x => x.PostId == id);
            db.Posts.Remove(post);
            db.SaveChanges();
            return Ok(new {message="Delete Post"});
        }
    }
}
