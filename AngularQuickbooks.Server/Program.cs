using AngularQuickbooks.Server.Models;

var builder = WebApplication.CreateBuilder(args);

QuickbooksOnline? quickBooksOnlineCache = builder.Configuration.GetSection("QuickbooksOnline").Get<QuickbooksOnline>();

// Add services to the container.
builder.Services.AddSingleton<IQuickbooksOnline>(quickBooksOnlineCache);

builder.Services.AddControllers();
builder.Services.AddCors();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();
app.UseCors(t => t.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
