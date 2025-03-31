using Microsoft.EntityFrameworkCore;
using server.src.Achievements;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;

namespace server.src.Achievements
{
    public class AchievementService
    {
        private readonly FlashDbContext _context;

        private static readonly List<Achievement> _achievements = new List<Achievement>
        {
            new Achievement
            {
                Id = 1,
                Name = "First Blood",
                Description = "Complete your first game.",
                TotalRequired = 1,
                Progress = 0,
                IsUnlocked = false
            },
            new Achievement
            {
                Id = 2,
                Name = "Jack of All Trades",
                Description = "Try every game mode.",
                TotalRequired = 2,
                Progress = 0,
                IsUnlocked = false
            }
        };

        public AchievementService(FlashDbContext context)
        {
            _context = context;
        }

        public async Task<List<Achievement>> GetUserAchievementsAsync(string userId)
        {
            var userAchievements = await _context.UserAchievements
                .Where(ua => ua.UserId ==userId)
                .ToListAsync();
            var result = _achievements.Select(a => new Achievement
            {
                Id = a.Id,
                Name = a.Name,
                Description = a.Description,
                TotalRequired = a.TotalRequired,
                Progress = 0,
                IsUnlocked = false
            }).ToList();

            foreach (var userAchievement in userAchievements)
            {
                var achievement = result.FirstOrDefault(a => a.Id == userAchievement.AchievementId);
                if (achievement != null)
                {
                    achievement.Progress = userAchievement.Progress;
                    achievement.IsUnlocked = userAchievement.IsUnlocked;
                }
            }

            return result;
        }

        public async Task CheckFirstGameAchievementAsync(string userId)
        {
            var firstBloodId = 1;
            var existingAchievement = await _context.UserAchievements
                .FirstOrDefaultAsync(ua => ua.UserId == userId && ua.AchievementId == firstBloodId);
            if (existingAchievement == null)
            {
                var userAchievement = new UserAchievement
                {
                    UserId = userId,
                    AchievementId = firstBloodId,
                    Progress = 1,
                    IsUnlocked = true,
                    UnlockedAt = DateTime.UtcNow
                };

                _context.UserAchievements.Add(userAchievement);
                await _context.SaveChangesAsync();
            }
            else if (!existingAchievement.IsUnlocked)
            {
                existingAchievement.Progress = 1;
                existingAchievement.IsUnlocked = true;
                existingAchievement.UnlockedAt = DateTime.UtcNow;
                await _context.SaveChangesAsync();
            }
        }

        public async Task CheckGameModesAchievementAsync(string userId, int taskId)
        {
            var jackOfAllTradesId = 2;
  
            var existingAchievement = await _context.UserAchievements
                .FirstOrDefaultAsync(ua => ua.UserId == userId && ua.AchievementId == jackOfAllTradesId);
            
            var playedTaskIds = await _context.UserTaskHistories
                .Where(h => h.Id.StartsWith(userId))
                .Select(h => h.TaskId)
                .Distinct()
                .ToListAsync();

            if (!playedTaskIds.Contains(taskId))
            {
                playedTaskIds.Add(taskId);
            }
            
            int progress = playedTaskIds.Count;
            bool isComplete = progress >= 3; 
            
            if (existingAchievement == null)
            {
                var userAchievement = new UserAchievement
                {
                    UserId = userId,
                    AchievementId = jackOfAllTradesId,
                    Progress = progress,
                    IsUnlocked = isComplete,
                    UnlockedAt = isComplete ? DateTime.UtcNow : DateTime.MaxValue
                };
                
                _context.UserAchievements.Add(userAchievement);
                await _context.SaveChangesAsync();
            }
            else if (!existingAchievement.IsUnlocked)
            {
                existingAchievement.Progress = progress;
                
                if (isComplete)
                {
                    existingAchievement.IsUnlocked = true;
                    existingAchievement.UnlockedAt = DateTime.UtcNow;
                }
                await _context.SaveChangesAsync();
            }
            // achievement unlocked -> do nothing
        }
    }
}