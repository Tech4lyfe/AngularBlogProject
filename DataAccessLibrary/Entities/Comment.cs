using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLibrary.Entities
{
    public class Comment
    {
        public int CommentId { get; set; }
        public string Name { get; set; }
        public string description { get; set; }
        public DateTime CreatedDate { get; set; }
        public virtual Post Post { get; set; }
        public int PostId { get; set; }

    }
}
