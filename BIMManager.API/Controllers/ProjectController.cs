using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using BIMManager.Data;
using Microsoft.EntityFrameworkCore;
using BIMManager.Models.Entities;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;
using System.Data.SqlClient;
using System.Data;

namespace BIMManager.API.Controllers
{
    [Produces("application/json")]
    [Route("api/project")]
    public class ProjectController : Controller
    {

        /*
        
        [HttpGet("getAll")]
        public List<Project> GetAll()
        {

            string connectString = @"uid=root;password=sql123;server=localhost; database=bimmanager_db;";

            MySqlDataReader MyReader = null;
            using (MySqlConnection cnn = new MySqlConnection(connectString))
            {
                cnn.Open();
                string sql = "SELECT * FROM bimmanager_db.projects;";
                MySqlCommand cmd = new MySqlCommand(sql, cnn);
                MyReader = cmd.ExecuteReader();
                List<Project> list = new List<Project>();
                while (MyReader.Read())
                {
                    Project a = new Project();
                    a.Id = Convert.ToInt32(MyReader["Id"]);
                    a.Name = MyReader["Name"].ToString();
                    a.Status = MyReader["Status"].ToString();
                    a.Version = Convert.ToInt32(MyReader["version"]);
                    //var h = MyReader["bimModels"].ToString();
                    list.Add(a);
                }

                MyReader.Close();
                return list;
            }
        }
        */
        
        private readonly BIMManagerContext _dbContext;

        public ProjectController(BIMManagerContext context)
        {
            _dbContext = context;
        }

        [HttpGet("getAll")]
        public IActionResult GetAll()
        {
            var projects = _dbContext.Projects.ToList();
            if (projects.Count != 0)
                return Ok(new
                {
                    status = true,
                    data = projects
                });

            return NotFound(new
            {
                status = false,
                message = "No projects to show."
            });
        }
    }
}