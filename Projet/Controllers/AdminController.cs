using Projet.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Projet.Controllers
{
    public class AdminController : Controller
    {
        public projetAspEntities db = new projetAspEntities();
        // GET: /Admin/
        public JsonResult Index()
        {
            var Admins = db.Admins.ToList();
            return Json(Admins,JsonRequestBehavior.AllowGet);
        }
        public JsonResult Details(int id)
        {
            var admin = db.Admins.Find(id);
            return Json(admin,JsonRequestBehavior.AllowGet );
        }
        [HttpPost]
        public JsonResult Create(Admin admin)
        {
            db.Admins.Add(admin);
            db.SaveChanges();
            return null;
        }
         [HttpPost]
        public JsonResult Edit(Admin admin)
        {
            db.Entry(admin).State = EntityState.Modified;
            db.SaveChanges();
            return null;
        }
         [HttpPost]
        public JsonResult Delete(int id )
         {
             var admin = db.Admins.Find(id);
             db.Admins.Remove(admin);
             db.SaveChanges();
             return null;
         }
         
	}
}