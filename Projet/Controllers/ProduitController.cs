using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Projet.Models;
using System.Data.Entity;
using System.IO;

namespace Projet.Controllers
{
    public class ProduitController : Controller
    {
        public static int idPrd;
        public projetAspEntities db = new projetAspEntities();
        public JsonResult Index()
        {
            db.Configuration.ProxyCreationEnabled = false;
            var produits = db.Produits.ToList();
            return Json(produits,JsonRequestBehavior.AllowGet);
        }
        public void pdd()
        {
            Response.Redirect("/#/prd");
            
        }
        public JsonResult Details(int id)
        {
            db.Configuration.ProxyCreationEnabled = false;
            var produit = db.Produits.Find(id);
            idPrd = produit.codePrd;
            return Json(produit, JsonRequestBehavior.AllowGet);
        }
        public ActionResult ajouter()
        {
            return View();
        }
        [HttpPost]
        public JsonResult Create(Produit prd)
        {
            db.Configuration.ProxyCreationEnabled = false;
            db.Produits.Add(prd);
            db.SaveChanges();
            return null;
        }
        [HttpPost]
        public JsonResult Edit(Produit prd)
        {
            db.Entry(prd).State = EntityState.Modified;
            db.SaveChanges();
            return null;

        }
        [HttpPost]
        public JsonResult Delete(int id)
        {
            var prd = db.Produits.Find(id);
            db.Produits.Remove(prd);
            db.SaveChanges();
            return null;
        }
        [HttpPost]
        public void ajouterpd(Produit prd, HttpPostedFileBase fichier)
        {
            db.Configuration.ProxyCreationEnabled = false;
            string chemin_sans_ext = Path.GetFileNameWithoutExtension(fichier.FileName);
            string FileExtension = Path.GetExtension(fichier.FileName);
            string nom_complet = chemin_sans_ext.Trim() + "_" + DateTime.Now.ToString("yy-mm-dd-mm-ss") + FileExtension;
            string path = Path.Combine(Server.MapPath("~/uploaded_images"), nom_complet);
            fichier.SaveAs(path);
            prd.image = nom_complet;
            db.Produits.Add(prd);
            db.SaveChanges();
            //return RedirectToRoute("/prd");
            pdd();
        }

	}
}