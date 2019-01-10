using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication3.Models
{
    [NotMapped]
    public class HumiditySensor : Sensor
    {
        public double Humidity { get; set; }
    }
}
