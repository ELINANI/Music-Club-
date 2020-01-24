using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Projet.Models;
using System.Data.Entity;
using System.Data.SqlClient;


namespace Projet.Controllers
{
    public class ClientController : Controller
    {
        public static string codeClt2;
        SqlConnection con = new SqlConnection();
        SqlCommand cmd = new SqlCommand();
        SqlCommand cmd2 = new SqlCommand();
        SqlCommand cmd3 = new SqlCommand();
        SqlDataReader dr;
        public projetAspEntities db = new projetAspEntities();
        public JsonResult Index()

        {
            db.Configuration.ProxyCreationEnabled = false;
            var clients = db.Clients.ToList();
            return Json(clients, JsonRequestBehavior.AllowGet); 
           
        }
        public void pdd()
        {
            Response.Redirect("/#/homee");

        }
       
        public void cmdd()
        {
            Response.Redirect("/#/cmd");

        }
        public ActionResult error()
        {
            return View("Login");
        }
        public JsonResult Details(int id)
        {
            db.Configuration.ProxyCreationEnabled = false;
            var clt = db.Clients.Find(id);
            return Json(clt, JsonRequestBehavior.AllowGet);
        }
        void connectionStrong()
        {
            con.ConnectionString = "data source = MOWGLI ;database = projetAsp ;user=sa;pwd=123456;integrated security = false";
        }
        public ActionResult Login()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Verify(Client c )
        {
            connectionStrong();
            con.Open();
            cmd.Connection = con ;
            cmd.CommandText = " select count(*) from Client where email like '"+c.email+"' and  password like '"+c.password+"'";
            
            if(Convert.ToInt16(cmd.ExecuteScalar()) != 0)
            {
                cmd2.Connection = con;
                cmd2.CommandText = "select typee from Client where email like '" + c.email + "' and password like '" + c.password + "' ";
                String type = cmd2.ExecuteScalar().ToString();
                 if(type == "Client")
            {
                cmd3.Connection = con;
                cmd3.CommandText = "select codeclt from Client where email like '" + c.email + "' and password like '" + c.password + "' ";
                String codeClt = cmd3.ExecuteScalar().ToString();
                codeClt2 = codeClt;
                Session["codeClt"] = codeClt;
                pdd();
               
            }
            else

            {
                 if (type == "Admin")
                 {
                     
                     cmdd();
                 }
              
            }

            }
           
                ViewBag.message = "erreur";
                return View("Login");
  
        }
    [HttpPost]
        public JsonResult Create(Client c )
        {
            db.Configuration.ProxyCreationEnabled = false;
            db.Clients.Add(c);
            c.typee = "Client";
            db.SaveChanges();
            return null;
        }
    [HttpPost]
    public JsonResult Edit(Client Client)
    {
        db.Configuration.ProxyCreationEnabled = false;
        db.Entry(Client).State = EntityState.Modified;
        Client.typee = "Client";
        db.SaveChanges();
        return Json(null);
    }
    [HttpPost]
    public JsonResult Delete(int id)
    {
        db.Configuration.ProxyCreationEnabled = false;
        var client = db.Clients.Find(id);
        db.Clients.Remove(client);
        db.SaveChanges();
        return Json(null);
    }
	}
}