﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.Net.Http;
using System.Web.Http;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApp1
{
    public class UnipediaController : ApiController
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }
    }
}
