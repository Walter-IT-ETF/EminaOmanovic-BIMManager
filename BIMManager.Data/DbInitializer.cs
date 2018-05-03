namespace BIMManager.Data
{
    public class DbInitializer
    {
        private static BIMManagerContext _context;

        public static void Initialize(BIMManagerContext context)
        {
            _context = context;
            Initialize();
        }
        private static void Initialize()
        {
            _context.Database.EnsureCreated();
        }
    }
}
