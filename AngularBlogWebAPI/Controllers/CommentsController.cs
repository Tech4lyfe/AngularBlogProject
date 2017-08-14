using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AngularBlogWebAPI.Entities;
using AngularBlogWebAPI.DbContext;
using Microsoft.Ajax.Utilities;

namespace AngularBlogWebAPI.Controllers
{

    public class CommentsController : ApiController
    {
        AngularBlogDbContext db = new AngularBlogDbContext();

        // GET: api/Comments
        public IHttpActionResult Get()
        {
            try
            {
                var comments = db.Comments.ToList();
                return Ok(comments);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        // GET: api/Comments/5
        public IHttpActionResult Get(int id)
        {
            try
            {
                var comment = db.Comments.First(x => x.CommentId == id);
                if (comment == null)
                {
                    return NotFound();
                }
                return Ok(comment);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        // POST: api/Comments
        public IHttpActionResult Post([FromBody]Comment comment)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                var newCommentEntity = db.Comments.Add(comment);
                db.SaveChanges();

                return Ok(newCommentEntity);
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        // PUT: api/Comments/5
        public IHttpActionResult Put(int id, [FromBody]Comment comment)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                comment = db.Comments.First(x => x.CommentId == id);
                if (comment == null)
                {
                    return BadRequest("Comment cannot be null");
                }
                db.Comments.AddOrUpdate(comment);
                db.SaveChanges();
                return Ok();
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }

        // DELETE: api/Comments/5
        public IHttpActionResult Delete(int id)
        {
            try
            {
                var comment = db.Comments.First(x => x.CommentId == id);
                if (comment == null)
                {
                    return BadRequest("Comment cannot be null");
                }
                db.Comments.Remove(comment);
                db.SaveChanges();
                return Ok(new {message = "Deleted Comment"});
            }
            catch (Exception ex)
            {
                return InternalServerError(ex);
            }
        }
    }
}
