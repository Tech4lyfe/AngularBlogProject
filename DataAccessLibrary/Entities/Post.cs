using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLibrary.Entities
{
    public class Post
    {
        public int PostId { get; set; }
        public string Content { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public DateTime CreatedDate { get; set; }
        public virtual List<Comment> Comments { get; set; }

    }
}
