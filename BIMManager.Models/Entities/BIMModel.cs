using System;
using System.Collections.Generic;
using System.Text;

namespace BIMManager.Models.Entities
{
    public class BIMModel : IBaseModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Url { get; set; }
        public int ProjectId { get; set; }
        public Project Project { get; set; }
    }
}
