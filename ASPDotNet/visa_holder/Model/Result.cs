using Microsoft.AspNetCore.Mvc.RazorPages;

namespace visa_holder.Model
{
    public class Result
    {
        public int currentPage { get; set; }

        public int pageSize { get; set; }

        public int totalPages { get; set; }

       public List<VisaHolder> visaHolders { get; set; } = new();
    }
}
