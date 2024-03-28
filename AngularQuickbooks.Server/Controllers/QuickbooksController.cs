using AngularQuickbooks.Server.Models;
using Intuit.Ipp.Core.Configuration;
using Intuit.Ipp.OAuth2PlatformClient;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Hosting;
using System;

namespace AngularQuickbooks.Server.Controllers
{
    [ApiController]
    [Route("api/quickbooks-online")]
    public class QuickbooksController : ControllerBase
    {
        private IQuickbooksOnline _qboCache;
        private OAuth2Client auth2Client;
        public QuickbooksController(IQuickbooksOnline qboCache) 
        {
            _qboCache = qboCache;
            auth2Client = new OAuth2Client(_qboCache.ClientId, _qboCache.ClientSecret, _qboCache.RedirectUrl, _qboCache.AppEnvironment);
        }

        [HttpGet("initiate-auth")]
        public ActionResult InitiateAuth()
        {
            List<OidcScopes> scopes = new List<OidcScopes>();
            scopes.Add(OidcScopes.Accounting);
            string authorizeUrl = auth2Client.GetAuthorizationURL(scopes);
            return Ok(Response<string>.Success(authorizeUrl));
        }
    }
}
