using server.src;
using Microsoft.EntityFrameworkCore;
using server.src.Task1;
using Npgsql;

namespace server
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
            builder.Services.AddCors(options => {
                options.AddPolicy(
                    name: MyAllowSpecificOrigins, 
                    policy  => {policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();}
                );
            });

            var dataSourceBuilder = new NpgsqlDataSourceBuilder(/* TODO: ADD CONN STRING */);
            dataSourceBuilder.MapEnum<Task1.Theme>();
            var dataSource = dataSourceBuilder.Build();
            builder.Services.AddDbContext<FlashDbContext>(options => options.UseNpgsql(dataSource));

            builder.Services.AddScoped<IUserHandler, UserHandler>();
            builder.Services.AddScoped<IDatabaseManager, DatabaseManager>();

            builder.Services.AddControllers();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment()) {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();
            app.UseCors(MyAllowSpecificOrigins);
            
            app.UseHsts();

            app.MapControllers();

            app.Run();
        }
    }
}