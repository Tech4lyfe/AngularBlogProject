using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AngularBlogWebAPI.Entities;
using AngularBlogWebAPI.DbContext;

namespace AngularBlogWebAPI.Controllers
{
   
    public class CommentsController : ApiController
    {
       AngularBlogDbContext db = new AngularBlogDbContext();

        // GET: api/Comments
        public IEnumerable<Comment> Get()
        {
            var comments = db.Comments.ToList();
            return comments;
        }

        // GET: api/Comments/5
        public Comment Get(int id)
        {
            var comment = db.Comments.First(x => x.CommentId == id);
            return comment;
        }

        // POST: api/Comments
        public void Post([FromBody]Comment comment)
        {
            
              db.Comments.Add(comment);
            db.SaveChanges();

        }

        // PUT: api/Comments/5
        public void Put(int id, [FromBody]Comment comment)
        {
             comment = db.Comments.First(x => x.CommentId == id);
            db.Comments.AddOrUpdate(comment);
            db.SaveChanges();
        }

        // DELETE: api/Comments/5
        public void Delete(int id)
        {
            var comment = db.Comments.First(x => x.CommentId == id);
            db.Comments.Remove(comment);
            db.SaveChanges();
        }
    }
}
