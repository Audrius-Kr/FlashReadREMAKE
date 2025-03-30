using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using server.src.Achievements;
using System.Security.Claims;
using System.Threading.Tasks;

namespace server.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class AchievementController : ControllerBase
    {
        private readonly AchievementService _achievementService;

        public AchievementController(AchievementService achievementService)
        {
            _achievementService = achievementService;
        }

        [HttpGet]
        public async Task<IActionResult> GetUserAchievements()
        {
            var userEmail = User.FindFirst(ClaimTypes.Email)?.Value;
            if (string.IsNullOrEmpty(userEmail))
            {
                return Unauthorized("User not authenticated");
            }

            var achievements = await _achievementService.GetUserAchievementsAsync(userEmail);
            return Ok(achievements);
        }
    }
}