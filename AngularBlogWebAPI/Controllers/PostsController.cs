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
        public IHttpActionResult Get()
        {
            try
            {
                var posts = db.Posts.ToList();
                return Ok(posts);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        // GET: api/Posts/5
        public IHttpActionResult Get(int id)
        {
            try
            {
                var post = db.Posts.First(x => x.PostId == id);
                if (post == null)
                {
                    return NotFound();
                }
                return Ok(post);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }

        }

        // POST: api/Posts
        public IHttpActionResult Post([FromBody] Post post)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                var newPostEntity = db.Posts.Add(post);
                db.SaveChanges();

                return Ok(newPostEntity);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        // PUT: api/Posts/5
        public IHttpActionResult Put(int id, [FromBody]string value)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState); 
                }
                var post = db.Posts.First(x => x.PostId == id);
                if (post == null)
                {
                    return BadRequest("Post cannot be null");
                }
                db.Posts.AddOrUpdate(post);
                db.SaveChanges();
                return Ok();
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        // DELETE: api/Posts/5

        public IHttpActionResult Delete(int id)
        {
            try
            {
                var post = db.Posts.First(x => x.PostId == id);
                if (post == null)
                {
                    return BadRequest("Post cannot be null");
                }
                db.Posts.Remove(post);
                db.SaveChanges();
                return Ok(new {message = "Deleted Post"});
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }
    }
}
