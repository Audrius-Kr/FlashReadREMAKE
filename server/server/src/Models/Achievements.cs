namespace server.src.Achievements
{
    public class Achievement
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Progress { get; set; }
        public int TotalRequired { get; set; }
        public bool IsUnlocked { get; set; }
    }

    public class UserAchievement
    {
        public string UserId { get; set; }
        public int AchievementId { get; set; }
        public int Progress { get; set; }
        public bool IsUnlocked { get; set; }
        public DateTime UnlockedAt { get; set; }
    }
}