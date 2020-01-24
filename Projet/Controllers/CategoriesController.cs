using Projet.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data.Entity;

namespace Projet.Controllers
{
    public class CategoriesController : Controller
    {
        public projetAspEntities db = new projetAspEntities();
        //
        // GET: /Categories/
        public JsonResult Index()
        {
            db.Configuration.ProxyCreationEnabled = false;
            var categories = db.Categories.ToList();
            return Json(categories,JsonRequestBehavior.AllowGet);
        }
        public JsonResult getCatId()
        {
            db.Configuration.ProxyCreationEnabled = false;
            var getCatId = db.Categories.ToList();
            return Json(getCatId, JsonRequestBehavior.AllowGet);
        }
        public JsonResult Details(int id)
        {
            db.Configuration.ProxyCreationEnabled = false;
            var categorie  = db.Categories.Find(id);
            return Json(categorie, JsonRequestBehavior.AllowGet);

        }
        [HttpPost]
        public JsonResult Create (Categorie cat)
        {
            db.Configuration.ProxyCreationEnabled = false;
            db.Categories.Add(cat);
            db.SaveChanges();
            return null;
        }
        [HttpPost]
        public JsonResult Edit(Categorie cat )
        {
            db.Configuration.ProxyCreationEnabled = false;
            db.Entry(cat).State = EntityState.Modified;
            db.SaveChanges();
            return null;
        }
        [HttpPost]
        public JsonResult Delete(int id )
        {
            db.Configuration.ProxyCreationEnabled = false;
            var categorie = db.Categories.Find(id);
            db.Categories.Remove(categorie);
            db.SaveChanges();
            return null;
        }

	}
}