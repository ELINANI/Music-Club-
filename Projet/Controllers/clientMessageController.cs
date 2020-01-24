using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Projet.Models;

namespace Projet.Controllers
{
    public class clientMessageController : Controller
    {
        public projetAspEntities db = new projetAspEntities();
        //
        // GET: /clientMessage/
        public JsonResult Index()
        {
            var messages = db.cltMessages.ToList();
            return Json(messages,JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult Create(cltMessage cltMsg)
        {
            Random r = new Random();
            cltMsg.id = r.Next();
            db.cltMessages.Add(cltMsg);
            db.SaveChanges();
            return null;
        }
        [HttpPost]
        public JsonResult Delete(int id)
        {
            var cltMsg = db.cltMessages.Find(id);
            db.cltMessages.Remove(cltMsg);
            db.SaveChanges();
            return null;
        }

	}
}