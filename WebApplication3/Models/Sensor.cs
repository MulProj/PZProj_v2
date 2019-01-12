using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication3.Models
{
    public abstract class Sensor
    {
        public int SensorId { get; set; }
        public string Type { get; set; }
        public double MaxValue { get; set; }
        public bool IsOn { get; set; }
        public double CoordinateX { get; set; }
        public double CoordinateY { get; set; }
        public bool Drag { get; set; }
        public virtual int HouseId { get; set; }
        public virtual House House { get; set; }
    }
}
