using Demo.Controllers.JsonModels;
using Microsoft.AspNetCore.Mvc;
using Demo.Utils;

namespace Demo.Controllers
{
    [Route("api/[controller]")]
    public class DemoController : Controller
    {
        [HttpPost("date")]
        public IActionResult ConvertDate([FromBody] Payload payload)
        {
            var date = Constants.GetLocalDate(payload.date.Value);
            return Ok(date);
        }
    }
}
