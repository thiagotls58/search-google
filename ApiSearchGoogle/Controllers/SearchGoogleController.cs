using ApiSearchGoogle.Models;
using HtmlAgilityPack;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace ApiSearchGoogle.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SearchGoogleController : ControllerBase
    {
        // GET: api/SearchGoogle/santos
        [HttpGet("{query}")]
        public async Task<SearchResult> Search(string query)
        {

            var doc = new HtmlWeb().Load($"https://www.google.com/search?q={query}");

            HtmlNodeCollection allElementsWithClassG = doc.DocumentNode.SelectNodes("//div[@class='g']");

            HtmlNode htmlNode = allElementsWithClassG.FirstOrDefault();

            if (htmlNode == null)
            {
                return new SearchResult("", "");
            }

            htmlNode = htmlNode.Descendants("a").FirstOrDefault();

            if (htmlNode == null)
            {
                return new SearchResult("", "");
            }

            string titulo = htmlNode.InnerText;
            string link = htmlNode.Attributes["href"].Value.Replace("/url?q=", "");
            return new SearchResult(titulo, link);
        }
    }
}
