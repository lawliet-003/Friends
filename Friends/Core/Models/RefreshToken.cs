﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Friends.Core.Models
{
    public class RefreshToken
    {
        public Guid Id { get; set; }
        public string Token { get; set; }
        public Guid UserId { get; set; }
    }
}
