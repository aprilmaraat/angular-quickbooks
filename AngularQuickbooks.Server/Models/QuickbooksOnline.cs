using AngularQuickbooks.Server.Models;

namespace AngularQuickbooks.Server.Models
{
    public class QuickbooksOnline : IQuickbooksOnline
    {
        public QuickbooksOnline()
        {
            ClientId = String.Empty;
            ClientSecret = String.Empty;
            AppEnvironment = String.Empty;
            RedirectUrl = String.Empty;
        }

        public string ClientId { get; set; }
        public string ClientSecret { get; set; }
        public string AppEnvironment { get; set; }
        public string RedirectUrl { get; set; }
    }
}
