using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Projet.Models;

namespace Projet.Controllers
{
    public class sousCategorieController : Controller
    {
        public projetAspEntities db = new projetAspEntities();
        public JsonResult Index()
        {
            db.Configuration.ProxyCreationEnabled = false;
            var sousCat = db.sousCategories.ToList();
            return Json(sousCat,JsonRequestBehavior.AllowGet
                );
        }
        public JsonResult Details(int id)
        {
            db.Configuration.ProxyCreationEnabled = false;
            var sousCat = db.sousCategories.Find(id);
            return Json(sousCat, JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult Create(sousCategorie souCat)
              {
                  db.sousCategories.Add(souCat);
                  db.SaveChanges();
                  return null;

        }
        [HttpPost ]
        public JsonResult Edit(sousCategorie sousCat)
        {
            db.Entry(sousCat).State = System.Data.Entity.EntityState.Modified;
            db.SaveChanges();
            return null;
        }
        [HttpPost]
        public JsonResult Delete(int id)
        {
            var sousCat = db.sousCategories.Find(id);
            db.sousCategories.Remove(sousCat);
            db.SaveChanges();
            return null;
        }
	}
}