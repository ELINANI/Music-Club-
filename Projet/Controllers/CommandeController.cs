using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Projet.Models;

namespace Projet.Controllers
{
    public class CommandeController : Controller
    {
        public projetAspEntities db = new projetAspEntities();
        //
        //
        // GET: /Commande/
        public JsonResult listCmd()
        {
            var alls = db.View_1.ToList();

            return Json(alls,JsonRequestBehavior.AllowGet);
        }
	}
}