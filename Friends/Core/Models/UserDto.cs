using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Friends.Core.Models
{
    public class UserDto
    {

        public string Username { get; set; }

        public string Password { get; set; }
        public string Email { get; set; }

        public string ConfirmPassword { get; set; }
        public string AccessToken { get; set; }
        public DateTime AccessTokenExpirationTime { get; set; }
        public string RefreshToken { get; set; }
    }
}
