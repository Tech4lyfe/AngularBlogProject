using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AngularBlogWebAPI.Entities
{
    public class Comment
    {
        public int CommentId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTimeOffset? CreatedDate { get; set; }
        public Post Post { get; set; }
        public int PostId { get; set; }

        public Comment()
        {
           
        }

    }
}
