using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AngularBlogWebAPI.Entities
{
    public class Comment
    {
        [Required]
        public int CommentId { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Description { get; set; }
        public DateTimeOffset? CreatedDate { get; set; }
        public Post Post { get; set; }
        [Required]
        public int PostId { get; set; }

        public Comment()
        {
           
        }

    }
}
