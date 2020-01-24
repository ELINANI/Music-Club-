using Projet.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;


namespace Projet.Controllers
{
    public class commande2Controller : Controller
    {
        public static int val ;
        
        public projetAspEntities db = new projetAspEntities();
        //
        // GET: /commande2/
        public JsonResult Create(Commande cmd)
     {
         db.Configuration.ProxyCreationEnabled = false;
             Random r = new Random();
             val = r.Next();
             db.Configuration.ProxyCreationEnabled = false;
             cmd.idCmd = val;
             cmd.idPrd = ProduitController.idPrd;
             cmd.codeClt = Convert.ToInt16(ClientController.codeClt2);
             db.Commandes.Add(cmd);
             db.SaveChanges();
             return null;
        }

       
	}
}