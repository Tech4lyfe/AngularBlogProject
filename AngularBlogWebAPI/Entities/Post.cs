using System;
using System.CodeDom;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AngularBlogWebAPI.Entities
{
    public class Post
    {
        [Required]
        public int PostId { get; set; }
        [Required]
        public string Content { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string Author { get; set; }
        public DateTimeOffset? CreatedDate { get; set; }
        public List<Comment> Comments { get; set; }

        public Post()
        {
            
        }

    }
}
