namespace visa_holder.Model
{
    public class User
    {
         public int Id { get; set; }
         public string Username { get; set; } = string.Empty; // Initialized to avoid null
         public string Password { get; set; } = string.Empty;
    }
}
