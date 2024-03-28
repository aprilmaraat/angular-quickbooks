namespace AngularQuickbooks.Server.Models
{
    public interface IQuickbooksOnline
    {
        public string ClientId { get; set; }
        public string ClientSecret { get; set; }
        public string AppEnvironment { get; set; }
        public string RedirectUrl { get; set; }
    }
}
