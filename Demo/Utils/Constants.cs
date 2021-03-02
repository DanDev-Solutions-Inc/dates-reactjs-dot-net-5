using System;

namespace Demo.Utils
{
    public static class Constants {

        public static DateTime GetLocalDate(DateTime date)
        {
            try
            {
                return (date.Kind != DateTimeKind.Local) ? TimeZoneInfo.ConvertTimeFromUtc(date, TimeZoneInfo.Local) : date;

            }
            catch (Exception)
            {
                return DateTime.Now;
            }
        }
    }
    
}