using Microsoft.AspNetCore.Mvc;
using visa_holder.Db;
using visa_holder.Model;

namespace visa_holder.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class VisaHolderController : ControllerBase
    {
    [HttpPost("visa_holder")]
    public IActionResult AddVisaHolder([FromBody] VisaHolder visaHolder)
    {
        try
        {
            StaticDb.visaHolders.Add(visaHolder);
            return Ok(new { message = "Record saved successfully" });
        }
        catch (Exception ex)
        {
            return BadRequest(new { message = "Failed to save record", error = ex.Message });
        }
    }

    //[HttpGet]
    //public List<VisaHolder> GetAll() => StaticDb.visaHolders;


    [HttpGet]
    public Result GetAll([FromQuery] int page = 1, [FromQuery] int pageSize = 10)
    {
        var totalRecords = StaticDb.visaHolders.Count;
        var totalPages = (int)Math.Ceiling(totalRecords / (double)pageSize);

        var pagedData = StaticDb.visaHolders
            .Skip((page - 1) * pageSize)
            .Take(pageSize)
            .ToList();

        Result result = new Result
        {
            currentPage = page,
            pageSize = pageSize,
            totalPages = totalPages,
            visaHolders = pagedData
        };

        return result;
    }




    [HttpPut("{id}")]
    public ActionResult<VisaHolder> Update(int id, [FromBody] VisaHolder updatedVisaHolder)
    {
        var visaHolder = StaticDb.visaHolders.FirstOrDefault(u => u.Id == id);
        if (visaHolder == null) return NotFound();

        visaHolder.visaHolderName = updatedVisaHolder.visaHolderName;
        visaHolder.dateOfBirth = updatedVisaHolder.dateOfBirth;
        visaHolder.visaStatus = updatedVisaHolder.visaStatus;
        visaHolder.visaType = updatedVisaHolder.visaType;
        return Ok(visaHolder);
    }

    [HttpDelete("{id}")]
    public Boolean Delete(int id)
    {
        var visaHolder = StaticDb.visaHolders.FirstOrDefault(u => u.Id == id);
        if (visaHolder == null) return false;

        StaticDb.visaHolders.Remove(visaHolder);
        return true;
    }
}
}
