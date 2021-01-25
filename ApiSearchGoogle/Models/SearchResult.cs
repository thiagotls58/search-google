namespace ApiSearchGoogle.Models
{
    public class SearchResult
    {
        private string _titulo;
        private string _link;

        public SearchResult(string titulo, string link)
        {
            _titulo = titulo;
            _link = link;
        }

        public string Titulo 
        {
            get { return _titulo; }
        }

        public string Link 
        { 
            get { return _link; } 
            
        }
    }
}
